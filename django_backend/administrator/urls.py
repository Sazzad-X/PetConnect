from django.urls import path
from .views import PetApprovalView, EncyclopediaApprovalView

urlpatterns = [
    path("pet-approval/", PetApprovalView.as_view(), name="pet-approval"),
    path("pet-approval/<int:pk>/", PetApprovalView.as_view(), name="pet-approval"),
    path(
        "encyclopedia-approval/",
        EncyclopediaApprovalView.as_view(),
        name="encyclopedia-approval",
    ),
    path(
        "encyclopedia-approval/<int:pk>/",
        EncyclopediaApprovalView.as_view(),
        name="encyclopedia-approval",
    ),
]
