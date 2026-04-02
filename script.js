let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

function toggleEducation() {
    const moreEdu = document.getElementById("more-education");
    const btn = document.querySelector(".read-more-btn");
    if (moreEdu.style.display === "block") {
        moreEdu.style.display = "none";
        btn.textContent = "Read More";
    } else {
        moreEdu.style.display = "block";
        btn.textContent = "Read Less";
    }
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

  // Initialize EmailJS with your Public Key
  emailjs.init("uGOt9KWavCL3OOcGh");

  // Listen to form submission
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    emailjs.sendForm("service_haj5tlz", "template_71wc9y1", this)
      .then(function() {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Clear form
      }, function(error) {
        alert("Failed to send message. Please try again.\n" + JSON.stringify(error));
      });
  });

window.onload = function() {
    const countElement = document.getElementById("visitor-count");

    fetch('https://api.countapi.xyz/hit/shreyasmaliDEV.github.io/visitors')
        .then(response => response.json())
        .then(data => {
            countElement.innerText = data.value;
        })
        .catch(err => {
            console.error("Visitor count error:", err);
        });
};