# Generated by Django 3.2.25 on 2024-07-09 21:45

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pericriativity', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='introduce',
            name='body',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]