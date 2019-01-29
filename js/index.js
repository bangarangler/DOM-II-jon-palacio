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
