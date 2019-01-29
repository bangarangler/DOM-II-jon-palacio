// Your code goes here
const coolBtn = document.querySelectorAll(".btn");

// MOUSEOVER BTN SCALSES THE BUTTON
coolBtn[0].addEventListener("mouseover", e => {
  coolBtn[0].style.transform = "scale(1.1)";
});

//MOUSEOUT BTN RETURNS TO NORMAL
coolBtn[0].addEventListener("mouseout", e => {
  coolBtn[0].style.transform = "scale(1.0)";
});

//BTN SCALE FOR BUTTON IN MIDDLE
coolBtn[1].addEventListener("mouseover", e => {
  coolBtn[1].style.transform = "scale(1.1)";
});

coolBtn[1].addEventListener("mouseout", e => {
  coolBtn[1].style.transform = "scale(1.0)";
});

//BTN SCALE FOR BUTTON ON RIGHT
coolBtn[2].addEventListener("mouseover", e => {
  coolBtn[2].style.transform = "scale(1.1)";
});

coolBtn[2].addEventListener("mouseout", e => {
  coolBtn[2].style.transform = "scale(1.0)";
});

//KEYDOWN EVENT POPUP ALERT
const alertPopup = document.querySelector("body");

alertPopup.addEventListener("keydown", e => {
  alert(`You pressed ${e.code}`);
});

//FUNBUS HEADING UNDERLINE ON CLICK
const funBusHeading = document.querySelector(".logo-heading");

funBusHeading.addEventListener("click", e => {
  funBusHeading.style.borderBottom = "1px solid aqua";
});

//REMOVE UNDERLINE ON DOUBLE CLICK
funBusHeading.addEventListener("dblclick", e => {
  funBusHeading.style.borderBottom = "hidden";
});

////NAVIGATION CLICK EVENT
//const allNav = document.querySelectorAll("nav a");

//allNav[0].addEventListener("keyup", e => {
//allNav.style.border = "1px solid blue";
//});

//ONLOAD LOG
window.addEventListener("load", e => {
  console.log("Page finished Loading!");
});

//KEYUP APPLY STYLE TO H2 IN HEADER
const kUpH2 = document.querySelector(".intro h2");

kUpH2.addEventListener("click", e => {
  alert("Welcome To Fun Bus!");
});

//PREVENT DEFAULT OF ABOUT US LINK GOING TO GOOGLE
const stopIt = document.querySelectorAll(".nav-link");
console.log(stopIt);
stopIt[1].addEventListener("click", e => {
  e.preventDefault();
});

// STOP PROPIGATION
const noBubble = document.querySelectorAll("footer p");

noBubble[0].addEventListener("click", e => {
  noBubble[0].style.color = "darkorchid";
  e.stopPropagation();
});

TweenMax.to(".circleMoveRight", 1, { x: 0, rotation: 360, scale: 1.0 });
TweenMax.staggerFrom(
  ".superBounce",
  0.8,
  {
    opacity: 0,
    scale: 0,
    ease: Bounce.easeOut,
    //rotation: 360,
    delay: 2.5
  },
  0.2
);
