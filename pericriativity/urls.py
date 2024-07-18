from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),   
    path('pericreativity', views.pericreativity, name='pericreativity'),
    path('visual', views.visual, name='visual'),
    path('agenda', views.agenda, name='agenda'),
    path('notas', views.notas, name='notas'),
    path('fazparte', views.fazparte, name='fazparte'),
    path('equipa', views.equipa, name='equipa'),
    path('publicacoes', views.publicacoes, name='publicacoes'),
    path('galeria', views.galeria, name='galeria'),
    path('visita-ao-projeto-take-it', views.visual_take_it, name='visual_take_it'),
    path('explorando-o-porto', views.explorando_o_porto, name='explorando_o_porto'),
    path('kick-off-seminar', views.kick_off_seminar, name='kick_off_seminar'),
    path('<int:year>/<int:month>/<int:day>/<slug:post>', 
         views.textos_detalhes, name='visita_ao_bairro'),

]