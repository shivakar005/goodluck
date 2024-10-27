const toggleMenu = document.querySelector('.togglemenu');
const closeMenu = document.querySelector('.closemenu');
const closemenumobile = document.querySelector('.closemenumobile');
const navMenu = document.querySelector('.main--menu');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.add('show');
    
    AOS.refresh();
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

closemenumobile.addEventListener('click', () => {
    navMenu.classList.remove('show');
});


// menu toggle end

