app.controller('SearchCtrl',
  ['$scope', '$state', function($scope, $state) {
    $scope.query = $state.params.query;
}]);