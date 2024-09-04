from rest_framework import serializers

from product.serializers import ProductSerializer
from review.models import Review


# 리뷰 요청 시리얼라이저
class ReviewRequestSerializer(serializers.Serializer):
    query = serializers.CharField(
        help_text='검색어',
        default="",
    )
    # display = serializers.IntegerField(
    #     help_text='한번에 표시할 검색 결과 개수',
    #     default=20
    # )
    category = serializers.CharField(
        help_text='리뷰 목록의 카테고리',
        default=''
    )
    sort = serializers.CharField(
        help_text='검색 결과 정렬 방법',
        default='created'
    )
    # pageNum = serializers.IntegerField(
    #     help_text='페이지 번호',
    #     default=0
    # )


# 리뷰 응답 시리얼라이저
class ReivewResponseSerializer(serializers.ModelSerializer):

    def get_review_id(self, instance: Review):
        return instance.pk

    # 리뷰 작성자 별명
    # def get_nickname(self, instance: Review):
    #     return instance.nickname

    def get_avg_score(self, instance: Review):
        return instance.review_score_info.get('avg_score', 0)

    def get_nose_score(self, instance: Review):
        return instance.review_score_info.get('nose_score', 0)

    def get_palate_score(self, instance: Review):
        return instance.review_score_info.get('palate_score', 0)

    def get_finish_score(self, instance: Review):
        return instance.review_score_info.get('finish_score', 0)

    def get_product(self, instance: Review):
        return ProductSerializer(instance=instance.product).data

    # def get_content(self, instance: Review):
    #     return instance.content
    #
    # def get_aroma_profile(self, instance: Review):
    #     return instance.aroma_profile

    review_id = serializers.SerializerMethodField()
    # nickname = serializers.SerializerMethodField()
    avg_score = serializers.SerializerMethodField()
    nose_score = serializers.SerializerMethodField()
    palate_score = serializers.SerializerMethodField()
    finish_score = serializers.SerializerMethodField()
    # content = serializers.SerializerMethodField()
    # aroma_profile = serializers.SerializerMethodField()
    product = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = [
            'review_id',
            'nickname',
            'avg_score',
            'nose_score',
            'palate_score',
            'finish_score',
            'content',
            'aroma_profile',
            'product',
        ]

