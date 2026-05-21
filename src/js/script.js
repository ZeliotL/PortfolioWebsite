// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


function cardOverlayShow(projectPage){
  document.documentElement.style.overflow = "hidden";
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("overlay-embed").src = projectPage;
}

function cardOverlayHide(){
  document.documentElement.style.overflow = "scroll";
  document.getElementById("overlay").style.display = "none";
}
