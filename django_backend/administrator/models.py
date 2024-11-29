from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.contrib.postgres.fields import ArrayField


class User(AbstractUser):
    # Boolean fields to select the type of account.
    is_user = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.username
