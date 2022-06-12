$(document).ready(function(){
  $('.user-intro h4').removeClass('hidden');
  $("#js-rotating").Morphext({
    animation: "zoomInDown",
    separator: ",",
    speed: 4000
  });
  $("#js-rotating2").Morphext({
    animation: "flip",
    separator: ",",
    speed: 2000
  });
});