$(window).resize(function(){	 
  $('#canvas').css({
    position:'absolute',
    left: ($(window).width() - $('#canvas').outerWidth())/2,
    top: ($(window).height() - $('#canvas').outerHeight())/2
  });
  $('#signup').css({
    position:'absolute',
    left: ($(window).width() - $('#signup').outerWidth())/2,
    top: ($(window).height() - $('#signup').outerHeight())/2
  });
  $('#login').css({
    position:'absolute',
    left: ($(window).width() - $('#login').outerWidth())/2,
    top: ($(window).height() - $('#login').outerHeight())/2
  });
}); 
$(window).resize();