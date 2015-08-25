'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('MovieDeleteCtrl', function ($scope,$routeParams,Movie,$location) {
 $scope.movie = Movie.one($routeParams.id).get().$object;
 $scope.deleteMovie = function() {
 	$scope.movie.remove().then(function(){
 		$location.path('/movie');
 	});
 };

 $scope.back = function() {
 	$location.path('/movie/'+ $routeParams.id);
 };
   

  });
