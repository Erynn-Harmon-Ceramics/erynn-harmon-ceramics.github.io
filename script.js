fetch("images.json")
  .then(res => res.json())
  .then(images => {
    const swiperWrapper = document.getElementById("swiper-wrapper");
    const portfolioGrid = document.getElementById("portfolio-grid");

    images.forEach(image => {
      // Swiper slide
      const slide = document.createElement("figure");
      slide.className = "swiper-slide";
      slide.innerHTML = `
        <img src="images/${image.file}" alt="${image.alt}">
        <figcaption>${image.caption}</figcaption>
      `;
      swiperWrapper.appendChild(slide);

      // Portfolio grid
      const gridItem = document.createElement("figure");
      gridItem.innerHTML = `
        <img src="images/${image.file}" alt="${image.alt}">
        <figcaption>${image.caption}</figcaption>
      `;

      // Click to expand (disabled on mobile)
      gridItem.addEventListener("click", () => {
        if (window.innerWidth < 600) return; // disable on mobile

        const currentlyExpanded = portfolioGrid.querySelector(".expanded");
        if (currentlyExpanded && currentlyExpanded !== gridItem) {
          currentlyExpanded.classList.remove("expanded");
        }
        gridItem.classList.toggle("expanded");
      });

      portfolioGrid.appendChild(gridItem);
    });

    const swiper = new Swiper(".mySwiper", {
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      speed: 1000,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    const swiperEl = document.querySelector(".mySwiper");
    swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start());
  })
  .catch(err => console.error("Failed to load images:", err));
