document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle Logic
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            // Toggles the class 'nav-active' defined in CSS media queries
            navLinks.classList.toggle('nav-active');
            
            // Optional: Toggle icon between bars and X
            const icon = mobileToggle.querySelector('i');
            if(navLinks.classList.contains('nav-active')){
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it has faded in
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Select all elements with the 'fade-in' class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});