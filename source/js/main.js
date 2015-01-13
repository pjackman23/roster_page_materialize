$(document).ready(function(){

	//materialize functions
	$(".side-nav-trigger").sideNav();

	$('.collapsible').collapsible();

	$('.dropdown-button').dropdown({
		constrain_width: false,
		hover: false
	});

	$('.modal-trigger').leanModal();

	$('select').material_select();

	$('.tooltipped').tooltip({"delay": 100});

	// special triggers
	$('.add-toggle').on( "click", function() {
		$('#hidden-collapse').trigger( "click" );
	});
});