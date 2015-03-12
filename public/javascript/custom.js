$(document).ready(function(){
  $('#contact-form').submit(function(e){
    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/',
      data: $(this).serialize(),
      success: function(email){
        $('#mailing-list #contact-form').fadeOut('slow').toggle();
        $('.form-success').text(email + ' has been added to the mailing list!');
        $('.form-success-box').removeClass('hidden');
      }
    });
  });
});
