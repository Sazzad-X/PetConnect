from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from dj_rest_auth.registration.views import VerifyEmailView
from rest_framework_simplejwt.views import TokenVerifyView
from dj_rest_auth.views import (
    PasswordResetConfirmView,
    PasswordResetView,
    PasswordChangeView,
)
from django.views.generic import TemplateView
# from administrator.views import LoginWthPermission, CustomPasswordChangeView


urlpatterns = [
    path("admin/", admin.site.urls),
    # ---------- Auth ------------
    # path("rest-auth/login/", LoginWthPermission.as_view(), name="login_view"),
    # Password Change
    # path(
    #     "rest-auth/password/change/",
    #     CustomPasswordChangeView.as_view(),
    #     name="password_change",
    # ),
    path("rest-auth/", include("dj_rest_auth.urls")),
    path(
        "rest-auth/registration/account-confirm-email/",
        VerifyEmailView.as_view(),
        name="account_email_verification_sent",
    ),
    path("rest-auth/registration/", include("dj_rest_auth.registration.urls")),
    # Password Reset
    path(
        "rest-auth/password/reset/", PasswordResetView.as_view(), name="password_reset"
    ),
    path(
        "rest-auth/password/reset/confirm/",
        PasswordResetConfirmView.as_view(),
        name="rest_password_reset_confirm",
    ),
    path(
        "rest-auth/password/reset/confirm/<str:uidb64>/<str:token>",
        TemplateView.as_view(),
        name="password_reset_confirm",
    ),
    path("get-access-token/", TokenRefreshView.as_view(), name="get-access-token"),
    path("api/token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    # ---------- End Auth ----------
    path("adoption/", include("adoption.urls")),
    path("administrator/", include("administrator.urls")),
]