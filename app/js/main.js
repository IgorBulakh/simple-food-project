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
      '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 6.16429C0.0780973 5.99457 0.224753 5.87088 0.401315 5.84526L5.36139 5.12448L7.57966 0.629902C7.6586 0.469903 7.82157 0.368622 7.99997 0.368622C8.17841 0.368622 8.34135 0.469903 8.42032 0.629902L10.6387 5.12448L15.5987 5.84526C15.7752 5.87088 15.9219 5.99457 15.977 6.16426C16.0322 6.33397 15.9862 6.52025 15.8584 6.64478L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5775L8 13.2451L3.56374 15.5775C3.40577 15.6605 3.21443 15.6467 3.07009 15.5418C2.92574 15.437 2.8534 15.2592 2.88356 15.0833L3.73096 10.1433L0.141566 6.64475C0.0138168 6.52025 -0.0322151 6.33397 0.0229731 6.16429Z"/></svg>',
  });

  $(".respond-form__reiting-stars").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    starSvg:
      '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 6.16429C0.0780973 5.99457 0.224753 5.87088 0.401315 5.84526L5.36139 5.12448L7.57966 0.629902C7.6586 0.469903 7.82157 0.368622 7.99997 0.368622C8.17841 0.368622 8.34135 0.469903 8.42032 0.629902L10.6387 5.12448L15.5987 5.84526C15.7752 5.87088 15.9219 5.99457 15.977 6.16426C16.0322 6.33397 15.9862 6.52025 15.8584 6.64478L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5775L8 13.2451L3.56374 15.5775C3.40577 15.6605 3.21443 15.6467 3.07009 15.5418C2.92574 15.437 2.8534 15.2592 2.88356 15.0833L3.73096 10.1433L0.141566 6.64475C0.0138168 6.52025 -0.0322151 6.33397 0.0229731 6.16429Z"/></svg>',
  });

  $(".image-link").magnificPopup({ type: "image" });
});
