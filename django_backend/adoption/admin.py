from django.contrib import admin
from .models import User, Pet, PetApplication, Encyclopedia

admin.site.register(User)
admin.site.register(Pet)
admin.site.register(PetApplication)
admin.site.register(Encyclopedia)

