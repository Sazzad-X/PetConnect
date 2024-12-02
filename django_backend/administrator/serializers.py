from dj_rest_auth.serializers import LoginSerializer


class CustomLoginSerializer(LoginSerializer):
    def validate(self, attrs):
        # Call the parent validate method
        data = super().validate(attrs)

        # Retrieve the authenticated user from attrs
        user = self.user  # `self.user` is set by the parent serializer
        if not user:
            raise ValueError("Authenticated user not found.")

        # Add `is_user` and `is_admin` to the response
        data["is_user"] = user.is_user
        data["is_admin"] = user.is_admin

        return data
