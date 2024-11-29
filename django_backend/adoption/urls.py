from django.urls import path
from adoption.views import UserRegistrationSerializer


urlpatterns = [
    path(
        "registration/",
        UserRegistrationSerializer.as_view(),
        name="registration_user",
    ),
]
