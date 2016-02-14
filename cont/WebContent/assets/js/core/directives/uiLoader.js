'use strict';

define(['angular'], function(angular) {
	
	angular.module('pbwApp2')
	.directive('uiLoader', function(){
		return {
			restrict: 'C',
			template: '<div class="loading-icon text-center fa-lg"><div class="sp sp-circle"></div>&nbsp;Loading...</div>'
		}
	});
	
});