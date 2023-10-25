let burger = document.querySelector("#icons");
let navbar = document.querySelector(".navbar-bar");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    navbar.classList.remove("active");
}))