'use strict';

define(['angular'], function(angular){
	
	return angular.module('pbwApp2')
		.directive('appFooter', 
		 function(){
			return {
		        templateUrl: 'assets/js/core/directives/footer/footer.html',
		        restrict: 'A',
		        replace: true,
	    	};
	});
});
