from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


# 커스텀 페이지 네이션 클래스
class CustomPagination(PageNumberPagination):
    # 페이지 번호
    page_query_param = 'page_num'
    # 페이지 크기
    page_size_query_param = 'display'
    # 기본 페이지 크기
    page_size = 20
    # 최대 페이지 크기
    # max_page_size = 100

    def get_paginated_response(self, data, **kwargs):
        return_status = kwargs.get('status')
        print("return_status :::", return_status)
        return Response({
            'success': True,
            'message': '성공' if return_status == status.HTTP_200_OK else data,
            'data': data if return_status == status.HTTP_200_OK else None,
        })


# 응답 반환 메소드
def CustomResponse(code='CODE_0000', data=None):

    return_message = GetCustomCode(code)

    return Response({
        'success': True,
        'message': return_message,
        'data': data,
    })


# 메세지 반환 메소드
def GetCustomCode(code):
    if code == 'CODE_0000':
        return "성공."
    elif code == 'CODE_0001':
        return "존재하지 않는 대상입니다."


