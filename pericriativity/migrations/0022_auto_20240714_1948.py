# Generated by Django 3.2.25 on 2024-07-14 18:48

from django.db import migrations, models
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        ('pericriativity', '0021_auto_20240714_1839'),
    ]

    operations = [
        migrations.AddField(
            model_name='publication',
            name='link',
            field=models.CharField(default=1, max_length=250, verbose_name='link da publicacao'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='publication',
            name='publication',
            field=django_quill.fields.QuillField(blank=True, help_text='Digite ou cole aqui o resumo da publicação (até 265 caracteres)', null=True, verbose_name='publicacao'),
        ),
        migrations.AlterField(
            model_name='publicationnote',
            name='note',
            field=django_quill.fields.QuillField(blank=True, help_text='Digite ou cole aqui o texto completo da Nota Etnográfica', null=True, verbose_name='nota etnografica'),
        ),
    ]