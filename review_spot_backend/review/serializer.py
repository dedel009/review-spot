from rest_framework import serializers


# 리뷰 요청 시리얼라이저
class ReviewRequestSerializer(serializers.Serializer):
    query = serializers.CharField(
        help_text='검색어',
        default="",
    )
    display = serializers.IntegerField(
        help_text='한번에 표시할 검색 결과 개수',
        default=20
    )
    category = serializers.CharField(
        help_text='리뷰 목록의 카테고리',
        default=''
    )
    sort = serializers.CharField(
        help_text='검색 결과 정렬 방법',
        default='created'
    )
    pageNum = serializers.IntegerField(
        help_text='페이지 번호',
        default=0
    )


# 리뷰 응답 시리얼라이저
class ReivewResponseSerializer(serializers.Serializer):
    nickname = serializers.CharField(
        help_text='유저 닉네임',
        required=True,
    )

    nose_score = serializers.IntegerField(
        help_text='냄새 점수'
    )

    palate_score = serializers.IntegerField(
        help_text='향 점수'
    )

    finish_score = serializers.IntegerField(
        help_text='목넘김 점수'
    )

    content = serializers.CharField(
        help_text='리뷰 내용'
    )

    aroma_profile = serializers.JSONField(
        help_text='그래프 관련 정보',
        default=dict(),
    )

