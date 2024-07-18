from django.shortcuts import render, get_object_or_404
from .models import Introduce, PublicationNote, Publication, Agenda
from django.http import Http404
from django.core.paginator import Paginator

def index(request):
    introduce = Introduce.objects.all()
    
    context = {
        'introduce': introduce,
    }
    return render(request, 'pericreativity/index.html', context)

def pericreativity(request):
    return render(request, 'pericreativity/pericreativity.html')

def visual(request):
    return render(request, 'pericreativity/visual.html')

def visual_take_it(request):
    return render(request, 'pericreativity/visita-ao-projeto-take-it.html')

def explorando_o_porto(request):
    return render(request, 'pericreativity/explorando-o-porto.html')

def kick_off_seminar(request):
    return render(request, 'pericreativity/kick-off-seminar.html')

def agenda(request): 
    years = Agenda.objects.values_list('date_event__year', flat=True).distinct().order_by('date_event__year') 
    # years = Agenda.objects.values_list('date_event', flat=True).distinct().order_by('date_event') 
    dados = Agenda.objects.values('title', 'event', 'know_more', 'book', 'date_event','date_event__year').order_by('date_event__year')
    teste = Agenda.objects.all()
    
    context = {
        'years': years,
        'dados': dados,    
        'teste': teste,        
    }
    return render(request, 'pericreativity/agenda.html', context)

def publicacoes(request):
    publi = Publication.objects.all()
    paginator = Paginator(publi, 1)
    page_number = request.GET.get('page', 1)
    page = paginator.page(page_number)
    posts = paginator.page(page_number)

    context = {
        'publi': publi,
        'page': page,
        'posts': posts,
    }
    return render(request, 'pericreativity/publicacoes.html', context)

def notas(request):
    etnograficas = PublicationNote.published.all().order_by('publish')
    paginator = Paginator(etnograficas, 2)
    page_number = request.GET.get('page', 1)
    page = paginator.page(page_number)
    posts = paginator.page(page_number)

    context = {
        'etnograficas': etnograficas,  
        'page': page,  
        'posts': posts,
    }
    return render(request, 'pericreativity/textos_notas_etnograficas.html', context)

def textos_detalhes(request, year, month, day, post):
    # try:
    #     post = PublicationNote.published.get(id=id)
    # except PublicationNote.DoesNotExist:
    #     raise Http404("No Post found.")
    # return render(request,
    #               'pericreativity/textos_detalhes.html',
    #               {'post': post})
        
    post = get_object_or_404(PublicationNote,                                    
                            status=PublicationNote.Status.PUBLISHED,
                            slug=post,
                            publish__year=year,
                            publish__month=month,
                            publish__day=day)
    return render(request, 'pericreativity/textos_detalhes.html', {'post': post})

def fazparte(request):
    return render(request, 'pericreativity/fazparte.html')

def equipa(request):
    return render(request, 'pericreativity/equipa.html')

def galeria(request):
    return render(request, 'pericreativity/galeria.html')