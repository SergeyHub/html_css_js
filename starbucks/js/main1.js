
const thumb = document.querySelectorAll('thumb');

function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

for(let i = 0; i < img.length ; i++) {
    img[i].addEventListener('click', imgSlider());
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = color;
}

function  toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}