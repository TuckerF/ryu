$(document).ready(function() {
 	$('.ryu').mouseenter(function() {
   		$('.ryu-still').hide();
   		$('.ryu-ready').show();
 	})
 	.mouseleave(function() {
   		$('.ryu-ready').hide();
   		$('.ryu-still').show();
 	})
 	.mousedown(function() {
 		$('.ryu-ready').hide();
 		$('.ryu-throwing').show();
 		$('.text').hide();
 		$('.hadouken').finish().show()
 			.animate(
 				{'left': '1020px'},
 				500,
 				function() {
    				$(this).hide();
    				$(this).css('left', '620px');
  				}
			);
	})
 	.mouseup(function() {
 		$('.ryu-throwing').hide();
 		$('.ryu-ready').show();
 		$('.text').show();
	});
});

function playHadouken() {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};


 $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').show();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
    }
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });