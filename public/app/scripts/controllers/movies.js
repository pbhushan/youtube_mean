'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('MoviesCtrl', function ($scope,Movie) {
  /* $scope.movies = [
   {
   	title : 'A New Hope',
   	url : 'https://www.youtube.com/watch?v=9gvqpFbRKtQ'

   }];
   */
   

    $scope.movies = Movie.getList().$object;
    console.log($scope.movies);

  });
