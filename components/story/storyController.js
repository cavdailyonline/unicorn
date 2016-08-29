/**
 * Created by leandroalberto-dominguez on 7/5/16.
 */

angular.module('app').controller('Story', function($scope, $location, $routeParams, $http) {
    console.log($routeParams.slug);
    $http({
        method: 'GET',
        url: 'http://ec2-54-174-237-231.compute-1.amazonaws.com:5984/cavdaily_test/_design/slugs/_view/slugs?key=\"' + $routeParams.slug + '\"'
    }).then(function successCallback(response) {
        console.log(response.data.rows[0].value[1]);
        $scope.story =
        {
            headline: response.data.rows[0].value[0],
            authors: response.data.rows[0].value[1],
            copy: response.data.rows[0].value[2],
            tags: response.data.rows[0].value[3],
            date: response.data.rows[0].value[4]
        }

    }, function errorCallback(response) {
        console.log(response);
        console.log("WARN :: FAIL")
    });
});