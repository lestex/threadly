//factory
app.factory('twitsFactory', function($http){
  var _twits = [];
  
  var _getTwits = function (){
    
    $http.get('/twits')
      .then(function(result) {
        // success
        angular.copy(result.data, _twits);
      },
      function(error) {
        // error
      });
  };
  
  var _addTwit = function (newTwit){
   
    $http.post('/twits', newTwit)
      .then(function(result) {
        // success
        var newlyCreatedTwit = result.data;
        _twits.splice(0, 0, newlyCreatedTwit);
        console.log(newlyCreatedTwit);
      },
      function(error) {
        // error
        console.log(error);
      });
  };


  return {
    twits: _twits,
    getTwits: _getTwits,
    addTwit: _addTwit
  };
});


