# Generated by Django 3.2.25 on 2024-07-13 16:49

from django.db import migrations, models
import django.utils.timezone
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        ('pericriativity', '0005_quillpost'),
    ]

    operations = [
        migrations.CreateModel(
            name='PublicationNote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('slug', models.SlugField(max_length=250)),
                ('note', django_quill.fields.QuillField()),
                ('publication', django_quill.fields.QuillField()),
                ('publish', models.DateTimeField(default=django.utils.timezone.now)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('status', models.CharField(choices=[('ED', 'publicado'), ('SH', 'não publicado')], default='SH', max_length=2)),
            ],
            options={
                'verbose_name': 'publicacao_e_nota',
                'verbose_name_plural': 'publicacoes_e_notas',
                'ordering': ['-publish'],
            },
        ),
        migrations.AddIndex(
            model_name='publicationnote',
            index=models.Index(fields=['-publish'], name='pericriativ_publish_cdee0b_idx'),
        ),
    ]
