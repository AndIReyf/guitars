$(function () {

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
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

});