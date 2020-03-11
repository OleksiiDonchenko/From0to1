$(function () {
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider__nav',
    appendArrows: $('.arrows'),
    prevArrow: '<button id="prev" type="button" class="slick-arrow slick-prev"></button>',
    nextArrow: '<button id="next" type="button" class="slick-arrow slick-next"></button>'
  });

  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

});