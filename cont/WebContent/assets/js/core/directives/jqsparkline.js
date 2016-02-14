'use strict';

define(['angular', 'vendor/charts/sparkline/jquery.sparkline'], function(angular) {
	
	angular.module('pbwApp2')
	.directive('jqsparkline', ['$timeout', function($timeout){
		return {
		    restrict: 'A',
		    scope: {
		      'model': '=',
		      'data': '@',
		      'sliceColors': '='
		    },
		    link: function(scope, elem, attrs) {

				var params = $.extend(attrs, {enableTagOptions: false, tagOptionsPrefix: '', sliceColors: scope.sliceColors});

				if(scope.model)
					$(elem).sparkline(scope.model, params);
				else if(scope.data)
					$(elem).sparkline(scope.data, params);
				else
					$(elem).sparkline('html', params);
	    		elem.removeClass('invisible');

		    }
		  };		
	}]);
});