/**
 * Created by leandroalberto-dominguez on 7/5/16.
 */


angular.module('app').controller('life', function($scope, Life) {
    Life.getAll(function(ob)
    {
        $scope.stories = ob;
    });
});