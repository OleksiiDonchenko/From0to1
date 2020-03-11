  $(function(){
    $('.your-class').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          appendArrows: $('.your-class-arrow'),
          prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> Туда</button>',
          nextArrow: '<button id="next" type="button" class="btn btn-juliet">Сюда <i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });
  });