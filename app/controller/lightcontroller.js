/**
 * Created by Administrator on 7/8/2017.
 */
var app= angular.module('myApp', []);
app.controller("lightController", function($scope) {
    $scope.lightOn = false;
    $scope.toggleLight = function(){
        $scope.lightOn = !$scope.lightOn;
    }
});