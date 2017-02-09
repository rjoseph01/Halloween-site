/*$('.ghost').on('mouseover', function() {  //fades ghost on mouseover
  $('.ghost').fadeOut(1800);
})

$('.ghosttalk').on('click', function() { //brings ghost back when clicked
  $('.ghost').fadeIn(2400);
})*/
function gFade(){  //makes ghost disappear
	$('.ghost').fadeOut(1800);
	setTimeout(gAppear, 5000)
}
function gAppear(){  //makes ghost reappear
	$('.ghost').fadeIn(2400);
	setTimeout(gFade, 5000)
}
$('.ghost').on('mouseover', function(){  //initiates fading
	setTimeout(gFade, 500)
})

$('.mgar').on('click', function(){   //dims Dracula
	$(".dracula").css('opacity', '0.25');
})	

$('.lgar').on('click', function(){  //revives Dracla
	$(".dracula").css('opacity', '2.0');
})	

$('.nobut').on('click', function(){  /*owl fades in when clicked and hides monster*/
	$('.Owl').fadeIn(1200);
  $('.monster').hide();
})
$('.yesbut').on('click', function(){ /*monster pops up and owl fades when clicked*/
	$('.monster').show();
  $('.Owl').hide();
})
