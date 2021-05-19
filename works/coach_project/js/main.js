window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.background = "rgba(21, 113, 196, 0.7)",
    document.getElementById("navi").style.color = "#fff";
  } else {
    document.getElementById("header").style.background = "none",
    document.getElementById("navi").style.color = "#1571c4";
  }
}

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

  $('.navi__btn').click(function(){
    $(this).toggleClass('active');
    $('.navi').slideToggle(400);
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

  $(".contacts__logo-img").click(function() {
    $("html, body").animate({ scrollTop: 0}, "low");
    return false;
  });

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});


/* $(".js-open-request_popup").click(function() {
  $(".request_popup").fadeIn(300);
  $('body').css('overflow-y', 'hidden');
});

$(".js-close-popup").click(function() {
  $(".request_popup").fadeOut(0);
  $('body').css('overflow-y', 'visible');
}); */


