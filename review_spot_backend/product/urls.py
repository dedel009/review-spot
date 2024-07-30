from django.urls import path, include

from product import views

urlpatterns = [
    path('list/', views.ProductList.as_view(), name='index')
]
