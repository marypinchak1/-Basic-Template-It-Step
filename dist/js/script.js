let slider = $(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:
      "<img class='a-left control-c prev arrow-prev' src='../img/img/slideer-arrow-left.svg'>",
    nextArrow:
      "<img class='a-right control-c next arrow-next' src='../img/img/slider-arrow-right.svg'>",
  });
});

