from rest_framework import serializers


# 공통 요청 시리얼라이저
class CommonRequestSerializer(serializers.Serializer):
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


