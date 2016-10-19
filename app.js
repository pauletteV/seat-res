$('document').ready(function() {

 //create a variable to hold a reference to 'this' /exact seat that was clicked
 var $seat;

  	$('.available').on('click', function() {
  		$seat = this;
  		//console.log(this);
	    //console.log("value of seat is: " + $seat);


  		//create the div to hold the form
	  	$('.seat-chart').append('<div id = "contact-form">');

	  	//dynamically create the form on click
	  	//$('#contact-form').prepend('<form id="reserveSeatForm"><label>Name:  <input type="name" name="name" placeholder="Your Name"></input></label></ br><label>Email:  <input type="email" name="email-address" placeholder="johnsmith@abc.com"></input></label><button type="sumbit">Submit</button></form>');
	  	$('#contact-form').prepend('<form id="reserveSeatForm"><label>Name:  <input type="name" name="name" placeholder="Your Name"></input></label></ br><label>Email:  <input type="email" name="email-address" placeholder="johnsmith@abc.com"></input></label></form><div id="submit-button">Reserve Seat</div>');

		/*not available to us without loading another libraray*/
	    	//$(this).switchClass("available", "reserved", 1000);

	    /*this DOES change our seat color, BUT once the submit button reloads the page...
	    the .availble class is added back on. Trying to push this to the click handler
	    of the "reserve seat button*/
	    	//$(this).removeClass("available").addClass("reserved");

	    //once the form elements have been loaded into the DOM...add listeners to them
	    addListeners();
	});

  	function addListeners() {
	  	$('#submit-button').mouseenter(function() {
	  		$(this).fadeTo(0, .5);
	  	});

	  	$('#submit-button').mouseleave(function() {
	  		$(this).fadeTo(0, 1);
	  	});

//	var $contact-form = $('#contact-form');
		$('#submit-button').on('click', function() {
			//change the color of the seat from available to reserved
			$($seat).removeClass('available').addClass('reserved');
			var $name = $('input[type=name]').val();
			var $email = $('input[type=email]').val();
			$('.seat-chart').after('<div id = "seat-reservation">');
			$('#seat-reservation').append($name + " : ");
			$('#seat-reservation').append($email);
			$('#contact-form').remove();

		});
	}
});


/*because the functionality of the submit button on a form is to reload the page & we are not pulling in updated
data from somewhere (a database; another file, etc) to update the which seats are availabe.... the seats will always
return to the original state when the submit button is clicked. We would need to "fake" the submit button in the meantime:

Line 7: create the div with the fake button when the rest of the form is dynamically created
Lines 15-29: add event listeners to the div/button to have a hover effect & a click listener to remove .available & add .reserved
*/

/*by dynamically creating the form elements each time on click of a seat, we end up with multiple instances of forms. We need to handle the form creation a different way:
	1.) Just code it into the index.html & toggle the div with the form on & off with the click
	2.) Remove the dynamically placed form each time the submit button is clicked...and be added when availalbe seat is clicked. Wash, Rinse, Repeat
*/
