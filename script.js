const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if (slides.length > 0) {

  function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");

  }

  setInterval(changeSlide, 4500);

}



const tSlides = document.querySelectorAll(".t-slide");

let tCurrent = 0;

if (tSlides.length > 0) {

  function changeTSlide() {

    tSlides[tCurrent].classList.remove("active");

    tCurrent = (tCurrent + 1) % tSlides.length;

    tSlides[tCurrent].classList.add("active");

  }

  setInterval(changeTSlide, 4200);

}

const wSlides = document.querySelectorAll(".w-slide");

let wCurrent = 0;

if (wSlides.length > 0) {

  function changeWSlide() {

    wSlides[wCurrent].classList.remove("active");

    wCurrent = (wCurrent + 1) % wSlides.length;

    wSlides[wCurrent].classList.add("active");

  }

  setInterval(changeWSlide, 4300);

}

