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
  const closebutton = modal.querySelector(".modal-button");
  
  const modalOpen = () => {
    modal.classList.add("modal-is-open");
    modal.style.animation = "modalIn 500ms forwards";
    document.body.style.overflowY = "hidden";
  };
  
  const modalClose = () => {
    modal.classList.remove("modal-is-open");
    modal.removeEventListener("animationend", modalClose);
  };
  
  //Close modal when close button is pressed
  closebutton.addEventListener("click", () => {
    modal.style.animation = "modalOut 500ms forwards";
    modal.addEventListener("animationend", modalClose);
    document.body.style.overflowY = "scroll";
  });
  
  //Close modal when esc key is pressed
  document.addEventListener("keydown", (e) => {
    if(e.keyCode === 27) {
      modal.style.animation = "modalOut 500ms forwards";
      modal.addEventListener("animationend", modalClose);
      document.body.style.overflowY = "scroll";
    }
  });
  
  modalOpen();
});