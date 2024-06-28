// var mainImage = document.getElementById('main-image')
// var myNav = document.getElementById('mynav')
// var myarticle = document.getElementById('myarticle')
var mymain = document.querySelector('main')
var burger = document.getElementById('hamburguer')

var img = document.createElement('img')
img.src = 'static/assets/img/small-logo.png'
img.setAttribute('id', 'myimg')
img.style.left = 0
img.style.height = '35px'

// img.style.visibility = 'hidden'

window.addEventListener('scroll', () => {

    if (burger.getBoundingClientRect().top <= 0) {
        burger.style.backgroundColor = 'white'        
        burger.style.position = 'fixed'
        burger.style.top = 0        
        // img.style.filter = 'invert(81%) sepia(41%) saturate(3050%) hue-rotate(1deg) brightness(106%) contrast(102%)'
        img.style.visibility = 'visible'

        for (let i = 0; i < burgerIcon.children.length; i++) {
            burgerIcon.children[i].style.backgroundColor = '#FECE00'
        }
        
    } else {                
        burger.style.backgroundColor = '#FECE00'
        menuMobile.style.backgroundColor = '#1e1e1e'
        for (let i = 0; i < burgerIcon.children.length; i++) {
            burgerIcon.children[i].style.backgroundColor = 'black'
        }
        img.style.filter = 'invert(6%) sepia(18%) saturate(71%) hue-rotate(323deg) brightness(81%) contrast(85%)'
        img.style.visibility = 'hidden'        
    }
})


/* criar div amarela que recebe botao menu */
var mydiv = document.createElement('div')
mydiv.appendChild(img)
// mydiv.style.height = '35px'
mydiv.style.width = '80vw'
// mydiv.style.backgroundColor = '#FECE00'

mydiv.setAttribute('class', 'burger')
/* inserir div amarela antes do primeiro artigo */
mymain.insertBefore(mydiv, mymain.children[2])
mydiv.style.zIndex = '99'






burgerIcon = document.createElement('div')
burgerIcon.appendChild(document.createElement('div'))
burgerIcon.appendChild(document.createElement('div'))
burgerIcon.appendChild(document.createElement('div'))
burgerIcon.setAttribute('class', 'burger-icon')
mydiv.appendChild(burgerIcon)

// mydiv.appendChild(document.createElement('div'))
// mydiv.appendChild(document.createElement('div'))
// mydiv.appendChild(document.createElement('div'))

var burger = document.querySelector('.burger')

/* criar modal mobile com lista de links */
const menuMobile = document.createElement('ul')
textOptions = ['X', 'SOBRE', 'EQUIPA', 'VISUAL', 'TEXTOS', 'AGENDA', 'FAZ PARTE!', 'PT | EN']
for (var i=0; i<textOptions.length; i++) {
    const option = document.createElement('li')
    if (i == 0) {
        option.setAttribute('id', 'closebtn')
    }
    option.innerText = textOptions[i]
    menuMobile.appendChild(option)    
}
menuMobile.setAttribute('class', 'modal')
mymain.insertBefore(menuMobile, mymain.children[2])


/* mostrar menu em fullscreen */
burger.addEventListener('click', () => {    
    menuMobile.classList.add('side-animation')
    menuMobile.style.height = '100%'
    document.body.style.overflow = 'hidden'
})

/* fechar menu ao clicar no botao X */
var closeBtn = document.getElementById('closebtn')
closeBtn.addEventListener('click', () => {
    // menuMobile.style.width = '0'
    menuMobile.style.height = '0'
    document.body.style.overflow = 'scroll'
})






