import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product', '0004_remove_product_description_product_category_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(verbose_name='리뷰 작성자 닉네임')),
                ('content', models.TextField(verbose_name='리뷰 내용')),
                ('review_score_info', models.JSONField(blank=True, default=dict, null=True, verbose_name='리뷰 점수 정보')),
                ('aroma_profile', models.JSONField(verbose_name='방사형 차트에 쓰이는 데이터')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='생성일시')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='수정일시')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='product.product')),
            ],
        ),
    ]