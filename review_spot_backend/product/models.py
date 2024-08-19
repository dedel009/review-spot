from django.db import models

# Create your models here.


# 양주, 술안주 등 리뷰 대상 제품 모델
class Product(models.Model):
    name = models.CharField(
        verbose_name='제품명'
    )

    imgPath = models.CharField(
        verbose_name='제품 이미지 경로'
    )

    alcohol = models.IntegerField(
        verbose_name='도수'
    )

    capacity = models.IntegerField(
        verbose_name='양주 용량'
    )

    area = models.CharField(
        verbose_name='양주 생산지'
    )

    # category = models.ForeignKey(
    #     verbose_name='제품 종류'
    # )

