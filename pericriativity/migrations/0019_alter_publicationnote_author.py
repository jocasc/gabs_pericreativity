# Generated by Django 3.2.25 on 2024-07-14 17:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('pericriativity', '0018_alter_publicationnote_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicationnote',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='autoria do post'),
        ),
    ]