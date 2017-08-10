(function () {

var app = angular.module("awwApp", ["ui.bootstrap"]);

app.controller('awwController', function($scope, $http) {

    var url = "https://www.reddit.com/r/aww/.json?limit=15";

    $http.get(url).then(function(response) {
		$scope.cuties = response.data.data.children; //sends the top 15 reddit posts as objects to array
    });
});

})();