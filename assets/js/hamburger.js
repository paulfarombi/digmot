const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
}))