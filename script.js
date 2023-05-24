// image slide show
var slideIndex = 0;

showSlide();

var timer = setInterval(showSlide, 3500);

var slideContainer = document.getElementById("slideshow-container");
var slideControl = document.getElementById("slide-control");
slideContainer.onmouseover = function () {
  clearInterval(timer);
};

slideContainer.onmouseleave = function () {
  timer = setInterval(showSlide, 3500);
};

function showSlide() {
  var i;
  var slides = document.getElementsByClassName("slide-item");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
}

function showMenu() {
  var topNav = document.getElementById("topnav");
  if (topNav.className === "navbar") {
    topNav.className += " show";
  } else {
    topNav.className = "navbar";
  }
}
// open dropdown our product
function ourProduct() {
  document.getElementById("our-product").style.height = "100%";
}
function aboutUs() {
  document.getElementById("about-us").style.height = "100%";
}
function customer() {
  document.getElementById("customer").style.height = "100%";
}
function support() {
  document.getElementById("support").style.height = "100%";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var close_our_product = document.getElementById("our-product");
  var close_about_us = document.getElementById("about-us");
  var close_customer = document.getElementById("customer");
  var close_support = document.getElementById("support");
  if (event.target == close_our_product) {
    close_our_product.style.height = "0%";
  } else if (event.target == close_about_us) {
    close_about_us.style.height = "0%";
  } else if (event.target == close_customer) {
    close_customer.style.height = "0%";
  } else if (event.target == close_support) {
    close_support.style.height = "0%";
  }
};
