from django.db.models import Q
from django.shortcuts import render
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from review.serializer import ReviewRequestSerializer, ReivewResponseSerializer


class CustomPagination(PageNumberPagination):
    # 페이지 번호
    page_query_param = 'pageNum'
    # 페이지 크기
    page_size_query_param = 'display'
    # 기본 페이지 크기
    page_size = 20
    # 최대 페이지 크기
    # max_page_size = 100


# 리뷰 작성 및 조회 API
class ReviewAPIView(APIView):
    pagination_class = CustomPagination

    # 리뷰 조회 API
    def get(self, reqeust: Request, *args, **kwargs):

        # 요청 시리얼라이저로 쿼리 파라미터를 검증
        request_serializer = ReviewRequestSerializer(data=reqeust.query_params)
        request_serializer.is_valid(raise_exception=True)

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
                Q(category__name__iexact=category_params)
            )

        # 정렬 처리
        if sort == 'created':
            review_queryset = review_queryset.order_by('-created')
        elif sort == 'id':
            review_queryset = review_queryset.order_by('-id')

        # 페이지네이션 처리
        paginator = self.pagination_class()
        paginated_review_queryset = paginator.paginate_queryset(review_queryset, reqeust)

        print("paginated_review_queryset :::", paginated_review_queryset)

        # 응답 시리얼라이저로 데이터 직렬화
        reponse_review_serializer = ReivewResponseSerializer(paginated_review_queryset, many=True)
        return paginator.get_paginated_response(reponse_review_serializer.data)

