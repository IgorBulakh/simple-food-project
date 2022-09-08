$(function () {
  $(".tabs-category__link").on("click", function (e) {
    e.preventDefault();
    $(".tabs-category__link").removeClass("tabs-category__link--active");
    $(this).addClass("tabs-category__link--active");

    $(".tabs-content__item").removeClass("tabs-content__item--active");
    $($(this).attr("href")).addClass("tabs-content__item--active");
  });

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

  $(".select-style, .product-form__input").styler();

  $(".stars").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    readOnly: true,
  });

  $(".respond-form__reiting-stars").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
  });
});
