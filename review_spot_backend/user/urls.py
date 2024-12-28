from django.urls import path

from user import views

urlpatterns = [
    # 로그인 url
    path('login', views.CustomLoginAPIView.as_view(), name='login'),

    # 토큰 재발급 url
    path('token/refresh', views.TokenRefreshAPIView.as_view(), name='token_refresh'),

    # 회원가입 url
    path('sign-up', views.UserSignUpAPIView.as_view(), name='sign-up'),
]
