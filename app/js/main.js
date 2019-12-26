$(function () {

  var wow = new WOW({
    offset: 150, // distance to the element when triggering the animation
    mobile: false,
  });
  wow.init();

  var wow = new WOW({
    boxClass: 'footer__box',
    offset: 50,
    mobile: false,
  });
  wow.init();

  var wow = new WOW({
    boxClass: 'footer__box li',
    offset: 20,
    mobile: false,
  });
  wow.init();

  $('.header__burger').click(function () {
    $('.header__burger, .header__menu').toggleClass('active');
    $('html, body').toggleClass('lock');
  });

  var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
  });
});