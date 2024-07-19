document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const name = document.getElementById('name').value.trim();

        emailjs.send("service_1m5dot9", "template_lks6pak", {
            from_name: name,
            from_email: email,
            message: message,
            to_name: "CE-RYC" // Replace with the actual recipient name if needed
        })
        .then((response) => {
            alert("Email sent successfully.");
            console.log("SUCCESS!", response.status, response.text);
        }, (error) => {
            alert("Failed to send email.");
            console.log("FAILED...", error);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
