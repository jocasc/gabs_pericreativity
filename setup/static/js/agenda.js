var mainImage = document.getElementById('main-image')
var myNav = document.getElementById('mynav')
var myarticle = document.getElementById('myarticle')
var mymain = document.querySelector('main')
var burger = document.getElementById('hamburguer')

const calendar = document.getElementsByClassName('calendar-year')
const calendarEvents = document.getElementsByClassName('calendar-events') 


// console.log(calendar[0].innerHTML)
for (var i=0; i<calendar.length; i++) {
    calendar[i].addEventListener('click', (e)=> {        

        var content = e.target.nextElementSibling
        
        if (e.target.classList.contains('active')){  

            content.style.display = 'block'
            e.target.classList.toggle('active')                        
            calendar[0].children[0].innerHTML = '-'
            
            
            

                for(var j=0; j<calendar.length; j++){                    
                    if(e.target.innerHTML != calendar[j].innerHTML){
                        console.log(j + 'é diferente')   
                        calendar[j].nextElementSibling.style.display = 'none' 
                        calendar[j].classList.add('active') 
                    }
                }                                
        } 
        else {                
        content.style.display = 'none'  
        e.target.classList.toggle('active')  
        calendar[0].children[0].innerHTML = '+'                              
        }
    })
}

const agendaTitles = document.querySelector('.agenda-title')
const agendaDetails = document.querySelector('.agenda-details')

const calendarTitles = document.getElementsByClassName('calendar-events-title')
const calendarDescription = document.getElementsByClassName('calendar-events-description')

const agendaMoreMore = document.getElementsByClassName('agenda__more-more')
const agendaMoreOthers = document.getElementsByClassName('agenda__more-others')

const knowMore = document.getElementsByClassName('saiba-mais')
const book = document.getElementsByClassName('livro-de-resumo')

const linksAgendaMore = [
    'https://xii-congresso-aps.eventqualia.net/pt/2023/inicio/',
    'https://sites.google.com/view/rn27esa2023/',
    'https://isociologia.up.pt/en/events/conferencias-com-adrienne-lee-atterberry',
    'https://portosantocharter.eu'    

]

const linksAgendaOthers = ['https://eu-central-1.linodeobjects.com/evt4-media/documents/Book_of_Abstracts_10Abr.pdf','','','https://www.youtube.com/watch?v=FQvJYir-FkA']
const resumeBook = ['LIVRO DE RESUMOS', '', '', 'LIVRO DE RESUMOS']




for(let i=0; i<calendarTitles.length; i++){
        
        
    calendarTitles[i].addEventListener('click', (e)=> {
    agendaTitles.innerHTML = calendarTitles[i].innerHTML
    agendaDetails.innerHTML = calendarDescription[i].innerHTML


    
    if(knowMore[i].innerHTML != ''){
        agendaMoreMore[0].children[0].href = knowMore[i].innerHTML
        agendaMoreMore[0].children[0].classList.remove('deactived-button')
    } else {
        agendaMoreMore[0].children[0].classList.add('deactived-button')
    }
    
    if(book[i].innerHTML != ''){
        agendaMoreOthers[0].children[0].href = book[i].innerHTML
        agendaMoreOthers[0].children[0].classList.remove('deactived-button')
    } else {
        agendaMoreOthers[0].children[0].classList.add('deactived-button')
    }
    
    // agendaMoreOthers[0].children[0].innerHTML = resumeBook[i]
    
    
    

    // agendaMoreMore[0].children[0].innerHTML = linksAgendaOthers[i]    
            
    
    for(let i=0; i<calendarTitles.length; i++){
        calendarTitles[i].classList.remove('active')
        calendarTitles[i].style.color = '#FECE00'
    }
    e.target.classList.toggle('active')
    e.target.style.color = 'white'
    })
}


function bookButtons() {
if(knowMore[i].innerHTML != ''){
    agendaMoreMore[0].children[0].href = knowMore[calendarTitles.length-1].innerHTML
    agendaMoreMore[0].children[0].classList.remove('deactived-button')
} else {
    agendaMoreMore[0].children[0].classList.add('deactived-button')
}

if(book[i].innerHTML != ''){
    agendaMoreOthers[0].children[0].href = book[calendarTitles.length-1].innerHTML
    agendaMoreOthers[0].children[0].classList.remove('deactived-button')
} else {
    agendaMoreOthers[0].children[0].classList.add('deactived-button')
}

}

const myTimeout = setTimeout(bookButtons, 500);