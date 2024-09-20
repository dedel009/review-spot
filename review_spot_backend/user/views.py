from django.shortcuts import render
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.request import Request
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from common.utils import CustomResponse
from user.serializers import LoginRequestSerializer


class CustomLoginApiView(APIView):
    """
    사용자 계정만 사용하는 API(추후 관리자 계정 로그인 API 개발 예정)
    """
    @swagger_auto_schema(
        request_body=LoginRequestSerializer,
        responses={200: ''},
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
            is_staff=False,     # 일반 사용자만 조회
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
            'refresh': str(refresh_token),
            'access': str(refresh_token.access_token)
        }
        return CustomResponse(code='CODE_0000', data=token_params)


