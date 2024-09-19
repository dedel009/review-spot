import uuid

from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models

# Create your models here.


# 유저 모델을 관리하는 커스텀 매니저 클래스
class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        """
        일반 유저 생성 메소드
        """
        if not username:
            raise ValueError('아이디를 입력해주세요.')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        """
        슈퍼 유저 생성 메소드
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(username, password, **extra_fields)


# 커스텀 유저 모델
class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=150, unique=True, verbose_name='유저 아이디')
    external_uuid = models.UUIDField(unique=True, default=uuid.uuid4, verbose_name='통신용 uuid')
    name = models.CharField(max_length=30, null=False, verbose_name='유저 이름')
    email = models.EmailField(blank=True, verbose_name='유저 이메일')
    is_active = models.BooleanField(default=True, verbose_name='유저 사용 유무')
    is_staff = models.BooleanField(default=False, verbose_name='유저 관리자 유무')
    date_joined = models.DateTimeField(auto_now_add=True, verbose_name='생성 일자')

    # Django의 ORM(Object-Relational Mapping)에서 모델 매니저를 지정
    objects = CustomUserManager()

    USERNAME_FIELD = 'username'  # 로그인 시 사용할 필드
    REQUIRED_FIELDS = []  # create_superuser에 필요한 추가 필드

    class Meta:
        db_table = 'user'
