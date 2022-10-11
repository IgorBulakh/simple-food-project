$(function () {
  $(".tabs-category__link").on("click", function (e) {
    e.preventDefault();
    $(".tabs-category__link").removeClass("tabs-category__link--active");
    $(this).addClass("tabs-category__link--active");

    $(".tabs-content__item").removeClass("tabs-content__item--active");
    $($(this).attr("href")).addClass("tabs-content__item--active");
  });

  $(".burger").on("click", function () {
    // $(".burger").toggleClass("burger--active");
    $(".dropdown").toggleClass("dropdown--active");
  });

  $(".slider-inner").slick({
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><svg class="prev-rrow" height="34" width="34"><use xlink:href="images/sprite.svg#prevarrow"></use></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg class="next-rrow" height="34" width="34"><use xlink:href="images/sprite.svg#nextarrow"></use></svg></button>',
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  });

  $(".offer-categories__slider").slick({
    infinite: false,
    slidesToShow: 5,
    prevArrow:
      '<button type="button" class="offer-categories__slick offer-categories__slick--prev"><svg class="prev-rrow" height="34" width="34"><use xlink:href="images/sprite.svg#prevarrow"></use></svg></button>',
    nextArrow:
      '<button type="button" class="offer-categories__slick offer-categories__slick--next"><svg class="next-rrow" height="34" width="34"><use xlink:href="images/sprite.svg#nextarrow"></use></svg></button>',
  });

  $(".choice-slider").slick({
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow:
      '<button type="button" class="choice-slider__arrow choice-slider__arrow--prev"><svg class="prev-rrow" height="34" width="34"><use xlink:href="images/sprite.svg#prevarrow"></use></svg></button>',
    nextArrow:
      '<button type="button" class="choice-slider__arrow choice-slider__arrow--next"><svg class="next-rrow" height="34" width="34"><use xlink:href="images/sprite.svg#nextarrow"></use></svg></button>',
  });

  $(".restaurants__list--slider").slick({
    infinite: false,
    // dots: true,
    arrows: false,
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
    starSvg:
      '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M.023 6.164a.469.469 0 0 1 .378-.319l4.96-.72L7.58.63a.469.469 0 0 1 .84 0l2.219 4.494 4.96.721a.469.469 0 0 1 .26.8l-3.59 3.498.848 4.94a.469.469 0 0 1-.68.495L8 13.245l-4.436 2.333a.469.469 0 0 1-.68-.495l.847-4.94-3.59-3.498a.469.469 0 0 1-.118-.48Z"/></svg>',
  });

  $(".respond-form__reiting-stars").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    starSvg:
      '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M.023 6.164a.469.469 0 0 1 .378-.319l4.96-.72L7.58.63a.469.469 0 0 1 .84 0l2.219 4.494 4.96.721a.469.469 0 0 1 .26.8l-3.59 3.498.848 4.94a.469.469 0 0 1-.68.495L8 13.245l-4.436 2.333a.469.469 0 0 1-.68-.495l.847-4.94-3.59-3.498a.469.469 0 0 1-.118-.48Z"/></svg>',
  });

  $(".image-link").magnificPopup({ type: "image" });
});
