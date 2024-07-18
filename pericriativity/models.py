from django.db import models
from django.utils import timezone
from django_quill.fields import QuillField
from django.contrib.auth.models import User
from django.urls import reverse
from django.core.paginator import Paginator


class Introduce(models.Model):
    title = models.CharField(max_length=250, verbose_name='título')    
    body = QuillField(verbose_name='apresentação')
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = ('home')
        verbose_name_plural = ('home')
        ordering = ['-publish']
        indexes = [
            models.Index(fields=['-publish'])
        ]

    def __str__(self):
        return self.title
    

class PublishedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status=PublicationNote.Status.PUBLISHED)
    
class PublicationManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status=Publication.Status.PUBLISHED)    
    

class PublicationNote(models.Model):
    class Status(models.TextChoices):
        PUBLISHED = 'ED', 'publicado'
        PUBLISH = 'SH', 'não publicado'

    # class NoteType(models.TextChoices):
    #     NOTE = 'NT', 'notas etnográficas'
    #     PUBLICATIONS = 'PU', 'publicações'    
    
    title = models.CharField(max_length=250, verbose_name='titulo')
    credits = models.CharField(max_length=250, verbose_name='autoria')
    slug = models.SlugField(max_length=250,
                            unique_for_date='publish', verbose_name='nome da pagina')
    author = models.ForeignKey(User,
                           on_delete=models.CASCADE, verbose_name='autoria do post')
    note = QuillField(blank=True, null=True, verbose_name='nota etnografica', help_text='Digite ou cole aqui o texto completo da Nota Etnográfica')
    # publication = QuillField(blank=True, null=True, verbose_name='publicacao')
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=2,
                          choices=Status.choices,
                          default=Status.PUBLISH)
    # note_type = models.CharField(max_length=2,
    #                     choices=NoteType.choices, verbose_name='tipo de texto')                        

    objects = models.Manager() # default manager
    published = PublishedManager() # custom manager

    class Meta: 
        verbose_name = ('nota etnográfica')
        verbose_name_plural = ('nota etnográfica')
        ordering = ['-publish']
        indexes = [
            models.Index(fields=['-publish'])
        ]

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('visita_ao_bairro',
                       args=[self.publish.year,
                             self.publish.month,
                             self.publish.day,
                             self.slug])
    

class Agenda(models.Model):
    title = models.CharField(max_length=250, verbose_name='título')
    # event = QuillField(verbose_name='evento')
    event = models.TextField(verbose_name='evento')
    know_more = models.CharField(max_length=250, verbose_name='saiba mais', blank=True)
    book = models.CharField(max_length=250, verbose_name='livro de resumos', blank=True)
    date_event = models.DateField(default=timezone.now, verbose_name='data do evento', help_text='Coloque a data de início do evento.')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta: 
        verbose_name = ('agenda')
        verbose_name_plural = ('agenda')
        
    def __str__(self):
        return self.title
    
        


class Publication(models.Model):
    class Status(models.TextChoices):
        PUBLISHED = 'ED', 'publicado'
        PUBLISH = 'SH', 'não publicado'

    title = models.CharField(max_length=250, verbose_name='título')
    credits = models.CharField(max_length=250, verbose_name='autoria')
    author = models.ForeignKey(User,
                           on_delete=models.CASCADE, verbose_name='autoria do post')
        
    publication = QuillField(blank=True, null=True, verbose_name='publicação', help_text='Digite ou cole aqui o resumo da publicação (até 265 caracteres)')
    link = models.CharField(max_length=250, verbose_name='link da publicação')
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=2,
                          choices=Status.choices,
                          default=Status.PUBLISH)

    objects = models.Manager() # default manager
    published = PublicationManager() # custom manager

    class Meta: 
        verbose_name = ('publicação')
        verbose_name_plural = ('publicação')
        ordering = ['-publish']
        indexes = [
            models.Index(fields=['-publish'])
        ]

    def __str__(self):
        return self.title
    