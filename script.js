const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  speed: 1000,
  roundLengths: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  simulateTouch: true,
});

/* Pause on hover */
const swiperEl = document.querySelector(".mySwiper");

swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start());
