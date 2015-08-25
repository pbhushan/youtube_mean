'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
        controllerAs: 'movieAdd'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
        controllerAs: 'movieView'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
        controllerAs: 'movieDelete'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
        controllerAs: 'movieEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MovieRestangular',function(Restangular){

    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({
        id : '_id'
      });
    });
  })

.factory('Movie',function(MovieRestangular){
  return MovieRestangular.service('movie');
})
/*.directive('video',function(){
  return {
    restrict : 'E',
    scope : {
      src: '='
    },
    templateUrl : 'views/video.html'
  };
})
.filter('trusted',function($sce){
  return function(url){
    return $sce.trustAsResourceUrl(url);
  };
})
*/
.directive('video', function($sce) {
  return {
    restrict: 'E',
    scope: { src:'=' },
    replace: true,
    templateUrl : 'views/video.html',
    link: function (scope) {
        
        scope.$watch('src', function (url) {
           if (url) {
               scope.url = $sce.trustAsResourceUrl(url);
           }
        });
    }
  };
});