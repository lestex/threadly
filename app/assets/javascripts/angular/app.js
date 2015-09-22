// Module
var twitApp = angular.module('twitApp', ['ngRoute', 'ngResource']);
// config HTTP

//services
twitApp.service('getAllTwits', ['$resource', '$http',  function($resource, $http){
    //this.twitsAPI = $resource('/twits',{callback :"JSON_CALLBACK"});
    //this.twits = this.twitsAPI.query();
    this.twit = '';
    
    $http.get('/twits').
    success(function(data, status, headers, config) {
      this.twits = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
    
}]);

//controlers
twitApp.controller('twitController', ['$scope', '$http', 'getAllTwits', function($scope, $http, getAllTwits){
    $scope.title = "threadly";
    $scope.subheader = "Twitter clone written in Rails and Angular";
    
    //get the twits from API
    $http.get('/twits').
    success(function(data, status, headers, config) {
      $scope.twits = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
    //$scope.twits = getAllTwits.twits;
    console.log($scope.twits);
    //model
    $scope.twit = getAllTwits.twit;
    
    $scope.$watch('twits', function(){
       getAllTwits.twit = $scope.twit; 
    });
    
    $scope.click = function() {
        var twitToSend = { "twit": { "body": $scope.twit } };
        
        var res = $http.post('/twits', twitToSend);
        res.success(function(data, status, headers, config) {
            
        });
        $scope.twits.push(twitToSend);
        
        //console.log($scope.twits);
        console.log($scope.twits[0]);
        console.log($scope.twits[$scope.twit.count-1]);
    }
   
    $scope.itemClick = function(id) {
      var res = $http.delete('/twits/' + id);
      res.success(function(data, status, headers, config) {
          console.log(data);
      });
    }
    
    
}]);


