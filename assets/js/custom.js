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

const video = document.getElementById('backgroundVideo');
const playButtonIcon = document.getElementById('playIcon');

function togglePlay() {
  if (video.paused) {
    video.play();
    playButtonIcon.src = '/assets/images/play.svg'; // Change to pause icon
  } else {
    video.pause();
    playButtonIcon.src = '/assets/images/play.svg'; // Change back to play icon
  }
}

// banner video end