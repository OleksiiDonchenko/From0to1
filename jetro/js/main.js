$(function () {

  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    useTransform: true,
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
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 5.25,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 4.67,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3.9,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 711,
        settings: {
          slidesToShow: 3.64,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 634,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 537,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 474,
        settings: {
          slidesToShow: 1.98,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 437,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 373,
        settings: {
          slidesToShow: 1.01,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 0.99,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        }
      },
    ]

  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });

});