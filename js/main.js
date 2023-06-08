let btnGamer = document.querySelector("#btn-gamer");
let popupGamer = document.querySelector("#popup_gamer");
let btnCloseGamer = document.querySelector("#btn-popup-gamer");

let btnEmpresarial = document.querySelector("#btn-empresarial");
let popupEmpresarial = document.querySelector("#popup_empresarial");
let btnCloseEmpresarial = document.querySelector("#btn-popup-empresarial");

let btnEducativa = document.querySelector("#btn-educativa");
let popupEducativa = document.querySelector("#popup_educativa");
let btnCloseEducativa = document.querySelector("#btn-popup-educativa");

let btnBraille = document.querySelector("#btn-braille");
let popupBraille = document.querySelector("#popup_braille");
let btnCloseBraille = document.querySelector("#btn-popup-braille");

let carouselNews = document.querySelector("#carousel_news");
let slider = document.querySelector("#slider");
let sliderElement = document.querySelectorAll(".slider_element");
let sliderPrev = document.querySelector("#prev");
let sliderNext = document.querySelector("#next");

btnBraille.addEventListener("click", function (e) {
    e.preventDefault();
    popupBraille.classList.add("open-popup");
});

btnCloseBraille.addEventListener("click", function (e) {
    e.preventDefault();
    popupBraille.classList.remove("open-popup");
});

btnEducativa.addEventListener("click", function (e) {
    e.preventDefault();
    popupEducativa.classList.add("open-popup");
});
  
btnCloseEducativa.addEventListener("click", function (e) {
    e.preventDefault();
    popupEducativa.classList.remove("open-popup");
});

btnEmpresarial.addEventListener("click", function (e) {
    e.preventDefault();
    popupEmpresarial.classList.add("open-popup");
});

btnCloseEmpresarial.addEventListener("click", function (e) {
    e.preventDefault();
    popupEmpresarial.classList.remove("open-popup");
});

btnGamer.addEventListener("click", function (e) {
    e.preventDefault();
    popupGamer.classList.add("open-popup");
});

btnCloseGamer.addEventListener("click", function (e) {
    e.preventDefault();
    popupGamer.classList.remove("open-popup");
});

let imageIndex = 1;
let intervalId;

const autoSlide = () => {
    intervalId = setInterval(()=> slideImage(++imageIndex), 5000);
};

autoSlide();

const slideImage = () => {
    imageIndex = imageIndex === sliderElement.length ? 0 : imageIndex < 0 ? sliderElement.length - 1 : imageIndex;
    slider.style.transform = `translate(-${imageIndex*100}%)`;
}

const updateClick = (e) => {
    console.log(e);
    e.preventDefault();
    clearInterval(intervalId);
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();
}

carouselNews.addEventListener("mouseover", ()=> clearInterval(intervalId));

carouselNews.addEventListener("mouseleave", autoSlide);


sliderPrev.addEventListener("click", updateClick);

sliderNext.addEventListener("click", updateClick);