from django.db import models

# Create your models here.


# 양주, 술안주 등 리뷰 대상 모델
class Product(models.Model):
    name = models.CharField(
        help_text='제품명'
    )
    description = models.CharField(
        help_text='제품 설명',
    )
