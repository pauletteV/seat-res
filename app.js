$('document').ready(function() {
  $('.available').on('click', function() {
  	$('.seat-chart').append('<div id = "contact-form">');
  	$('#contact-form').prepend('<form id="reserveSeatForm"><label>Name:  <input type="name" name="name" placeholder="Your Name"></input></label></ br><label>Email:  <input type="email" name="email-address" placeholder="johnsmith@abc.com"></input></label><button type="sumbit">Submit</button></form>');
    $(this).switchClass("available", "reserved", 1000);
    console.log(this);
});
  $('button').on('click', function() {
    $('#contact-form')
  });
});
