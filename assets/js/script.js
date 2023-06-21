const preloader =document.querySelector('[data-preloader]');

window.addEventListener('load', ()=>{
    preloader.classList.add('remove');
})

// multiple events for elements

const addEvents = function (elements, eventType, callback){
    for (let i =0, len = elements.length; i < len; i++ ){
        elements[i].addEventListener(eventType, callback)
    }
}

// NAVBAR TOGGLE

const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overLay = document.querySelector("[data-overlay]")

const toggleNav  = function (){
    navbar.classList.toggle('active')
    overLay.classList.toggle('active')
    document.body.classList.toggle('nav-active')
}

addEvents(navTogglers, 'click', toggleNav)

// HEADER

window.addEventListener('scroll', () => {
    const header = document.querySelector("[data-header]")
    header.classList[window.scrollY > 100? "add" : "remove"]("active")
})