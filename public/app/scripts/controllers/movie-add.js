'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('MovieAddCtrl', function ($scope,Movie,$location) {
   $scope.movie = {};
   $scope.saveMovie = function(){
   	Movie.post($scope.movie).then(function(){
   		$location.path('/movies');
   	});
   };
  });
