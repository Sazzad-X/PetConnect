from dj_rest_auth.registration.views import RegisterView
from rest_framework.permissions import BasePermission
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from adoption.serializers import (
    UserRegistrationSerializer,
    EncyclpediaSerializer,
    PetSerializer,
)
from adoption.models import Encyclopedia, Pet


class AuthenticateOnlyUser(BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            if request.user.is_user:
                return True
            else:
                return False

        return False


class UserRegistrationView(RegisterView):
    serializer_class = UserRegistrationSerializer


# create CRUD API for Pet
class PetView(APIView):
    permission_classes = [AuthenticateOnlyUser]

    def get(self, request):
        # get individual pet
        if "id" in request.query_params:
            pet = Pet.objects.get(id=request.query_params["id"])
            serializer = PetSerializer(pet)
            return Response(serializer.data)

        pets = Pet.objects.filter(user=request.user)
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PetSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        pet = Pet.objects.get(id=pk)
        serializer = PetSerializer(pet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        pet = Pet.objects.get(id=pk)
        pet.delete()
        return Response({"message": "Pet deleted successfully."})


class PublicPetView(APIView):
    def get(self, request):
        if "id" in request.query_params:
            pet = Pet.objects.get(id=request.query_params["id"])
            serializer = PetSerializer(pet)
            return Response(serializer.data)

        pets = Pet.objects.filter(approved=True)
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data)


# create CRUD API for Encyclpedia
class EncyclopediaView(APIView):
    permission_classes = [AuthenticateOnlyUser]

    def get(self, request):
        # get individual encyclpedia
        if "id" in request.query_params:
            encyclpedia = Encyclopedia.objects.get(id=request.query_params["id"])
            serializer = EncyclpediaSerializer(encyclpedia)
            return Response(serializer.data)

        encyclpedias = Encyclopedia.objects.filter(user=request.user)
        serializer = EncyclpediaSerializer(encyclpedias, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EncyclpediaSerializer(
            data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        encyclpedia = Encyclopedia.objects.get(id=pk)
        serializer = EncyclpediaSerializer(encyclpedia, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        encyclpedia = Encyclopedia.objects.get(id=pk)
        encyclpedia.delete()
        return Response({"message": "Encyclopedia deleted successfully."})


class PublicEncyclopediaView(APIView):
    def get(self, request):
        if "id" in request.query_params:
            encyclpedia = Encyclopedia.objects.get(id=request.query_params["id"])
            serializer = EncyclpediaSerializer(encyclpedia)
            return Response(serializer.data)

        encyclpedias = Encyclopedia.objects.filter(approved=True)
        serializer = EncyclpediaSerializer(encyclpedias, many=True)
        return Response(serializer.data)
