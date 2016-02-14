'use strict';

define(['angular'], function(angular) {
	
	return angular.module('pbwApp2')
	.factory('EventService', ['$rootScope','logger',function($rootScope, logger) {
		
	    return {
	    	on: function(event, callback, scope){
	    		if(!event || !callback || !scope){
	    			logger.debug(
	    					(!event? "Event is missing":" ")
	    					+ (!callback||typeof callback!=="function"? "Invalid handler":" ")
	    					+ (!scope? "Scope is missing":" ")
	    					);
	    			return;
	    		}
	    		
	            var handler = $rootScope.$on(event, callback);
	            scope.$on('$destroy', handler);
	    	},
	        trigger: function(event, args) {
	            $rootScope.$emit(event, args);
	        }
	    };
	}]);
	
});