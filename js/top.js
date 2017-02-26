$(window).scroll(function() {
  if($(this).scrollTop() != 0) {
    $('#save').fadeIn(); 
  } else {
    $('#save').fadeOut();
  }
});

$('#save').click(function() {
  $('body,html').animate({scrollTop:0},"fast");
});