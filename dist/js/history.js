jQuery(document).ready(function ($) {
  // Window properties
  let wHeight = window.innerHeight;
  let wWidth = window.innerWidth;

  $(window).resize(function () {
    wHeight = window.innerHeight;
    wWidth = window.innerWidth;
  });

  let container = $("#scroll-container");
  let containerYOffset = Math.floor(container.offset().top - wHeight);
  $(window).on("scroll", function () {
    let currentPosition = $(window).scrollTop();
    if (currentPosition >= containerYOffset) {
      container.css("position", "absolute");
      container.css("bottom", "0");
      container.css("top", "unset");
    }
    container.css("position", "fixed");

    let xTranslateAmt = currentPosition - containerYOffset;
    let scroll = anime({
      targets: "#scroll-container",
      translateX: -((xTranslateAmt - wHeight / 5) * 1.1) + "px",
      easing: "linear",
      elasticity: 200,
      duration: 0,
    });
  });
});
// 2
jQuery(".fp-slider-items").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// 3
(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img",
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function () {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" + selectors.item.last().find(selectors.img).attr("src") + ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" + $(this).find(selectors.img).attr("src") + ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();
