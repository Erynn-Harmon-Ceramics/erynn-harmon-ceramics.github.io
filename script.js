fetch("images.json")
  .then(res => res.json())
  .then(images => {
    const swiperWrapper = document.getElementById("swiper-wrapper");
    const portfolioGrid = document.getElementById("portfolio-grid");

    images.forEach(image => {
      const slide = document.createElement("figure");
      slide.className = "swiper-slide";
      slide.innerHTML = `
        <img src="images/${image.file}" alt="${image.alt}">
        <figcaption>${image.caption}</figcaption>
      `;
      swiperWrapper.appendChild(slide);

      const gridItem = document.createElement("figure");
      gridItem.innerHTML = `
        <img src="images/${image.file}" alt="${image.alt}">
        <figcaption>${image.caption}</figcaption>
      `;
      portfolioGrid.appendChild(gridItem);
    });

    new Swiper(".mySwiper", {
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
  })
  .catch(err => console.error("Failed to load images:", err));
