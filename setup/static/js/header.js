var mainImage = document.getElementById('main-image')
var myNav = document.getElementById('mynav')
var myarticle = document.getElementById('myarticle')
var mymain = document.querySelector('main')
var burger = document.getElementById('hamburguer')


const divPrincipal = document.createElement('div')
divPrincipal.setAttribute('class', 'modal')
var contentDiv = document.createElement('div')
contentDiv.setAttribute('class', 'content')

const mybody = document.querySelector('body')
const modalPrincipal = document.createElement('div')
modalPrincipal.setAttribute('class', 'modal')
mybody.appendChild(modalPrincipal)



var img = document.createElement('img')
img.src = '/static/assets/img/small-logo.png'
img.setAttribute('id', 'myimg')
img.style.left = 0
img.style.height = '35px'



myNav.style.zIndex = '999'




/* criar div amarela que recebe botao menu */
var mydiv = document.createElement('div')
mydiv.appendChild(img)
// mydiv.style.height = '35px'
// mydiv.style.width = '94vw'
mydiv.setAttribute('class', 'burger')

/* inserir div amarela antes do primeiro artigo */
mymain.insertBefore(mydiv, mymain.children[2])


burgerIcon = document.createElement('div')
burgerIcon.appendChild(document.createElement('div'))
burgerIcon.appendChild(document.createElement('div'))
burgerIcon.appendChild(document.createElement('div'))
burgerIcon.setAttribute('class', 'burger-icon')
mydiv.appendChild(burgerIcon)
var burger = document.querySelector('.burger')
burger.style.backgroundColor = '#FECE00'
burger.style.position = 'fixed'
burger.style.top = 0
img.style.visibility = 'hidden'


if (window.location.pathname == '/') {
   
window.addEventListener('scroll', () => {
    
    if ((mainImage.getBoundingClientRect().top <= -30) && (window.innerWidth > 500))  {
        myNav.classList.add('appear')
        mainImage.style.paddingTop = '130px'
        
        
    } else {
        myNav.classList.remove('appear')
        mainImage.style.paddingTop = '50px'        
        myNav.style.top = 70        
    }


    if (mainImage.getBoundingClientRect().top <= -150){
        burger.style.backgroundColor = '#1e1e1e'        
        img.style.filter = 'invert(6%) sepia(18%) saturate(71%) hue-rotate(323deg) brightness(81%) contrast(85%)'
        img.style.filter = 'invert(81%) sepia(41%) saturate(3050%) hue-rotate(1deg) brightness(106%) contrast(102%)'   
        img.style.visibility = 'visible'     
        for (let i = 0; i < burgerIcon.children.length; i++) {
            burgerIcon.children[i].style.backgroundColor = '#FECE00'
            }
    }
    else {                     
        burger.style.backgroundColor = '#FECE00'
        img.style.filter = 'invert(6%) sepia(18%) saturate(71%) hue-rotate(323deg) brightness(81%) contrast(85%)'
        img.style.filter = 'invert(81%) sepia(41%) saturate(3050%) hue-rotate(1deg) brightness(106%) contrast(102%)'
        img.style.visibility = 'hidden'
        for (let i = 0; i < burgerIcon.children.length; i++) {
            burgerIcon.children[i].style.backgroundColor = '#1e1e1e'
            }
    }
    
})

} else if ((window.location.pathname == '/agenda') || (window.location.pathname == '/fazparte')) {
    img.style.visibility = 'visible'
    burger.style.backgroundColor = '#1e1e1e';    
    img.style.filter = 'invert(81%) sepia(41%) saturate(3050%) hue-rotate(1deg) brightness(106%) contrast(102%)'
    for (let i = 0; i < burgerIcon.children.length; i++) {
        burgerIcon.children[i].style.backgroundColor = '#FECE00'
        }    
}
 else {
    img.style.visibility = 'visible'     
     img.style.filter = 'invert(6%) sepia(18%) saturate(71%) hue-rotate(323deg) brightness(81%) contrast(85%)'     
     burger.style.backgroundColor = 'white';     
     burger.style.borderBottom = '1px solid black';
}

img.addEventListener('click', (e) => {
    // location.href = 'index'
    window.location.href = '/'
    // console.log('clicado')
})

// img.style.filter = 'invert(6%) sepia(18%) saturate(71%) hue-rotate(323deg) brightness(81%) contrast(85%)'


textOptions = ['X', 'SOBRE', 'VISUAL', 'TEXTOS', 'AGENDA', 'FAZ PARTE!', 'PT | EN']

const subSobre = ['PERICREATIVITY', 'EQUIPA', 'GALERIA DO PROJETO']
const subTextos = ['PUBLICAÇÕES', 'NOTAS ETNOGRÁFICAS']
                                  
for(var i=0; i<textOptions.length; i++) {   

        const mDiv = document.createElement('div')        
        const mP = document.createElement('p')                
        mP.setAttribute('class', 'item')

        mP.innerText = textOptions[i]
        
        mDiv.appendChild(mP)
        
        var contentDiv = document.createElement('div')
        contentDiv.setAttribute('class', 'content')            

        if(textOptions[i] == 'SOBRE'){                                    
            for(var j=0; j<subSobre.length; j++) {                     
                const pSubItem = document.createElement('p')  
                pSubItem.setAttribute('class', 'sub-item')
                pSubItem.innerText = subSobre[j]                                
                contentDiv.appendChild(pSubItem)                
            }
            mDiv.appendChild(contentDiv)

        } else if(textOptions[i] == 'TEXTOS'){
            for(var j=0; j<subTextos.length; j++) {                 
                const pSubItem = document.createElement('p')
                pSubItem.setAttribute('class', 'sub-item')
                pSubItem.innerText = subTextos[j]                                
                contentDiv.appendChild(pSubItem)
            }
            mDiv.appendChild(contentDiv)            
        }
        divPrincipal.appendChild(mDiv)    
}


mymain.insertBefore(divPrincipal, mymain.children[2])

var meusItens = document.getElementsByClassName('item');
var meusConteudos = document.getElementsByClassName('content');

meusItens[1].addEventListener('click', (e)=> {

    var content = e.target.nextElementSibling;
    
    if (e.target.classList.toggle('active')){
                         
        
        meusConteudos[0].style.display = 'block'            
        meusConteudos[1].style.display = 'none'
        meusItens[3].classList.remove('active')         

    }else {        
        meusConteudos[0].style.display = 'none'            
    }
    
    })

    meusItens[3].addEventListener('click', (e)=> {
    var content = e.target.nextElementSibling;
    
    if (e.target.classList.toggle('active')){
                          
        
        meusConteudos[1].style.display = 'block'            
        meusConteudos[0].style.display = 'none'
        meusItens[1].classList.remove('active')  
        
    }else {        
        content.style.display = 'none'
    }
    
    })

    
meusItens[2].addEventListener('click', () => {
    location.href = 'visual'
})
meusItens[4].addEventListener('click', () => {
    location.href = 'agenda'
})
meusItens[5].addEventListener('click', () => {    
    window.location.assign('fazparte')
})

var subItens = document.getElementsByClassName('sub-item')

const pages = ['pericreativity', 'equipa', 'galeria', 'publicacoes', 'notas']

for (let i=0; i<subItens.length; i++){
    subItens[i].addEventListener('click', () => {
        location.href = pages[i]
    })
}


var closeBtn = divPrincipal.children[0]
closeBtn.addEventListener('click', () => {
    
    divPrincipal.style.height = '0'
    document.body.style.overflow = 'scroll'
})

burger.addEventListener('click', () => {    
    divPrincipal.classList.add('side-animation')
    divPrincipal.style.height = '100vh'
    document.body.style.overflow = 'hidden'   
                 
})

