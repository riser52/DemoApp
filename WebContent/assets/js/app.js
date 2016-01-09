var app = angular.module('demoApp', []);

app.controller('mainCtrl', ['$scope', function($scope) {
	  
	$scope.myDateRange = {startDate: null, format:'MM-DD-YYYY', endDate: null},
	$scope.opts={format: 'MM/DD/YYYY'}
	$scope.currDate = Date.now();
	  
}]);