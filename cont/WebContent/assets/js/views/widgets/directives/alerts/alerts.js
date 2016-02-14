define(['angular'], function(angular){
	
	var RateAlerts = angular.module('pbwApp2')
	.directive('wgtAlerts', ['$http', 'Helper', function($http, Helper){
		
		return Helper.getBaseWidget().extend({
			restrict: 'C',
			cssClass: "col-xs-12 alerts",
			templateUrl: 'assets/js/views/widgets/directives/alerts/alerts.html',
			link: function($scope, elem, attr){
				$scope.list = {"missingPositions" : 100, 
						"tradeBreaks" : 10,
						"watchListAlerts" : 5,
						"rateAlerts" : 26,
						"revenueOpportunity" : 2345400,
						"newShorts" : 35,
						"newLongs" : 27,
						"cashWiresIn" : 48,
						"cashWiresOut" : 32,
						"supplyTightening" : 8,
						"supplyEasing" : 15,
						"locatesNeedAction" : 15,
						"negativeNetRevenue" : 3200
				};
				
			}
		});
		
	}]);
	
	return RateAlerts;
})