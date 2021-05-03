$(document).ready(function(){
  $('.testimonials__slider').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 500,
        settings: { arrows: false }
      }
    ]
  });
});

$(document).ready(function() {
  $('.navi__btn').click(function(){
      $(this).toggleClass('active');
      $('.navi').slideToggle(400);
  });
});

$(".request-open-popup").click(function() {
  $(".request-popup").fadeIn(300);
  $('body').css('overflow-y', 'hidden');
});

$(".buy-open-popup").click(function() {
  $(".buy-popup").fadeIn(300);
  $('body').css('overflow-y', 'hidden');
});


$(".js-close-popup").click(function() {
  $(".request-popup, .buy-popup").fadeOut(0);
  $('body').css('overflow-y', 'visible');
});

$(".js-scroll-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0}, "medium");
  return false;
});

/* $(".js-open-request_popup").click(function() {
  $(".request_popup").fadeIn(300);
  $('body').css('overflow-y', 'hidden');
});

$(".js-close-popup").click(function() {
  $(".request_popup").fadeOut(0);
  $('body').css('overflow-y', 'visible');
}); */


