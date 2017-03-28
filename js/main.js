// When the user mouseovers headline
	// mouse enters the scene
		// paragraph fades in and slides up
	// mouse exits the scene
		//paragraph fades out and slides down


	
// When the user clicks on one of the vertical hero images
	// the vertical image expands to full cover display
	

	

// $ và jQuery là như nhau

$(function(){
  $('.event-list').find('.event').click(function(){
    $('.event-list').find('.openEv').removeClass('open');
    $(this).next().toggleClass('open');
  })
})

