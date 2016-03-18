//= require jquery
//= require jquery_ujs

var main = function() {
  $('#submit').addClass('disabled');
  //get data from API then append to UL/li
  getAllTwits();

  $(".comments").on('click', '.item', function(){
    var id = $(this).attr("id");
    // delete from API
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: "/twits/" + id,
        success: function(data){
            //console.log('success')
        }
    });
    $(this).remove();
  });
  
  // hande POST button
  $('#submit').click(function(){
    var twit = $('#input-text').val();
    $('#submit').removeClass('disabled');
    $('<li>').text(twit).prependTo('.comments');
    $('li').addClass('item');
    $.ajax({
      url: "/twits",
      type: "POST",
      data: { "twit": { "body": twit } },
      success: function(resp){ //console.log(resp)
      }
    });
      //clear the input
    $('#input-text').val('');
      // set the POST button class to disabled
    $('#submit').addClass('disabled');    
  });
  
  // check if input val is not empty
  $('#input-text').keyup(function() {
    var postLength = $(this).val().length;
    if (postLength > 0) {
      $('#submit').removeClass('disabled');
    }
    else {
      $('#submit').addClass('disabled');
    }
  });
    
};

// get all twits from API GET '/twits'
function getAllTwits() {
$.getJSON( "/twits", function(data){
    console.log(data)
  	data.reverse().forEach(function(entry) {
      $('<li>').text(entry.body).addClass('item').attr('id', entry.id).prependTo('.comments');
    });
  });
};

$(document).ready(main);