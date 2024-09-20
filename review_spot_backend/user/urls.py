from django.urls import path

from user import views

urlpatterns = [
    # 로그인 url
    path('', views.CustomLoginApiView.as_view(), name='login'),


]
