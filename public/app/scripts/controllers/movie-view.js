'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('MovieViewCtrl', function ($scope,$routeParams,Movie) {
    $scope.viewMovie = true;
    $scope.movie = Movie.one($routeParams.id).get().$object;
    
  });
