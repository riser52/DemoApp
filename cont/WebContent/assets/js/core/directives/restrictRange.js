'use strict';

define(['angular'], function(angular) {
	
	angular.module('pbwApp2')
	.directive('restrictRange', function() {
		return {
		    restrict: 'A',
		    require: '?ngModel',
		    link: function(scope, elm, attr, ctrl) {
		    	if (!ctrl) return;

		    	var minvalue = 0;
		    	var maxvalue = 0;
		      
		    	attr.$observe('minvalue', function(value) {
		    		minvalue = isNaN(value)? 0 : parseFloat(value);
		    		ctrl.$validate();
		    	});
		    	attr.$observe('maxvalue', function(value) {
		    		maxvalue = isNaN(value)? 0 : parseFloat(value);
		    		ctrl.$validate();
		    	});

		    	ctrl.$validators.restrictRange = function(modelValue, viewValue) {
		    		return ctrl.$isEmpty(viewValue) || ( viewValue >= minvalue && viewValue <= maxvalue );
		    	};
		    }
		};
	});
});