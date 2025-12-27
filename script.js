const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");

let index = 0;
let intervalId;

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
}

function startCarousel() {
  intervalId = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 4000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

carousel.addEventListener("mouseenter", stopCarousel);
carousel.addEventListener("mouseleave", startCarousel);

startCarousel();
