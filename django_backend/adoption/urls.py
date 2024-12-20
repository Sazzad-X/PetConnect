from django.urls import path
from adoption.views import (
    UserRegistrationView,
    EncyclopediaView,
    PublicEncyclopediaView,
    PetView,
    PublicPetView,
    ProfileView,
    PetApplicationView,
)


urlpatterns = [
    path(
        "registration/",
        UserRegistrationView.as_view(),
        name="registration_user",
    ),
    path(
        "profile/",
        ProfileView.as_view(),
        name="profile",
    ),
    path(
        "pet/",
        PetView.as_view(),
        name="pet",
    ),
    path(
        "pet/<int:pk>",
        PetView.as_view(),
        name="pet",
    ),
    path(
        "public-pet/",
        PublicPetView.as_view(),
        name="public-pet",
    ),
    path(
        "encyclopedia/",
        EncyclopediaView.as_view(),
        name="encyclpedia",
    ),
    path(
        "encyclopedia/<int:pk>",
        EncyclopediaView.as_view(),
        name="encyclpedia",
    ),
    path(
        "public-encyclopedia/",
        PublicEncyclopediaView.as_view(),
        name="public-encyclopedia",
    ),
    path(
        "pet-application/",
        PetApplicationView.as_view(),
        name="pet-application",
    ),
]
