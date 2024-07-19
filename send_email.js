
    
        
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const name = document.getElementById('name').value;

            emailjs.send("service_1m5dot9", "template_lks6pak", {
                from_email: email,
                message: message,
                to_name:name,
                from_email: name
            })
            .then((response) => {
                alert("Email sent successfully.");
                console.log("SUCCESS!", response.status, response.text);
            }, (error) => {
                alert("Failed to send email.");
                console.log("FAILED...", error);
            });
        });
    

























// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $to_email = "samuelheletsi@gmail.com"; // Your Gmail address
//     $subject = "Message from Royalties Youth Church Website";
//     $message = $_POST['message'];
//     $headers = "From: " . $_POST['email'];

//     // Send email
//     if (mail($to_email, $subject, $message, $headers)) {
//         echo "Email sent successfully.";
//     } else {
//         echo "Failed to send email.";
//     }
// } else {
//     echo "Invalid request.";
// } -->

