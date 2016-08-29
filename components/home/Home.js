/**
 * Created by leandroalberto-dominguez on 7/5/16.
 */

angular.module('app').controller('Home', function($scope, Sports, Opinion, News, Life) {
    Opinion.getAll(function(ob)
    {
        $scope.opinion_stories = ob;
    });
    News.getAll(function(ob)
    {
        $scope.news_stories = ob;
    });
    Sports.getAll(function(ob)
    {
        $scope.sports_stories = ob;
    });
    Life.getAll(function(ob)
    {
        $scope.life_stories = ob;
    });
});