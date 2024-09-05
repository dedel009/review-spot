from django.db.models import Q
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.request import Request
from rest_framework.views import APIView

from common.serializer import CommonRequestSerializer
from review.serializer import ReivewListResponseSerializer


# 리뷰 작성 및 리스트 조회 API
class ReviewAPIView(APIView):

    @swagger_auto_schema(
        query_serializer=CommonRequestSerializer,
        responses={200: ReivewListResponseSerializer(many=True)},
        operation_description="리뷰 리스트 조회 API",
    )
    # 리뷰 리스트 조회 API
    def get(self, reqeust: Request, *args, **kwargs):

        # 요청 시리얼라이저로 쿼리 파라미터를 검증
        request_serializer = CommonRequestSerializer(data=reqeust.query_params)
        request_serializer.is_valid(raise_exception=True)
        print("request_serializer :::", request_serializer.data)

        # 검증된 데이터로 쿼리셋 필터링
        # 검색어
        query_params = request_serializer.validated_data.get('query', '')
        # 카테고리
        category_params = request_serializer.validated_data.get('category', '')
        # 정렬 방법
        sort = request_serializer.validated_data.get('sort', 'created')

        from review.models import Review
        review_queryset = Review.objects.all()

        # 리뷰 내용 필터
        if query_params:
            review_queryset = review_queryset.filter(
                Q(content__contains=query_params)
            )

        # 카테고리 필터
        if category_params:
            review_queryset = review_queryset.filter(
                Q(product__category__name__iexact=category_params)
            )

        # 정렬 처리
        if sort == 'created':
            review_queryset = review_queryset.order_by('-created')
        elif sort == 'id':
            review_queryset = review_queryset.order_by('-id')

        # 페이지네이션 처리
        from common.utils import CustomPagination
        paginator = CustomPagination()
        paginated_review_list = paginator.paginate_queryset(review_queryset, reqeust)

        print("paginated_review_list :::", paginated_review_list)

        if len(paginated_review_list) == 0:
            error_message = '조회된 리뷰 목록이 없습니다.'
            return paginator.get_paginated_response(status=status.HTTP_400_BAD_REQUEST, data=error_message)

        # 응답 시리얼라이저로 데이터 직렬화
        response_review_list_serializer = ReivewListResponseSerializer(paginated_review_list, many=True)

        return paginator.get_paginated_response(status=status.HTTP_200_OK, data=response_review_list_serializer.data)

