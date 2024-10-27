

    const video = document.getElementById('backgroundVideo');
    const playButtonIcon = document.getElementById('playIcon');

    function togglePlay() {
        if (video.paused) {
            video.play();
            playButtonIcon.src = '/assets/images/play.svg'; // Change to pause icon
            playButtonIcon.style.opacity = 0.2;
        } else {
            video.pause();
            playButtonIcon.src = '/assets/images/play.svg'; 
            playButtonIcon.style.opacity = 1;
            
        }
    }
    // Function to animate the counter
    function animateCounter(element) {
        const target = +element.getAttribute('data-target');
        const speed = 200; // Lower is faster

        const updateCount = () => {
            const currentCount = +element.childNodes[0].nodeValue.replace(/\D/g, ''); // Only numbers
            const increment = target / speed;

            if (currentCount < target) {
                element.childNodes[0].nodeValue = `${Math.ceil(currentCount + increment)} `; // Keep only number part updated
                setTimeout(updateCount, 15);
            } else {
                element.childNodes[0].nodeValue = `${target} `; // Final value
            }
        };

        updateCount();
    }

    // Using Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('h3');
                if (counter) animateCounter(counter); // Check if counter exists
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.1 }); // 10% visibility threshold

    // Observe each item
    document.querySelectorAll('.stratigic--container__item').forEach(item => {
        observer.observe(item);
    });
