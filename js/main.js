// When the user submits the form
$('form').on('submit', function (e) {

	// Prevent the page from refreshing
	e.preventDefault();



	var author = $('#authorSelect').val();

	var noun = $('#nounInput').val();

	var verb = $('#verbInput').val();
		
	if (author === "") {
		$('#authorSelect').addClass('error');
	} else {
		$('#authorSelect').removeClass('error');
	}

	if (noun === "") {
		$('#nounInput').addClass('error');
	} else {
		$('#nounInput').removeClass('error');
	}

	if (verb === "") {
		$('#verbInput').addClass('error');
	} else {
		$('#verbInput').removeClass('error');
	}

	// Conditional here for BONUS task
	if (author !== "" && noun !== "" && verb !== "") {

		$('.quote').hide();

		if (author === "suess") {
			$('#suess').fadeIn(300);
		} else {
			$('#carroll').fadeIn(300);
		}

		$('.noun').text(noun);

		$('.verb').text(verb);

	}

});