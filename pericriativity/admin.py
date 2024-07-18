from django.contrib import admin
from .models import Introduce, PublicationNote, Publication, Agenda


admin.site.register(Introduce)
admin.site.register(Agenda)


@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'publish', 'status']            

@admin.register(PublicationNote)
class PublicationNoteAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'author', 'status']    
    prepopulated_fields = {'slug': ('title',)}
