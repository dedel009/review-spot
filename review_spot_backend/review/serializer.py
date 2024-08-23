from rest_framework import serializers


class ReviewRequestSerializer(serializers.Serializer):
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

    aroma_profile = serializers.ListSerializer(
        help_text='그래프 관련 정보',
        default=list(),
    )
