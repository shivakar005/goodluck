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


// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Scroll to the top of the document when the button is clicked
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});