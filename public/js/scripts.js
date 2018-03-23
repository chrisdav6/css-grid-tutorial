const navToggle = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const containerAll = document.querySelector(".container-all");

navToggle.addEventListener("click", () => {
  containerAll.style.transition = "transform 250ms ease-out";
  document.body.classList.toggle("nav-is-open");
});

nav.addEventListener("click", () => {
  containerAll.style.transition = "0ms";
  document.body.classList.remove("nav-is-open");
});