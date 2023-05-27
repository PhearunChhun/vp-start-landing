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
