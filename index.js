const swiperPopu = new Swiper(".popular", {
  slidesPerView: 4,
  spaceBetween: 18,
  

  scrollbar: {
    el: ".scrollbar-popular",
    draggable: true,
    dragSize: 142,
  },
});

const swiperBaner = new Swiper(".banner-slider", {
  slidesPerView: 1,
  spaceBetween: 200,
  pagination: {
    el: ".pagination-baner",
  },
});