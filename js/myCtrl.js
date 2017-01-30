var app = angular.module('myApp', ['ngRoute']);

/*
/		Config with single route
*/

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'view/main.html',
		controller: 'mainController'
	})
});

/*
/		Main controller
*/

app.controller('mainController', function($scope, ConvertFactory) {
	$scope.result = ConvertFactory.getBordersInfo();
	$scope.convertNumber = function() {
		if (ConvertFactory.checkBorders($scope.inputNumber)) {
			$scope.result = ConvertFactory.romanNumeralConverter($scope.inputNumber);
		} else {
			$scope.result = ConvertFactory.getBordersInfo();
		}
	}
})