$(document).ready(function(){
    $('.header').height($(window).height());
  })


$('.carousel').carousel()

$(document).ready(function() {
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 10000  // 10 seconds
});