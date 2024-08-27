import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
        ('product', '0003_alter_product_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='description',
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='category.category'),
        ),
        migrations.AddField(
            model_name='product',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='생성일시'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='product',
            name='imgPath',
            field=models.CharField(blank=True, null=True, verbose_name='제품 이미지 경로'),
        ),
        migrations.AddField(
            model_name='product',
            name='product_info',
            field=models.JSONField(blank=True, default=dict, null=True, verbose_name='제품 정보 관련 데이터'),
        ),
        migrations.AddField(
            model_name='product',
            name='updated',
            field=models.DateTimeField(auto_now=True, verbose_name='수정일시'),
        ),
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.CharField(verbose_name='제품명'),
        ),
    ]
