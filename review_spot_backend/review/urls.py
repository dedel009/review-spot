from django.urls import path, include

from review import views

urlpatterns = [
    # 리뷰 작성 API
    path('review/', views.ReviewCreateAPIView.as_view())
]
