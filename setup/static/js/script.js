var main = document.querySelector('main')
var menu = document.querySelector('.header__navbar')
var closeBtn = document.querySelector('.header__navbar-closebtn')
var footer = document.getElementById('footer')
var moving = document.getElementById('moving')
var linksMenu = document.querySelector('.header__navbar-content__links')
var translate = document.querySelector('.header__navbar-content__translate')
var headerNavbarContent = document.querySelector('.header__navbar-content')
var container = document.querySelector('.container')
var palavra = document.querySelector('.azul')
const viewportWidth = window.innerWidth;


// screen.orientation.addEventListener("change", (event) => {
//   const type = event.target.type;
//   const angle = event.target.angle;
//   console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
//   if (event.target.angle == '0'){
//     palavra.children[0].style.animationPlayState = 'paused'
//   } else {
//     palavra.children[0].style.animationPlayState = 'running'
//   }
// });

// window.addEventListener('orientationchange', () => {

// if (screen.orientation.type == 'landscape-primary' || screen.orientation.type == 'landscape-secondary') {
//   palavra.children[0].style.animationPlayState = 'paused'
//   palavra.children[1].style.animationPlayState = 'paused'
//   palavra.children[2].style.animationPlayState = 'paused'
//   palavra.children[3].style.animationPlayState = 'paused'
//   palavra.children[4].style.animationPlayState = 'paused'
//   alert('em pe')
// } else {
//   palavra.children[0].style.animationPlayState = 'running'
// palavra.children[1].style.animationPlayState = 'running'
// palavra.children[2].style.animationPlayState = 'running'
// palavra.children[3].style.animationPlayState = 'running'
// palavra.children[4].style.animationPlayState = 'running'
// alert('deitado')
// }


  // if(viewportWidth >= 1080){
  //   container.style.top = (palavra.offsetTop) + 250 + 'px'
  // }
  // else if(viewportWidth >= 430 && viewportWidth < 1080){
  // container.style.top = (palavra.offsetTop) + 150 + 'px'
  // } else  {
  // container.style.top = (palavra.offsetTop) + 50 + 'px'
  // }
// })

// if(viewportWidth >= 1080){
//   container.style.top = (palavra.offsetTop) + 250 + 'px'
// }
// else if(viewportWidth >= 430 && viewportWidth < 1080){
// container.style.top = (palavra.offsetTop) + 150 + 'px'
// } else  {
// container.style.top = (palavra.offsetTop) + 50 + 'px'
// }

// redefine a posição das imagens de acordo com o tamanho da tela


// posiciona as imagens em cima do texto
// if(viewportWidth > 430 && viewportWidth <= 1080){
//   container.style.top = (palavra.offsetTop) + 150 + 'px'
// } else if (viewportWidth <= 430) {
//   container.style.top = (palavra.offsetTop) + 50 + 'px'
// }



// redefine a posição das imagens de acordo com o tamanho da tela
// palavra.addEventListener('resize', (e)=> {
//   console.log(`palavra ${e.target.getBoundingClientRect().top}`)
//   container.style.top =( palavra.offsetTop) + 110 + 'px'
//   console.log(`window ${palavra.offsetTop}`)
// })


var portuguese = document.getElementById('portuguese')
var english = document.getElementById('english')


portuguese.addEventListener('click', ()=> {
  alert('Em construção')
  // if(portuguese.className != 'enable'){
  //     portuguese.classList.toggle('enable')  
  //     english.classList.toggle('enable')
  //     linksMenu.children[0].textContent = 'SOBRE'    
  //     linksMenu.children[1].textContent = 'VISUAL' 
  //     linksMenu.children[2].textContent = 'TEXTOS'
  //     linksMenu.children[3].textContent = 'AGENDA'
  //     linksMenu.children[4].textContent = 'FAZ PARTE'
  //     footer.textContent = 'Rodapé. Logos + Redes Sociais.'

  // }    
})

english.addEventListener('click', ()=> {
  alert('Under construction')
  // if(english.className != 'enable'){
    // english.classList.toggle('enable')
    // portuguese.classList.toggle('enable')
    // linksMenu.children[0].textContent = 'ABOUT'
    // linksMenu.children[1].textContent = 'VISUAL'
    // linksMenu.children[2].textContent = 'TEXTS'
    // linksMenu.children[3].textContent = 'SCHEDULE'
    // linksMenu.children[4].textContent = 'GET INVOLVED'
    // footer.textContent = 'Footer. Logos + Social Midias.'
  // }  
})


var sticky = menu.offsetTop
// document.getElementById("translate").style.paddingRight = "30px";

window.addEventListener('scroll', ()=> {
    // console.log(window.scrollY + ' and ' + sticky)

    
    if (window.scrollY >= 350) {
      // console.log(window.scrollY)
      menu.style.backgroundColor = '#1e1e1e'
      linksMenu.style.backgroundColor = '#1e1e1e'
      linksMenu.children[0].children[0].style.color = '#FECE00'      
      linksMenu.children[1].style.color = '#FECE00'
      linksMenu.children[2].children[0].style.color = '#FECE00'
      linksMenu.children[3].style.color = '#FECE00'
      // linksMenu.children[3].children[0].style.color = '#FECE00'
      linksMenu.children[4].style.color = '#FECE00'
      // linksMenu.children[5].style.color = '#FECE00'
      
      translate.style.backgroundColor = '#1e1e1e'
      headerNavbarContent.style.backgroundColor = '#1e1e1e'
      translate.children[0].style.color = '#FECE00'
      translate.children[1].style.color = '#FECE00'
      translate.children[2].style.color = '#FECE00'
      
      document.querySelector('.header__navbar-image').classList.add('black-to-yellow')
      document.querySelector('.header__navbar-image').classList.remove('yellow-to-black')
      menu.style.borderBottom = '1px solid black'      
      // portuguese.style.color = '#FECE00'
      // english.style.color = '#FECE00'
      
        // menu.classList.add("sticky");
        // document.getElementById("translate").style.paddingRight = "0px";
        // main.appendChild(newImage)
        // closeBtn.style.backgroundColor = 'transparent'
        
      } else {
        // console.log('tchau')
        menu.style.backgroundColor = '#FECE00'
        linksMenu.style.backgroundColor = '#FECE00'
        linksMenu.children[0].children[0].style.color = '#1e1e1e' 
        linksMenu.children[1].style.color = '#1e1e1e'
        linksMenu.children[2].children[0].style.color = '#1e1e1e'
        linksMenu.children[3].style.color = '#1e1e1e'
        // linksMenu.children[3].children[0].style.color = '#1e1e1e'
        linksMenu.children[4].style.color = '#1e1e1e'
        // linksMenu.children[5].style.color = '#1e1e1e'
        translate.style.backgroundColor = '#FECE00'
        headerNavbarContent.style.backgroundColor = '#FECE00'
        translate.children[0].style.color = '#1e1e1e'
        translate.children[1].style.color = '#1e1e1e'
        translate.children[2].style.color = '#1e1e1e'
        

        document.querySelector('.header__navbar-image').classList.remove('black-to-yellow')
        document.querySelector('.header__navbar-image').classList.add('yellow-to-black')
        menu.style.borderBottom = '1px solid #FECE00'

        // menu.classList.remove("sticky");        
        // document.getElementById("translate").style.paddingRight = "30px";
        // menu.appendChild(closeBtn)
        // newImage.remove()
        // closeBtn.style.backgroundColor = '#1e1e1e'
        // menu.style.marginTop = '0'
      }
})


linksMenu.children[0].addEventListener('click', ()=> {
  container.children[0].style.display = 'block'
  // console.log('oi')
})

var myButtons = document.querySelector('.container-buttons')
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  // console.log('dentro do carrossel ' + myIndex) 

  if (myIndex == 1){
    myButtons.children[0].style.backgroundColor = '#FECE00'
    myButtons.children[1].style.backgroundColor = '#F8EEE4'
    myButtons.children[2].style.backgroundColor = '#F8EEE4'
    myButtons.children[3].style.backgroundColor = '#F8EEE4' 
    myButtons.children[4].style.backgroundColor = '#F8EEE4' 
  } else if (myIndex == 2) {
    myButtons.children[0].style.backgroundColor = '#F8EEE4'
    myButtons.children[1].style.backgroundColor = '#FECE00'
    myButtons.children[2].style.backgroundColor = '#F8EEE4'
    myButtons.children[3].style.backgroundColor = '#F8EEE4' 
    myButtons.children[4].style.backgroundColor = '#F8EEE4' 
  } else if (myIndex == 3) {
    myButtons.children[0].style.backgroundColor = '#F8EEE4'
    myButtons.children[1].style.backgroundColor = '#F8EEE4'
    myButtons.children[2].style.backgroundColor = '#FECE00'
    myButtons.children[3].style.backgroundColor = '#F8EEE4' 
    myButtons.children[4].style.backgroundColor = '#F8EEE4' 
  } else if (myIndex == 4) {
    myButtons.children[0].style.backgroundColor = '#F8EEE4'
    myButtons.children[1].style.backgroundColor = '#F8EEE4'
    myButtons.children[2].style.backgroundColor = '#F8EEE4'
    myButtons.children[3].style.backgroundColor = '#FECE00' 
    myButtons.children[4].style.backgroundColor = '#F8EEE4' 
  } else if (myIndex == 5) {
    myButtons.children[0].style.backgroundColor = '#F8EEE4'
    myButtons.children[1].style.backgroundColor = '#F8EEE4'
    myButtons.children[2].style.backgroundColor = '#F8EEE4'
    myButtons.children[3].style.backgroundColor = '#F8EEE4' 
    myButtons.children[4].style.backgroundColor = '#FECE00' 
  }


  

  setTimeout(carousel, 2500); 
    
}

