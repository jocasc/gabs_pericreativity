from django.shortcuts import render

def index(request):
    return render(request, 'pericreativity/index.html')

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
    return render(request, 'pericreativity/agenda.html')

def notas(request):
    return render(request, 'pericreativity/textos_notas_etnograficas.html')

def textos_detalhes(request):
    return render(request, 'pericreativity/textos_detalhes.html')

def fazparte(request):
    return render(request, 'pericreativity/fazparte.html')

def equipa(request):
    return render(request, 'pericreativity/equipa.html')

def publicacoes(request):
    return render(request, 'pericreativity/publicacoes.html')

def galeria(request):
    return render(request, 'pericreativity/galeria.html')