'use strict';

var appControllers = angular.module('app.controllers', []);

appControllers.controller('AppCtrl',
  ['$rootScope', '$scope', 'articleService',
  function($rootScope, $scope, articleService) {

    // Default app title
    $rootScope.appTitle = "Cavalier Daily";

    // Data load callbacks
    var onArticlesLoaded = function() {
      $rootScope.initializing = false;
      $rootScope.initialized = true;
      $rootScope.$broadcast('initialized');
    }

    // any data that is needed across the app should be initialized here
    $rootScope.initialize = function() {
      
      // pre-initialization
      $rootScope.initialized = false;
      
      // check initialization state
      if ($scope.initializing) { return; }
      $scope.initializedCount = 0;
      $scope.initializing = true;

      // get stuff
      onArticlesLoaded();
      // articleService.getArticles(onArticlesLoaded);
    };

}]);
