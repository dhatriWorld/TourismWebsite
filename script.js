

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.style.display =
        navMenu.style.display === "flex" ? "none" : "flex";
});

// Dark mode toggle
document.getElementById("darkToggle").onclick = () =>
    document.body.classList.toggle("dark");



// Contact Form
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", e => {
    e.preventDefault();
    msg.style.color = "green";
    msg.textContent = "Thank you for reaching out!";
    form.reset();
});
