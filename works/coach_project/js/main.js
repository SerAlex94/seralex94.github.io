$(document).ready(function(){
  $('.testimonials__slider').slick({
    dots: true,
  });
});

$(document).ready(function() {
  $('.navi__btn').click(function(){
      $(this).toggleClass('active');
      $('.navi').slideToggle(400);
  });
});
