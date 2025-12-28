fetch("images/images.json")
  .then(res => res.json())
  .then(images => {
    const swiperWrapper = document.getElementById("swiper-wrapper");
    const portfolioGrid = document.getElementById("portfolio-grid");

    images.forEach(image => {
      /* ---------- SWIPER SLIDE ---------- */
      const slide = document.createElement("figure");
      slide.className = "swiper-slide";
      slide.innerHTML = `
        <img src="images/${image.file}" alt="${image.alt}">
        <figcaption>${image.caption}</figcaption>
      `;
      swiperWrapper.appendChild(slide);

      /* ---------- PORTFOLIO GRID ---------- */
      const gridItem = document.createElement("figure");
      gridItem.innerHTML = `
        <img src="images/${image.file}" alt="${image.alt}">
        <figcaption>${image.caption}</figcaption>
      `;
      portfolioGrid.appendChild(gridItem);
    });

    /* ---------- INIT SWIPER AFTER LOAD ---------- */
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
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
  })
  .catch(err => console.error("Failed to load images:", err));
