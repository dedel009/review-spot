from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


# 리뷰 생성 및 조회 API
class ReviewCreateAPIView(APIView):

    def get(self, request):
        return Response(status=status.HTTP_200_OK)

    def post(self, request):


        return Response(status=status.HTTP_200_OK)