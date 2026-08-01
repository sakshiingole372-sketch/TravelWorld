// TravelWorld Packages Page

document.querySelectorAll(".package-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

document.querySelectorAll(".package-info .btn").forEach(btn => {

    btn.addEventListener("click", function(e){

        e.preventDefault();

        alert("Thank you for choosing TravelWorld! Our team will contact you soon.");

    });

});

console.log("Packages Page Loaded Successfully");
