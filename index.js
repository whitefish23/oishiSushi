const swiperPopu = new Swiper(".popular", {
  slidesPerView: 4,
  spaceBetween: 15,

  scrollbar: {
    el: ".scrollbar-popular",
    draggable: true,
    dragSize: 143,
  },
});