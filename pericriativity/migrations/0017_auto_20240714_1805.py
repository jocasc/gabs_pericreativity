# Generated by Django 3.2.25 on 2024-07-14 17:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('pericriativity', '0016_alter_publicationnote_title'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='publicationnote',
            options={'ordering': ['-publish'], 'verbose_name': 'textos', 'verbose_name_plural': 'publicacoes_e_notas'},
        ),
        migrations.AlterField(
            model_name='publicationnote',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='autor'),
        ),
        migrations.AlterField(
            model_name='publicationnote',
            name='credits',
            field=models.CharField(max_length=250, verbose_name='autoria'),
        ),
        migrations.AlterField(
            model_name='publicationnote',
            name='note',
            field=django_quill.fields.QuillField(blank=True, null=True, verbose_name='nota etnografica'),
        ),
        migrations.AlterField(
            model_name='publicationnote',
            name='note_type',
            field=models.CharField(choices=[('NT', 'notas etnográficas'), ('PU', 'publicações')], max_length=2, verbose_name='tipo de texto'),
        ),
        migrations.AlterField(
            model_name='publicationnote',
            name='publication',
            field=django_quill.fields.QuillField(blank=True, null=True, verbose_name='publicacao'),
        ),
        migrations.AlterField(
            model_name='publicationnote',
            name='slug',
            field=models.SlugField(max_length=250, unique_for_date='publish', verbose_name='nome da pagina'),
        ),
    ]
