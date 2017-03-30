// When the user mouseovers headline
	// mouse enters the scene
		// paragraph fades in and slides up
	// mouse exits the scene
		//paragraph fades out and slides down


	
// When the user clicks on one of the vertical hero images
	// the vertical image expands to full cover display
	

	

// $(function(){
//   $('.event-list').find('.event').click(function(){
//     $('.event-list').find('.openEv').removeClass('open');
//     $(this).next().toggleClass('open');
//   })
// })


$('.event-container').on('click', function () {
    // Type code related to event here! :)
    $('.topbar-background').fadeIn(300);
    $('.topbar-content').addClass('active');
});


$('.close-button').on('click', function () {
    // Type code related to event here! :)
    $('.topbar-background').fadeOut(300);
    $('.topbar-content').removeClass('active');
});


//when user clicks on event-container
//addClass active to topbar-content
//topbar background fades in 85%

//when user clicks close button
//removeClass active to topbar
//topbar background fades out
