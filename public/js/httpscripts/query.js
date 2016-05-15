$(document).ready(function(){

    // User JSON Factory & AJAX
    $('#btn0').click( function(){
        var data = {
          name: $('#name').val(),
          password: $('#pass').val()
        };
      console.log(data);
        $.ajax({
             type: 'POST',
             data: JSON.stringify(data),
             contentType: 'application/json',
             url: '/end',
             success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));
             }
        });
    });


});
