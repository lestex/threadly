// Module
var app = angular.module('twitApp', []);

//controlers
app.controller('twitController', ['$scope', '$http', 'twitsFactory', function($scope, $http, twitsFactory){
  $scope.title = "threadly";
  $scope.subheader = "Twitter clone written in Rails and Angular";
  $scope.data = twitsFactory;
  
  twitsFactory.getTwits();
  
  $scope.click = function() {
    var twit = { "twit": { "body": $scope.twit } };
    twitsFactory.addTwit(twit);
  }
 
  $scope.itemClick = function(id) {
    var res = $http.delete('/twits/' + id);
    res.success(function(data, status, headers, config) {
        console.log(data);
    });
  }

}]);






