from django.shortcuts import render
from dj_rest_auth.registration.views import LoginView
from django.contrib.auth import login as django_login
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import BasePermission, IsAuthenticated
from dj_rest_auth.views import PasswordChangeView
from rest_framework import status
from .serializers import CustomPasswordChangeSerializer


class LoginWthPermission(LoginView):
    def post(self, request, *args, **kwargs):
        self.request = request
        self.serializer = self.get_serializer(data=self.request.data)
        self.serializer.is_valid(raise_exception=True)
        self.login()

        if self.user.is_agent:
            if self.user.agent.approved:
                django_login(self.request, self.user)
            else:
                return Response({"error": "Your account has not been approved"})

        elif self.user.is_customer:
            django_login(self.request, self.user)
            # if self.user.customer.confirmed:
            #     django_login(self.request, self.user)
            # else:
            #     return Response({"error": "Your account is not verified"})

        return self.get_response()


# change password
class CustomPasswordChangeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = request.user
        serializer = CustomPasswordChangeSerializer(
            data=request.data, context={"request": request}
        )

        if serializer.is_valid():
            # Check if old password is correct
            if not user.check_password(serializer.validated_data["old_password"]):
                return Response(
                    {"old_password": "Old password is incorrect."},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            # Set the new password
            user.set_password(serializer.validated_data["new_password1"])
            user.save()

            return Response(
                {"detail": "Password has been changed successfully."},
                status=status.HTTP_200_OK,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Authenticate User Only Class
class AuthenticateOnlyAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            if request.user.is_admin:
                return True
            else:
                return False

        return False

