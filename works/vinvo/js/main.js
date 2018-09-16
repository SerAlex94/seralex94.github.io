$('.item-days').click(function(){
        $(this).toggleClass('active');
        $('.form-field__slider').slideToggle(40);
    });

$( function() {
  $( "#arrive" ).selectmenu();
  $( "#departure" ).selectmenu();
  $( "#slider-range" ).slider({
    range: true,
    min: 1,
    max: 24,
    values: [ 6, 8 ],
    slide: function( event, ui ) {
      $( "#days" ).val( "от " + ui.values[ 0 ] + " - до " + ui.values[ 1 ] );
    }
  });
  $( "#days" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ) +
    " - до " + $( "#slider-range" ).slider( "values", 1 ) );
} );
