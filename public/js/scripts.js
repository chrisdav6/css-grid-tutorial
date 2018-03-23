//Navbar Functionality

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

//Modal Functionality
const portfolioContainer = document.querySelector(".portfolio-items");

portfolioContainer.addEventListener("click", (e) => {
  e.preventDefault();
  
  const modalToggle = e.target.closest(".portfolio-link");
  
  if(! modalToggle) return;
  
  const modal = modalToggle.parentNode.nextElementSibling;
  const closebutton = document.querySelector(".modal-button");
  
  modal.classList.add("modal-is-open");
  
  closebutton.addEventListener("click", () => {
    modal.classList.remove("modal-is-open");
  });
});