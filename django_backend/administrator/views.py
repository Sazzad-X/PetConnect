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


# Authenticate User Only Class
class AuthenticateOnlyAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            if request.user.is_admin:
                return True
            else:
                return False

        return False


class EncyclopediaApprovalView(APIView):
    permission_classes = [AuthenticateOnlyAdmin]

    def get(self, request):
        encyclopedias = Encyclopedia.objects.filter(is_approved=False)
        serializer = EncyclpediaSerializer(encyclopedias, many=True)
        return Response(serializer.data)

    def put(self, request, pk):
        encyclopedia = Encyclopedia.objects.get(pk=pk)
        encyclopedia.is_approved = True
        encyclopedia.save()
        return Response(status=status.HTTP_200_OK)

    def delete(self, request, pk):
        encyclopedia = Encyclopedia.objects.get(pk=pk)
        encyclopedia.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PetApprovalView(APIView):
    permission_classes = [AuthenticateOnlyAdmin]

    def get(self, request):
        pets = Pet.objects.filter(is_approved=False)
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data)

    # approve pet on put request
    def put(self, request, pk):
        pet = Pet.objects.get(pk=pk)
        pet.is_approved = True
        pet.status = "Approved"
        pet.save()
        return Response(status=status.HTTP_200_OK)

    def delete(self, request, pk):
        pet = Pet.objects.get(pk=pk)
        pet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
