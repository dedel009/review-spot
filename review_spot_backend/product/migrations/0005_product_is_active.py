# Generated by Django 5.0.7 on 2024-09-06 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_remove_product_description_product_category_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='is_active',
            field=models.BooleanField(default=True, verbose_name='사용 유무'),
        ),
    ]