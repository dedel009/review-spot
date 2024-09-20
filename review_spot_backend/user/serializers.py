from rest_framework import serializers


# 로그인 요청 시리얼라이저
class LoginRequestSerializer(serializers.Serializer):
    username = serializers.CharField(help_text='유저 아이디', required=True)
    password = serializers.CharField(help_text='유저 패스워드', required=True)


