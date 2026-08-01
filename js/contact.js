// =====================================
// TravelWorld - contact.js
// =====================================

// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const phone = inputs[2].value.trim();
        const destination = inputs[3].value.trim();
        const message = inputs[4].value.trim();

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone Validation
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Name Validation
        if (name.length < 3) {
            alert("Name must contain at least 3 characters.");
            return;
        }

        // Message Validation
        if (message.length < 10) {
            alert("Please enter a detailed message.");
            return;
        }

        // Success Message
        alert(
            "🎉 Thank You " + name +
            "!\n\nYour travel inquiry has been submitted successfully.\n\nDestination: " +
            (destination || "Not Specified") +
            "\n\nOur Travel Expert will contact you soon."
        );

        contactForm.reset();

    });

}

// ==============================
// FAQ Hover Effect
// ==============================

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "translateY(-10px)";
        box.style.transition = "0.4s";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform = "translateY(0)";

    });

});

// ==============================
// Fade Animation
// ==============================

const elements = document.querySelectorAll(
".contact-form,.contact-info,.faq-box"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

elements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "0.7s";

    observer.observe(element);

});

// ==============================
// Console Message
// ==============================

console.log("TravelWorld Contact Page Loaded Successfully");

