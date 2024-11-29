from django.urls import path
from adoption.views import (
    UserRegistrationView,
    EncyclopediaView,
    PublicEncyclopediaView,
)


urlpatterns = [
    path(
        "registration/",
        UserRegistrationView.as_view(),
        name="registration_user",
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
]
