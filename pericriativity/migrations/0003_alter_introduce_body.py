# Generated by Django 3.2.25 on 2024-07-10 05:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pericriativity', '0002_alter_introduce_body'),
    ]

    operations = [
        migrations.AlterField(
            model_name='introduce',
            name='body',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]