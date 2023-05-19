var slideIndex = 0;

showSlide();

var timer = setInterval(showSlide, 3000);

var slideContainer = document.getElementById('slideshow-container');
var slideControl = document.getElementById('slide-control');

slideContainer.onmouseover = function() {
	clearInterval(timer);
}

slideContainer.onmouseleave = function() {
	timer = setInterval(showSlide, 3000);
}


function showSlide() {
	var i;
	var slides = document.getElementsByClassName('slide-item');
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	
	slideIndex++;
	if (slideIndex > slides.length) slideIndex = 1;
	slides[slideIndex-1].style.display = "block";
}

function chooseSlide(n) {
	slideIndex = n;
	showSlide();
	clearInterval(timer);
}

function showMenu() {
	var topNav = document.getElementById('topnav');
	if (topNav.className === "navbar") {
		topNav.className += " show";
	} else {
		topNav.className = "navbar";
	}
}
// open dropdown our product
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }