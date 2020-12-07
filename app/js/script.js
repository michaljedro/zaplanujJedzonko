var app = {};

var btnPrev = document.querySelector("#prev-picture");

var btnNext = document.querySelector("#next-picture");

var sliderDivs = document.querySelectorAll(".slider div");

var items = Array.from(sliderDivs);

var currentImageIndex = 0;

items[0].classList.add("visible");

function nextSlide() {
  items[currentImageIndex].classList.remove("visible");
  if (currentImageIndex === items.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  items[currentImageIndex].classList.add("visible");
}

btnNext.addEventListener("click", nextSlide);

function prevSlide() {
  items[currentImageIndex].classList.remove("visible");
  if (currentImageIndex === 0) {
    currentImageIndex = items.length - 1;
  } else {
    currentImageIndex--;
  }
  items[currentImageIndex].classList.add("visible");
}

btnPrev.addEventListener("click", prevSlide);
