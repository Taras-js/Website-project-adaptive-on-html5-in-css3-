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
