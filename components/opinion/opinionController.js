/**
 * Created by leandroalberto-dominguez on 7/5/16.
 */

angular.module('app').controller('opinion', function($scope, Opinion) {
    Opinion.getAll(function(ob)
    {
        $scope.stories = ob;
    });
});