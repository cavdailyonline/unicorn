// Cavalier Daily App
var app = angular.module('app', [
  'ngError',
  'ui.router',
  // local-modules
  'app.services',
  'app.directives',
  'app.controllers',
  'app.factories',
  'app.filters',
  // end local-modules
]);

app.config(
  ['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    // Reset prefix to '/' instead of ui-router default ('/#/')
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    /* 
     * All states go below here.
     */

    $stateProvider
    // default states
    .state('home', {  // redirects to /discuss
      url: '/',
      templateUrl: './partials/home.html',
      controller: 'HomeCtrl'
    })
    // Individual Views
    .state('search', {
      url: '/search/:query',
      templateUrl: './partials/search.html',
      controller: 'SearchCtrl'
    })
    // Error screen
    .state('404', {
      url: '*path',
      templateUrl: './partials/404.html',
      controller: '404Ctrl'
    })
    ;

    $urlRouterProvider.otherwise('/404');

}]);
