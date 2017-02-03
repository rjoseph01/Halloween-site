$('.ghost').on('mouseover', function() {
  $('.ghost').fadeOut(1800);
})

$('.ghosttalk').on('click', function() {
  $('.ghost').fadeIn(2400);
})
$('.nobut').on('click', function(){
	$('.Owl').fadeIn(1200);
  $('.monster').hide();
})
$('.yesbut').on('click', function(){
	$('.monster').show();
  $('.Owl').hide();
})