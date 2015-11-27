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
    $scope.twit = null;
  }
 
  $scope.itemClick = function(id) {
    twitsFactory.deleteTwit(id);
  }

}]);






