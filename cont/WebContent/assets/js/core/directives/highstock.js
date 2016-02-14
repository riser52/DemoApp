'use strict';

define(['angular', 'highcharts'], function(angular) {
	
	angular.module('pbwApp2')
	.directive('highstocks', ['Helper', function(Helper){
		return {
			restrict: 'E',
			scope:{
				config: '=',
				stock: '@'
			},
			link: function($scope, elem, attr){

				$scope.config.chart = $scope.config.chart||{};
				$scope.config.chart.renderTo = elem[0];
				
				if($scope.stock)
					$scope.chart = new Highcharts.StockChart($scope.config);
				else
					$scope.chart = new Highcharts.Chart($scope.config);
				
				$scope.$on('$destroy', function(){
					if($scope.chart) {
						$scope.chart.destroy();
					}
					$scope.chart = null;
				});

			}
		};  
	}]);
	
});