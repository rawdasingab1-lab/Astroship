const nav = document.getElementById("nav");
const toggleBtn = document.getElementById("toggleBtn");
const bars = document.getElementById("bars");
toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.toggle("active");
    bars.classList.toggle("fa-xmark");
});