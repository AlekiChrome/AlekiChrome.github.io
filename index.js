const splash = document.querySelector('.splash');
const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hamburger = document.querySelector('#hamburger');

document.addEventListener('DOMContentLoaded', () => {

    // splash screen
setTimeout(() => {
    splash.classList.add('disappear')
}, 3500);

    // hamburger
navToggle.addEventListener("click", () => {
    nav.classList.toggle('open');
    navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    });
});

window.addEventListener('resize', () => {
    if (document.body.clientWidth > 720)
        nav.classList.remove('open');
        navIcon.forEach(icon => {
            icon.classList.add('hidden');
        });
    hamburger.classList.remove('hidden');
});

    // Tilt and glare on cards
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
})

$('nav a[href*="#"]').on('click', function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
 });


 $('#up').on('click', function () {
     $('html, body').animate({
         scrollTop: 0
     }, 2000);
 });


 AOS.init({
     easing: 'ease',
     duration: 1800,
     // once: true
 });

})
