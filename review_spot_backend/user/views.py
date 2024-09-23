from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.request import Request
from rest_framework.views import APIView
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework_simplejwt.tokens import RefreshToken

from common.utils import CustomResponse
from user.serializers import LoginRequestSerializer, TokenRefreshRequestSerializer, LoginResponseSerializer, \
    TokenRefreshResponseSerializer


class CustomLoginApiView(APIView):
    """
    사용자 계정만 사용하는 API(추후 관리자 계정 로그인 API 개발 예정)
    """

    @swagger_auto_schema(
        request_body=LoginRequestSerializer,
        responses={200: LoginResponseSerializer},
        operation_description="로그인 API",
    )
    def post(self, request: Request):
        # 요청 시리얼라이저로 쿼리 파라미터를 검증
        request_serializer = LoginRequestSerializer(data=request.data)
        request_serializer.is_valid(raise_exception=True)

        # 유저 아이디
        username = request_serializer.validated_data.get('username')
        # 유저 패스워드
        password = request_serializer.validated_data.get('password')

        # 해당 유저가 있는지 없는지 검증
        from .models import CustomUser
        user_qs = CustomUser.objects.filter(
            username=username,
            is_active=True,
            is_staff=False,  # 일반 사용자만 조회
        )

        # 유저가 없을 경우
        if not user_qs.exists():
            return CustomResponse(code='CODE_0001', status_code=status.HTTP_401_UNAUTHORIZED)

        user_instance = user_qs.first()

        # 비밀번호 검증
        if not user_instance.check_password(password):
            return CustomResponse(code='CODE_0003', status_code=status.HTTP_401_UNAUTHORIZED)

        # jwt 토큰 발급
        refresh_token = RefreshToken.for_user(user_instance)
        token_params = {
            'refresh_token': str(refresh_token),
            'access_token': str(refresh_token.access_token)
        }
        return CustomResponse(code='CODE_0000', data=LoginResponseSerializer(instance=token_params, many=False).data)


class TokenRefreshAPIView(APIView):
    """
    리프래쉬 토큰을 통해 액세스 토큰을 재발급하는 API
    """

    @swagger_auto_schema(
        request_body=TokenRefreshRequestSerializer,
        responses={200: TokenRefreshResponseSerializer},
        operation_description="토큰 재발급 API",
    )
    def post(self, request, *args, **kwargs):
        # 클라이언트에서 리프레시 토큰 가져오기
        refresh_token = request.data.get('refresh_token', '')

        print("refresh_token :::", refresh_token)
        if not refresh_token:
            return CustomResponse(code='CODE_0005', status_code=status.HTTP_400_BAD_REQUEST)

        try:
            # RefreshToken 클래스 사용해 토큰 검증 및 새 액세스 토큰 생성
            refresh = RefreshToken(refresh_token)
            access_token = refresh.access_token

            return CustomResponse(data=TokenRefreshResponseSerializer(instance={'access_token': str(access_token)}, many=False).data)

        except TokenError as e:
            # 토큰이 유효하지 않거나 만료된 경우 예외 처리
            return CustomResponse(code='CODE_0006', status_code=status.HTTP_401_UNAUTHORIZED)
