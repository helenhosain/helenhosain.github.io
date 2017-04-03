/* ----------------------------------------
Event Dropdown
------------------------------------------- */

//when user clicks on event-container
	//addClass active to topbar-content
	//topbar background fades in 85%

//when user clicks close button
	//removeClass active to topbar
	//topbar background fades out

$('.event-container').on('click', function () {
 	$('.topbar-background').fadeIn(300);  
    $('.topbar-content').addClass('active');
});


$('.close-button').on('click', function () {
    $('.topbar-background').fadeOut(300);
    $('.topbar-content').removeClass('active');

});

// GABY - How do i stop the page from reloading when clicking on "event-container"?


/* ----------------------------------------
Header Hover
------------------------------------------- */

// when the user hovers on "title"
	//addClass "title-top"  to "title" to move up
	//addClass "category-bottom" to "category"

$('.header-media').mouseenter(function(){
	$('.header-media .header-description').fadeTo(50, 1);
	$('.header-media .header-description').addClass('active');
	$('.header-media .header-title').addClass('title-up');
	$('.header-media .header-category').addClass('category-down');
});

// GABY - How do I remove space between -title and category when mouse leaves?

$('.header-media').mouseleave(function(){
	$('.header-media .header-description').fadeTo(0, 0);
	$('.header-media .header-description').removeClass('active');
	$('.header-media .header-title').removeClass('title-up');
	$('.header-media .header-category').removeClass('category-down');
});


$('.header-style').mouseenter(function(){
	$('.header-style .header-description').fadeTo(50, 1);
	$('.header-style .header-description').addClass('active');
	$('.header-style .header-title').addClass('title-up');
	$('.header-style .header-category').addClass('category-down');
});

// GABY - How do I remove space between -title and category when mouse leaves?

$('.header-style').mouseleave(function(){
	$('.header-style .header-description').fadeTo(0, 0);
	$('.header-style .header-description').removeClass('active');
	$('.header-style .header-title').removeClass('title-up');
	$('.header-style .header-category').removeClass('category-down');
});


$('.header-events').mouseenter(function(){
	$('.header-events .header-description').fadeTo(50, 1);
	$('.header-events .header-description').addClass('active');
	$('.header-events .header-title').addClass('title-up');
	$('.header-events .header-category').addClass('category-down');
});

// GABY - How do I remove space between -title and category when mouse leaves?

$('.header-events').mouseleave(function(){
	$('.header-events .header-description').fadeTo(0, 0);
	$('.header-events .header-description').removeClass('active');
	$('.header-events .header-title').removeClass('title-up');
	$('.header-events .header-category').removeClass('category-down');
});

$('.header-travel').mouseenter(function(){
	$('.header-travel .header-description').fadeTo(50, 1);
	$('.header-travel .header-description').addClass('active');
	$('.header-travel .header-title').addClass('title-up');
	$('.header-travel .header-category').addClass('category-down');
});

// GABY - How do I remove space between -title and category when mouse leaves?

$('.header-travel').mouseleave(function(){
	$('.header-travel .header-description').fadeTo(0, 0);
	$('.header-travel .header-description').removeClass('active');
	$('.header-travel .header-title').removeClass('title-up');
	$('.header-travel .header-category').removeClass('category-down');
});

$('.media-image').on('click', function () {
	$('.modal-background').css("display", "flex").hide().fadeIn(300);
});

$('.close-button').on('click', function () {
	$('.modal-background').fadeOut(300);
	
});

