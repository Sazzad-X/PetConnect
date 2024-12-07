import pytest
from rest_framework import status
from django.urls import reverse
from rest_framework.test import APIClient


@pytest.mark.django_db  
def test_public_pet_view():    
    url = reverse("public-pet")
    client = APIClient()
    response = client.get(url, format="json")

    # Assert that the response status code is 200 (OK)
    assert (
        response.status_code == status.HTTP_200_OK
    ), f"Expected 200 OK, but got {response.status_code}"


@pytest.mark.django_db
def test_private_pet_view():
    url = reverse("pet")
    client = APIClient()
    response = client.get(url, format="json")

    # Assert that the response status code is not 200 (OK) since this is a private route
    assert (
        response.status_code != status.HTTP_200_OK
    ), f"Expected non-200 status code, but got {response.status_code}"
