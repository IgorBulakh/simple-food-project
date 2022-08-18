$(function () {
  $(".slider-inner").slick({
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><svg class="prev-rrow" height="34" width="34"><use xlink:href="images/sprite.svg#prevarrow"></use></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg class="next-rrow" height="34" width="34"><use xlink:href="images/sprite.svg#nextarrow"></use></svg></button>',
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $(".filter-price__prev--min").text(data.from);
      $(".filter-price__prev--max").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__prev--min").text(data.from);
      $(".filter-price__prev--max").text(data.to);
    },
  });
});
