const carousel = document.querySelector(" .carousel"),
carousel_1 = document.querySelector(" .carousel-1"),
firstImgOfContentThree = carousel.querySelectorAll(".track-1 div")[0],
firstImgOfContentFour = carousel_1.querySelectorAll(".track-2 div")[0],
arrowIconsHardware = document.querySelectorAll(".main-content-3 .wrapper .btn-prev-next i"),
arrowIconsSoftware = document.querySelectorAll(".main-content-4 .wrapper .btn-prev-next i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

arrowIconsHardware.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImgOfContentThree.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        console.log(carousel.scrollLeft);

    });
});
arrowIconsSoftware.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidths = firstImgOfContentFour.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel_1.scrollLeft += icon.id == "left" ?  -firstImgWidths : firstImgWidths;
    });
});

let initialPosition = null;
let moving = false;
let transform = 0;
const carouselimg = document.querySelector(".track-1"),
carouselimg2 = document.querySelector(".track-2");
carouselimg.addEventListener("mousedown", (e) => {
   initialPosition = e.pageX;
   moving = true;
  const transformMatrix = window.getComputedStyle(carouselimg).getPropertyValue('transform');
  if(transformMatrix !== 'none') {
    transform = parseInt(transformMatrix.split(',')[4].trim());
  }
});
carouselimg2.addEventListener("mousedown", (e) => {
   initialPosition = e.pageX;
   moving = true;
  const transformMatrix = window.getComputedStyle(carouselimg2).getPropertyValue('transform');
  if(transformMatrix !== 'none') {
    transform = parseInt(transformMatrix.split(',')[4].trim());
  }
});

carouselimg.addEventListener("mousemove", (e) => {
  if (moving) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    carouselimg.style.transform = `translateX(${transform + diff}px)`;
  }
});

carouselimg.addEventListener("mouseup", (e) => {
  moving = false;
});
carouselimg2.addEventListener("mousemove", (e) => {
  if (moving) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    carouselimg.style.transform = `translateX(${transform + diff}px)`;
  }
});

carouselimg2.addEventListener("mouseup", (e) => {
  console.log("Hello");
  moving = false;
});