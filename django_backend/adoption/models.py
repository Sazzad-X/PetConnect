from django.db import models
from django.conf import settings


class User(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="user"
    )

    # Boolean fields to select the type of account.
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    contact = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Pet(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="applications"
    )
    image = models.URLField()
    title = models.CharField(max_length=100)
    details = models.CharField(max_length=500)
    breed = models.CharField(max_length=100)
    age = models.IntegerField()
    approved = models.BooleanField(default=False)
    STATUS = (
        ("Pending", "Pending"),
        ("Approved", "Approved"),
        ("Rejected", "Rejected"),
        ("Adopted", "Adopted"),
    )
    status = models.CharField(max_length=100, choices=STATUS, default="Pending")
    requested_at = models.DateTimeField(auto_now_add=True)


class PetApplication(models.Model):
    pet = models.ForeignKey(
        Pet, on_delete=models.CASCADE, related_name="applications"
    )
    adopter = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="adopter"
    )
    message = models.CharField(max_length=500)
    meeting_time = models.DateTimeField()
    requested_at = models.DateTimeField(auto_now_add=True)


class Encyclopedia(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="encyclopedia_user",
    )
    title = models.CharField(max_length=100)
    details = models.TextField()
    image = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    approved = models.BooleanField(default=False)
