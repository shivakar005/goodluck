
const backgroundVideo = document.getElementById("backgroundVideo");
const muteToggleButton = document.getElementById("muteToggleButton");
const muteIcon = document.getElementById("muteIcon");

muteToggleButton.addEventListener("click", () => {
    // Toggle mute property
    backgroundVideo.muted = !backgroundVideo.muted;
    
    // Change icon based on mute state
    muteIcon.src = backgroundVideo.muted ? "/assets/images/mute.png" : "/assets/images/volume.png";
});

document.querySelector('.down-arrow').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const target = document.querySelector('#about'); // Select the target element
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

function openCity(evt, cityName) {
    // Only run the function if the screen width is 767px or less
    if (window.innerWidth <= 767) {
        var i, tabcontent, tablinks;
        
        // Get all tab content and tab links
        tabcontent = document.getElementsByClassName("tabcontent");
        tablinks = document.getElementsByClassName("tablinks");
      
        // Check if the clicked tab is already active
        const activeTabContent = document.getElementById(cityName);
        const isActive = activeTabContent.style.display === "block";
        
        // Hide all tab content and remove active class from all tabs
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
        // If the clicked tab was not active, activate it; otherwise, leave it deactivated
        if (!isActive) {
            activeTabContent.style.display = "block";
            evt.currentTarget.className += " active";
        }
    }
}

    // // Function to animate the counter
    // function animateCounter(element) {
    //     const target = +element.getAttribute('data-target');
    //     const speed = 200; // Lower is faster

    //     const updateCount = () => {
    //         const currentCount = +element.childNodes[0].nodeValue.replace(/\D/g, ''); // Only numbers
    //         const increment = target / speed;

    //         if (currentCount < target) {
    //             element.childNodes[0].nodeValue = `${Math.ceil(currentCount + increment)} `; // Keep only number part updated
    //             setTimeout(updateCount, 15);
    //         } else {
    //             element.childNodes[0].nodeValue = `${target} `; // Final value
    //         }
    //     };

    //     updateCount();
    // }

    // // Using Intersection Observer to trigger animation on scroll
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             const counter = entry.target.querySelector('h3');
    //             if (counter) animateCounter(counter); // Check if counter exists
    //             observer.unobserve(entry.target); // Stop observing after animation
    //         }
    //     });
    // }, { threshold: 0.1 }); // 10% visibility threshold

    // // Observe each item
    // document.querySelectorAll('.stratigic--container__item').forEach(item => {
    //     observer.observe(item);
    // });
