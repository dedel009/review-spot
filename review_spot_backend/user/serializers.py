from rest_framework import serializers


# 로그인 요청 시리얼라이저
class LoginRequestSerializer(serializers.Serializer):
    username = serializers.CharField(help_text='유저 아이디', required=True)
    password = serializers.CharField(help_text='유저 패스워드', required=True)


# 로그인 응답 시리얼라이저
class LoginResponseSerializer(serializers.Serializer):
    refresh_token = serializers.CharField(help_text='리프레시 토큰')
    access_token = serializers.CharField(help_text='액세스 토큰')


# 토큰 재발급 요청 시리얼라이저
class TokenRefreshRequestSerializer(serializers.Serializer):
    refresh_token = serializers.CharField(
        help_text='리프레시 토큰'
    )


# 토큰 재발급 응답 시리얼라이저
class TokenRefreshResponseSerializer(serializers.Serializer):
    access_token = serializers.CharField(
        help_text='액세스 토큰'
    )
