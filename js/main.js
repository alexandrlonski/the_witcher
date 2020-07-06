var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.arrow',

  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});
var lineCenter = document.querySelector('.line-center');
var menu = document.querySelector('.header')
lineCenter.addEventListener('click', function () {
  lineCenter.classList.toggle('line-center-active');
  menu.classList.toggle('header-active');
});