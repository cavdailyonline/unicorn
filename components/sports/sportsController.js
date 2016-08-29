/**
 * Created by leandroalberto-dominguez on 7/5/16.
 */

angular.module('app').controller('sports', function($scope, Sports) {
    Sports.getAll(function(ob)
    {
        $scope.stories = ob;
    });
});