'use strict';

define(['angular'], function(angular){
	return angular.module('pbwApp2')
		.directive('appHeader', 
		 function(){
			return {
		        templateUrl: 'assets/js/core/directives/header/header.html',
		        restrict: 'A',
		        replace: true
	    	};
	});
});
