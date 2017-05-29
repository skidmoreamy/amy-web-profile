$(document).ready(function(){

	/* begin validation*/
	$("#contactForm").validate({

		// setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		// rules define what is good/bad input
		// each rule starts with the form input element's NAME attribute
		rules: {
			name: {
				required: true
			},
			email: {
				email: true,
				required: true
			},
			// phone: {
			// 	phoneUs: true,
			// 	required: false
			// },
			message: {
				required: true,
				maxlength: 2000
			}
		},

		// error messages to display to the end user
		messages: {
			name: {
				required: "Please enter your name."
			},
			email: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address."
			},
			// phone: {
			// 	phoneUs: "Please enter a valid phone number."
			// },
			message: {
				required: "Please enter a message.",
				maxlength: "2000 characters max."
			}
		},

		submitHandler: function(form) {
			$("#contactForm").ajaxSubmit({
				type: "POST",
				url: $("#contactForm").attr("action"),

				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#output-area").css("display", "");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#contactForm")[0].reset();
					}
				}
			})
		}

	});/* end validate function */

});/*end document.ready()*/