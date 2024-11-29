from dj_rest_auth.registration.views import RegisterView
from rest_framework.permissions import BasePermission
from django.shortcuts import render
from adoption.serializers import UserRegistrationSerializer


class AuthenticateOnlyUser(BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            if request.user.is_agent:
                return True
            else:
                return False

        return False


class UserRegistrationView(RegisterView):
    serializer_class = UserRegistrationSerializer
