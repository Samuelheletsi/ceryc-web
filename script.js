// Optional: Add JavaScript for interactive elements or animations
// Example: Smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        var formData = new FormData(contactForm);

        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(function(data) {
            alert('Message sent successfully!');
            contactForm.reset(); // Reset form after successful submission
        })
        .catch(function(error) {
            console.error('Error:', error);
            alert('Error sending message.');
        });
    });
});
