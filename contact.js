document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent page reload

        emailjs.sendForm('service_haj5tlz', 'template_71wc9y1', this)
            .then(() => {
                alert('Message sent successfully!');
                form.reset();
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to send message. Please try again.');
            });
    });
});