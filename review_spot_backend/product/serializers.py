from rest_framework import serializers

from category.serializers import CategoryAllSerializer
from product.models import Product


# 상품 시리얼라이저
class ProductAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


# 상품 리스트 응답 시리얼라이저
class ProductListResponseSerializer(serializers.ModelSerializer):

    # 상품 ID
    def get_product_id(self, instance: Product):
        return instance.pk

    # 상품 이미지 경로
    def get_img_path(self, instance: Product):
        return instance.imgPath

    # 상품명
    def get_product_name(self, instance: Product):
        return instance.name

    # 카테고리
    def get_category(self, instance: Product):
        return CategoryAllSerializer(instance=instance.category).data

    # 양주 용량
    def get_capacity(self, instance: Product):
        return instance.product_info.get('capacity', 0)

    # 양주 도수
    def get_alcohol(self, instance: Product):
        return instance.product_info.get('alcohol', 0)

    # 양주 생산지
    def get_area(self, instance: Product):
        return instance.product_info.get('area', '')

    product_id = serializers.SerializerMethodField()
    img_path = serializers.SerializerMethodField()
    product_name = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()
    capacity = serializers.SerializerMethodField()
    alcohol = serializers.SerializerMethodField()
    area = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            'product_id',
            'img_path',
            'product_name',
            'category',
            'capacity',
            'alcohol',
            'area',
        ]

