from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from adoption.models import User, Encyclopedia


# Custom Registration
class UserRegistrationSerializer(RegisterSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only=True,
    )  # by default allow_null = False

    name = serializers.CharField(required=True)
    contact = serializers.IntegerField(required=True)
    address = serializers.CharField(required=True)

    def get_cleaned_data(self):
        data = super(UserRegistrationSerializer, self).get_cleaned_data()
        extra_data = {
            "name": self.validated_data.get("name", ""),
            "address": self.validated_data.get("address", ""),
            "contact": self.validated_data.get("contact", ""),
        }
        data.update(extra_data)
        return data

    def save(self, request):
        user = super(UserRegistrationSerializer, self).save(request)
        user.is_user = True
        user.save()
        User(
            user=user,
            name=self.validated_data.get("name"),
            address=self.validated_data.get("address"),
            contact=self.validated_data.get("contact"),
        ).save()
        return user


class EncyclpediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Encyclopedia
        fields = "__all__"
        read_only_fields = ("approved",)
