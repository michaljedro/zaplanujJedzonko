
var app = {};

var btnPrev = document.querySelector('#prevPicture');

var btnNext = document.querySelector('#nextPicture');

var sliderDivs = document.querySelectorAll('.slider div');

var item = Array.from(sliderDivs);

var currentImageIndex = 0;

item[0].classList.add('visible');

function nextSlide() {
    item[currentImageIndex].classList.remove('visible');
    if (currentImageIndex === item.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    item[currentImageIndex].classList.add('visible');
}

btnNext.addEventListener('click', nextSlide);

function prevSlide() {
    item[currentImageIndex].classList.remove('visible');
    if (currentImageIndex === 0) {
        currentImageIndex = item.length - 1;
    } else {
        currentImageIndex--;
    }
    item[currentImageIndex].classList.add('visible');
}

btnPrev.addEventListener('click', prevSlide);

