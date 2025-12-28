const swiper = new Swiper(".mySwiper", {
  loop: true,                // Infinite loop
  centeredSlides: true,      // Center the main slide
  slidesPerView: 'auto',     // Let slides define their own width
  spaceBetween: 20,          // Gap between slides
  speed: 1000,
  roundLengths: true,        // Fixes sub-pixel jumps

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

swiperEl.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

swiperEl.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});
