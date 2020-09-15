$(document).ready(function(){
    $('.header').height($(window).height());
  })


$('.carousel').carousel()

$(document).ready(function() {
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 20000  // 10 seconds
});