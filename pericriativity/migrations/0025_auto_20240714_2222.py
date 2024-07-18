# Generated by Django 3.2.25 on 2024-07-14 21:22

from django.db import migrations, models
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        ('pericriativity', '0024_auto_20240714_2219'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='publication',
            options={'ordering': ['-publish'], 'verbose_name': 'publicação', 'verbose_name_plural': 'publicação'},
        ),
        migrations.AlterModelOptions(
            name='publicationnote',
            options={'ordering': ['-publish'], 'verbose_name': 'nota etnográfica', 'verbose_name_plural': 'nota etnográfica'},
        ),
        migrations.AlterField(
            model_name='publication',
            name='link',
            field=models.CharField(max_length=250, verbose_name='link da publicação'),
        ),
        migrations.AlterField(
            model_name='publication',
            name='publication',
            field=django_quill.fields.QuillField(blank=True, help_text='Digite ou cole aqui o resumo da publicação (até 265 caracteres)', null=True, verbose_name='publicação'),
        ),
        migrations.AlterField(
            model_name='publication',
            name='title',
            field=models.CharField(max_length=250, verbose_name='título'),
        ),
    ]
