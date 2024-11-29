from django.urls import path
from adoption.views import UserRegistrationView


urlpatterns = [
    path(
        "registration/",
        UserRegistrationView.as_view(),
        name="registration_user",
    ),
]
