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
