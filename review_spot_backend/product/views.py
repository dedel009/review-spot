from django.shortcuts import render
from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from product.models import Product
from product.serializers import ProductSerializer


# Create your views here.

class ProductList(APIView):
    def get(self, request: Request, format=None):
        # validate_request = ProductSerializer(data=request.data)
        # if not validate_request.is_valid():
        #     print("양식에 맞지 않습니다.")
        #     return Response(validate_request.errors, status=status.HTTP_400_BAD_REQUEST)

        product_qs = Product.objects.all()
        if product_qs.exists():
            print("제품 목록 조회 성공")
            return Response(ProductSerializer(product_qs, many=True).data, status=status.HTTP_200_OK)

