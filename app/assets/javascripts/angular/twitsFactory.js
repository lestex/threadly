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
      },
      function(error) {
        // error
      });
  };
  
  function findIndexByKeyValue(arraytosearch, key, valuetosearch) {
    for (var i = 0; i < arraytosearch.length; i++) {
      if (arraytosearch[i][key] == valuetosearch) {
        return i;
      }
    }
    return null;
  };
  
  var _deleteTwit = function (twitId){
   
    $http.delete('/twits/' + twitId)
      .then(function(result) {
        // success
        var index = findIndexByKeyValue(_twits, "id", twitId);
        _twits.splice(index, 1);
      },
      function(error) {
        // error
      });
  };


  return {
    twits: _twits,
    getTwits: _getTwits,
    addTwit: _addTwit,
    deleteTwit: _deleteTwit
  };
});


