// sets viewing activity flags
function setWarnings(gus, carlton, eshawn, shawn, woody) {
    $('.gus-warning').css("visibility", gus);
	$('.carlton-warning').css("visibility", carlton);
	$('.eshawn-warning').css("visibility", eshawn);
	$('.shawn-warning').css("visibility", shawn);
	$('.woody-warning').css("visibility", woody);
}

$(document).ready(function(){

	//materialize init functions
	$(".side-nav-trigger").sideNav();

	$('.collapsible').collapsible();

	$('.dropdown-button').dropdown({
		constrain_width: false,
		hover: false
	});

	$('.modal-trigger').leanModal();

	$('select').material_select();

	$('.tooltipped').tooltip({"delay": 100});

	// collapsible toggle triggers
	$('.add-toggle').on( "click", function() {
		$('#hidden-collapse').trigger( "click" );
	});

	$('.collapsible-toggle').on( "click", function() {
		$(this).closest('.collapsible-body').prev('.collapsible-header').trigger( "click" );
	});

	// threshold validation
	$('#modal-validate').on( "click", function() {
		var threshVal = $('#threshold-input').val();

		if(threshVal === "" || threshVal === "0") {
			threshVal = 0;
		}
		else if(!parseInt(threshVal)) {
			toast('Please input an integer value for the minimum threshold.', 4000);
			return;
		}
		
		var threshType = $('#threshold-select').prev('.select-dropdown').html();

		if(threshType === "Minutes") {
			if(threshVal <= 0) {
				setWarnings("hidden", "hidden", "hidden", "hidden", "hidden");
			}
			else if(threshVal <= 9) {
				setWarnings("hidden", "hidden", "hidden", "visible", "hidden");
			}
			else if(threshVal <= 63) {
				setWarnings("hidden", "hidden", "visible", "visible", "hidden");
			}
			else if(threshVal <= 157) {
				setWarnings("hidden", "hidden", "visible", "visible", "visible");
			}
			else if(threshVal <= 393) {
				setWarnings("hidden", "visible", "visible", "visible", "visible");
			}
			else{
				setWarnings("visible", "visible", "visible", "visible", "visible");
			}

		}
		else if(threshType === "Clips") {

			if(threshVal <= 0) {
				setWarnings("hidden", "hidden", "hidden", "hidden", "hidden");
			}
			else if(threshVal <= 17) {
				setWarnings("hidden", "hidden", "hidden", "visible", "hidden");
			}
			else if(threshVal <= 57) {
				setWarnings("hidden", "hidden", "visible", "visible", "hidden");
			}
			else if(threshVal <= 124) {
				setWarnings("hidden", "hidden", "visible", "visible", "visible");
			}
			else if(threshVal <= 288) {
				setWarnings("hidden", "visible", "visible", "visible", "visible");
			}
			else{
				setWarnings("visible", "visible", "visible", "visible", "visible");
			}
		}
		else {
			setWarnings("hidden", "hidden", "hidden", "hidden", "hidden");
		}

		$('#modal-settings').closeModal();
		
	});

});