$(document).ready(function () {
    function suc(response) {
      $('.stninf').html('');
      for(var i=0; i<response.obj.length; i++) {

         $('.stninf').append('<tr><td>'+(i+1)+'</td><td>'+(response.obj[i])+'</td></tr>');
       }
    }

  $('#submit').click (function () {
    $.ajax({
      url: '/train',
      type: 'POST',
      data: { num: $('#train').val() } ,
      success: suc,
      error: function (err) {
        console.log(err);
      }
    });
  });
});