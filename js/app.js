var app = angular.module("awwApp", ["ui.bootstrap"]);

app.controller('awwController', function($scope, $http) {

	$scope.cuties = [];

    var url = "https://www.reddit.com/r/aww/.json?limit=15";

    $http.get(url).then(function(response) {
		$scope.cuties = response.data.data.children;
		console.log($scope.cuties)
    });
});