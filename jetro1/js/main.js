$(function () {


  $('.slider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__nav'
  });
  $('.slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider__for',
    dots: false,
    focusOnSelect: true
  });

  
});