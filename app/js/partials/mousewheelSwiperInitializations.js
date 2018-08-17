var swiper = new Swiper('.swiper-container-mousewheel', {
	speed: 900,
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});