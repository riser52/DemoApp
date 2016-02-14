'use strict';

define(['angular'], function(angular){
	return angular.module('pbwApp2')
		.directive('appNavigation', 
		 ["AuthService", function(AuthService){
			return {
		        templateUrl: 'assets/js/core/directives/navigation/navigation-links.html',
		        restrict: 'A',
		        scope: true,
		        links: function(scope, elem, attrs){
		        	scope.hasReadAccess = function(name){
		        		return AuthService.checkRead(name);
		        	}
		        	scope.hasUpdateAccess = function(name){
		        		return AuthService.checkUpdate(name);
		        	}
		        }
	    	};
	}]);
});
