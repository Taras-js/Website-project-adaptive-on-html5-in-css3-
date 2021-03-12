/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// const heading = document.getElementById('gad')
// console.dir(heading.textContent)



// setTimeout(() => {
//     addStyleAll(heading)
// }, 4500);

// function addStyleAll(node) {
//     node.textContent = 'red'
//     node.style.color = 'red'
//     node.style.textAlign = 'center'
// }
// const heading2 = document.getElementById('god')
// console.dir(heading2.textContent)



// setTimeout(() => {
//     addStyleAll2(heading2)
// }, 4500);

// function addStyleAll2(node) {
//     node.style.color = 'red'
// }
//https://github.com/GeorgeHastings/emblem

// var Emblem = {
//   init: function(el, str) {
//     var element = document.querySelector(el);
//     var text = str ? str : element.innerHTML;
//     element.innerHTML = '';
//     for (var i = 0; i < text.length; i++) {
//       var letter = text[i];
//       var span = document.createElement('span');
//       var node = document.createTextNode(letter);
//       var r = (360/text.length)*(i);
//       var x = (Math.PI/text.length).toFixed(0) * (i);
//       var y = (Math.PI/text.length).toFixed(0) * (i);
//       span.appendChild(node);
//       span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
//       span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
//       element.appendChild(span);
//     }
//   }
// };

// Emblem.init('.emblem');