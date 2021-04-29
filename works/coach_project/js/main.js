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

$(".js-open-requst_popup, .js-open-buy_popup").click(function() {
  $(".popup").fadeIn(300);
  $('body').css('overflow-y', 'hidden');
});

$(".js-close-popup").click(function() {
  $(".popup").fadeOut(0);
  $('body').css('overflow-y', 'visible');
});
