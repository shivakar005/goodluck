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

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents event from bubbling up
        
        // Close other open dropdowns
        document.querySelectorAll('.dropdown').forEach(item => {
            if (item !== dropdown) {
                item.classList.remove('active');
            }
        });
        
        // Toggle the clicked dropdown
        dropdown.classList.toggle('active');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});


