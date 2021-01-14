
var app = {};

var btnPrev = document.querySelector('#prev-picture');

var btnNext = document.querySelector('#next-picture');

var sliderDivs = document.querySelectorAll('.slider div');

var items = Array.from(sliderDivs);

var currentImageIndex = 0;

items[0].classList.add('visible');

function nextSlide() {
    items[currentImageIndex].classList.remove('visible');
    if (currentImageIndex === items.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    items[currentImageIndex].classList.add('visible');
}

btnNext.addEventListener('click', nextSlide);

function prevSlide() {
    items[currentImageIndex].classList.remove('visible');
    if (currentImageIndex === 0) {
        currentImageIndex = items.length - 1;
    } else {
        currentImageIndex--;
    }
    items[currentImageIndex].classList.add('visible');
}

btnPrev.addEventListener('click', prevSlide);

var btnVisible = document.querySelector('.list__items--modify');

console.log(btnVisible);

btnVisible.addEventListener('click', function(e) {
e.preventDefault();
var dashView = document.querySelector('.dashbord_view');
var show = document.querySelector('.show');
dashView.style.display = 'block';
show.style.display = 'none';
});

var noneVisible = document.querySelector('.dashbordview__header--head');

noneVisible.addEventListener('click', function(e) {
var dashView = document.querySelector('.dashbord_view');
var show = document.querySelector('.show');
dashView.style.display = 'none';
show.style.display = 'block';
})
// btnVisible.addEventListener('click', function(e) {
//     e.preventDefault();
//     var dashView = document.querySelector('.dashbord_view');
//     var show = document.querySelector('.show');
//     dashView.style.display = 'none';
//     show.style.display = 'block';
//     });

