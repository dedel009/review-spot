# Generated by Django 5.0.7 on 2024-08-26 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(verbose_name='카테고리명')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='생성일시')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='수정일시')),
            ],
        ),
    ]