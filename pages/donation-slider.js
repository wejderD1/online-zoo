
let prev = document.getElementById("back")
let next = document.getElementById("next")
let completeBtn = document.getElementById("complete")
let donationForm = document.querySelector(".donation__form")
let amount = document.querySelectorAll(".amount")


let complete = document.querySelector(".complete")
let nextCont = document.querySelector(".next")


/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("slider__item");
    // let arrow = document.createElement(<i class='arrow fas fa-arrow-right'></i>)
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";   
    
    if(n == 1){
        prev.style.opacity = 0
    }else if(n == 3){
        complete.removeAttribute("hidden")  
        nextCont.setAttribute("hidden", true)  
    }else{
        prev.style.opacity = 1
        complete.setAttribute("hidden", true)
        nextCont.removeAttribute("hidden")
    }
    
}

prev.addEventListener("click", ()=>{
    previousSlide()    
})

next.addEventListener("click", ()=> {
    nextSlide()
})

completeBtn.addEventListener("click", () => {
    donationForm.style.display = "none"
})

for(let i = 0; i< amount.length; i++){
    amount[i].addEventListener("click", () => {
        donationForm.style.display = "block"
        currentSlide(1)
    })
}




