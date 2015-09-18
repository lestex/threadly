var main = function() {
  
  //get data from API then append to UL/li
  $.getJSON( "/twits/", function(data){
  	data.forEach(function(entry) {
      $('<li>').text(entry.body).prependTo('.comments');
    });
  });
  
  // hande POST button
  $('#submit').click(function(){
    
    var twit = $('#body-text').val();
    if (twit === '')
      alert("body must not be empty")
    else
    // save to backend and append to UL
      $('<li>').text(twit).prependTo('.comments');
    
  });
}

$(document).ready(main);