// Wait for the DOM (HTML) to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default jump behavior
            
            const targetId = link.getAttribute('href'); // Get #about, #skills, etc.
            const targetSection = document.querySelector(targetId);

            // Scroll to the section with a smooth animation
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // --- 2. Contact Form Handling ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the page from refreshing

        // Get the values from the input fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple Validation Check
        if (name && email && message) {
            // In a real scenario, you would send this data to a server here.
            // For now, we will simulate a success message.
            
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            
            // Clear the form fields
            contactForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});