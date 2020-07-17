
let menu = document.querySelector('.menu'),
    toggle = document.querySelector('.toggle');


  $('.feedback-slider').slick({
    dots: true,
    infinite: false,
    speed: 1000,
    arrows: true,
    centerMode: true,
    canterPadding: '110px',
    variableWidth: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dotsClass: 'dots-style',
  });

 toggle.addEventListener('click', function() {
   menu.classList.toggle('menu-active');
 });