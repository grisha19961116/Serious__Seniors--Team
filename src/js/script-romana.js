
$(document).ready(function(){
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 767, 
        settings: {
          arrows: true          
        }
      }
    ],
    mobileFirst: true,
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    centerMode: true,
    focusOnSelect: true,        
    responsive: [
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 7,
          arrows: false
        }
      }
    ],
    mobileFirst: true,
});
});
$(window).on("resize", function() {
  $(".slider-nav").slick("resize")
})
