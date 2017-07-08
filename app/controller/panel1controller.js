/**
 * Created by Administrator on 7/8/2017.
 */
app.controller("panel1Controller,[$scope,myAppservices", function($scope,myAppservices) {
    $scope.callservice=function(){
    $scope.lightOn = true;
    $scope.toggleLight = function(){
        myAppservices.getObjectsFromService(status).then(function(response){
            var user = response.data;
            $scope.
            $scope.lightOn = !$scope.lightOn;

        });
    }
        var status=$scope.lightOn;
}});

