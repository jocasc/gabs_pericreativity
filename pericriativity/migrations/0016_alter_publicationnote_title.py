# Generated by Django 3.2.25 on 2024-07-14 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pericriativity', '0015_alter_publicationnote_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicationnote',
            name='title',
            field=models.CharField(max_length=250, verbose_name='titulo'),
        ),
    ]
