from django.shortcuts import render
from dj_rest_auth.registration.views import LoginView
from django.contrib.auth import login as django_login
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import BasePermission, IsAuthenticated
from dj_rest_auth.views import PasswordChangeView
from rest_framework import status

from adoption.models import Pet, Encyclopedia
from adoption.serializers import PetSerializer, EncyclpediaSerializer

# auth
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

# email confirmation
from allauth.account.views import ConfirmEmailView
from allauth.account.models import EmailConfirmationHMAC, EmailConfirmation
from django.shortcuts import redirect
from django.http import HttpResponse


# Authenticate User Only Class
class AuthenticateOnlyAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            if request.user.is_admin:
                return True
            else:
                return False

        return False


class CustomLoginView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        password = request.data.get("password")

        # Authenticate the user
        user = authenticate(request, email=email, password=password)
        if not user:
            return Response(
                {"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )

        # Generate tokens
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        # Construct the response
        response_data = {
            "access": access_token,
            "refresh": str(refresh),
            "user": {
                "pk": user.pk,
                "username": user.username,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
            },
            "is_user": user.is_user,
            "is_admin": user.is_admin,
        }

        return Response(response_data, status=status.HTTP_200_OK)


class CustomConfirmEmailView(ConfirmEmailView):

    def get(self, *args, **kwargs):
        key = kwargs["key"]
        try:
            confirmation = EmailConfirmationHMAC.from_key(key)
        except EmailConfirmation.DoesNotExist:
            try:
                confirmation = EmailConfirmation.objects.get(key=key.lower())
            except EmailConfirmation.DoesNotExist:
                confirmation = None

        if confirmation:
            confirmation.confirm(self.request)
            return redirect("https://career-bridge.netlify.app/confirmation-success")
        else:
            return HttpResponse("Invalid or expired token", status=400)


class EncyclopediaApprovalView(APIView):
    permission_classes = [AuthenticateOnlyAdmin]

    def get(self, request):
        encyclopedias = Encyclopedia.objects.filter(approved=False).order_by("-id")
        serializer = EncyclpediaSerializer(encyclopedias, many=True)
        return Response(serializer.data)

    def put(self, request, pk):
        encyclopedia = Encyclopedia.objects.get(pk=pk)
        encyclopedia.approved = True
        encyclopedia.save()
        return Response({"message": "Encyclopedia approved successfully."}, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        encyclopedia = Encyclopedia.objects.get(pk=pk)
        encyclopedia.delete()
        return Response({"message": "Encyclopedia deleted successfully."}, status=status.HTTP_204_NO_CONTENT)


class PetApprovalView(APIView):
    permission_classes = [AuthenticateOnlyAdmin]

    def get(self, request):
        pets = Pet.objects.filter(approved=False).order_by("-id")
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data)

    # approve pet on put request
    def put(self, request, pk):
        pet = Pet.objects.get(pk=pk)
        pet.approved = True
        pet.status = "Approved"
        pet.save()
        return Response({"message": "Pet approved successfully."}, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        pet = Pet.objects.get(pk=pk)
        pet.delete()
        return Response({"message": "Pet deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
