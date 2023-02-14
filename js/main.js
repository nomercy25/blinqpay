const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  clickable: true,
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide:false,
    disableOnInteraction:false
  },
  speed: 800,

 
});