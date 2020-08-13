const btnPrev = document.querySelector('#prevPicture');
console.log(btnPrev);
const btnNext = document.querySelector('#nextPicture');
console.log(btnNext);

let itemDiv = document.querySelectorAll('.slider div');
console.log(itemDiv);
let item = [...itemDiv];
console.log(item);

let imagesCounter = 0;

console.log(item.length);

item[0].classList.add('visible');

nextSlide = () => {
    item[imagesCounter].classList.toggle('visible');
    if (imagesCounter === item.length - 1) {
        imagesCounter = 0;
    } else {
        imagesCounter++;
    }
    item[imagesCounter].classList.toggle('visible');
}

btnNext.addEventListener('click', nextSlide);

prevSlide = () => {
    item[imagesCounter].classList.toggle('visible');
    if (imagesCounter === 0) {
        imagesCounter = item.length - 1;
    } else {
        imagesCounter--;
    }
    item[imagesCounter].classList.toggle('visible');
}

btnPrev.addEventListener('click', prevSlide);

