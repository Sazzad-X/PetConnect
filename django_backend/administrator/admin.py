from django.contrib import admin
from .models import AuthUser

@admin.register(AuthUser)
class AuthUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'is_user', 'is_admin')


