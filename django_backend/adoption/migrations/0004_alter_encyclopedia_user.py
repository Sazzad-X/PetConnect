# Generated by Django 4.2.6 on 2024-12-02 14:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('adoption', '0003_encyclopedia_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='encyclopedia',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='encyclopedia_user', to=settings.AUTH_USER_MODEL),
        ),
    ]
