# Generated by Django 5.0.7 on 2024-09-20 14:02

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_customadmin_is_staff'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customadmin',
            name='created_time',
        ),
        migrations.RemoveField(
            model_name='customadmin',
            name='updated_time',
        ),
        migrations.AddField(
            model_name='customadmin',
            name='date_joined',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='생성 일자'),
            preserve_default=False,
        ),
    ]
