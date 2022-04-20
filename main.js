const hamburguer = document.querySelector('.hamburguer')
const navUl = document.querySelector('.nav-ul')

hamburguer.addEventListener('click', () =>{
    hamburguer.classList.toggle('active')
    navUl.classList.toggle('show')
} )

// Criando menu hamburguer//