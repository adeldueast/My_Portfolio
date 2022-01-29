const nav = document.querySelector(".navbar-ul");
const hamburger = document.querySelector(".hamburger");
const body = document.body;

hamburger.addEventListener("click", () => {
  //console.log('clicked')
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("active");
});
