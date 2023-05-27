

function showMenu() {
  var topNav = document.getElementById("topnav");
  if (topNav.className === "navbar") {
    topNav.className += " show";
  } else {
    topNav.className = "navbar";
  }
}
// open dropdown our product
const body = document.body;
function ourProduct() {
  document.getElementById("our-product").style.height = "100%";
  body.style.overflow = 'hidden';
}
function aboutUs() {
  document.getElementById("about-us").style.height = "100%";
  body.style.overflow = 'hidden';
}
function customer() {
  document.getElementById("customer").style.height = "100%";
  body.style.overflow = 'hidden';
}
function support() {
  document.getElementById("support").style.height = "100%";
  body.style.overflow = 'hidden';
}
function changeLanguage() {
  document.getElementById("language").style.height = "100%";
  body.style.overflow = 'hidden';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var close_our_product = document.getElementById("our-product");
  var close_about_us = document.getElementById("about-us");
  var close_customer = document.getElementById("customer");
  var close_support = document.getElementById("support");
  var change_language = document.getElementById("language");
  if (event.target == close_our_product) {
    close_our_product.style.height = "0%";
    body.style.overflow = 'auto';
  } else if (event.target == close_about_us) {
    close_about_us.style.height = "0%";
   body.style.overflow = 'auto';
  } else if (event.target == close_customer) {
    close_customer.style.height = "0%";
    body.style.overflow = 'auto';
  } else if (event.target == close_support) {
    close_support.style.height = "0%";
    body.style.overflow = 'auto';
  } else if (event.target == change_language) {
    change_language.style.height = "0%";
    body.style.overflow = 'auto';
  }
};
