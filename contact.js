// Make sure this file is linked AFTER emailjs.init() in your HTML

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');

    if (!form) return; // safety check

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent default form submission

        // Send the form using EmailJS
        emailjs.sendForm('service_haj5tlz', 'template_71wc9y1', this)
        .then(function() {
            alert('Message sent successfully!');
            form.reset(); // clear form
        }, function(error) {
            alert('Failed to send message. Please try again.\n' + JSON.stringify(error));
        });
    });
});