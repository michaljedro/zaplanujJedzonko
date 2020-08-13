console.log("Load script.js");
// Instantiating the global app object
var app = {};

var btnPrev = document.querySelector('#prevPicture');
console.log(btnPrev);
var btnNext = document.querySelector('#nextPicture');
console.log(btnNext);

var itemDiv = document.querySelectorAll('.slider div');
console.log(itemDiv);
var item = Array.from(itemDiv);
console.log(item);

var imagesCounter = 0;

console.log(item.length);

item[0].classList.add('visible');

function nextSlide() {
    item[imagesCounter].classList.toggle('visible');
    if (imagesCounter === item.length - 1) {
        imagesCounter = 0;
    } else {
        imagesCounter++;
    }
    item[imagesCounter].classList.toggle('visible');
}

btnNext.addEventListener('click', nextSlide);

function prevSlide() {
    item[imagesCounter].classList.toggle('visible');
    if (imagesCounter === 0) {
        imagesCounter = item.length - 1;
    } else {
        imagesCounter--;
    }
    item[imagesCounter].classList.toggle('visible');
}

btnPrev.addEventListener('click', prevSlide);

