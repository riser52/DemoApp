define(['angular'], function(angular){
	
	angular.module('pbwApp2')	
	.factory('BaseWidget', function() {
	    return {
	    	extend: function(directive){
	    		
	    		if(directive.link){
	    			
	    			directive._link = directive.link;
	    			
	    			if(directive.templateUrl){
	    				var url = directive.templateUrl;
	    				directive.templateUrl = function(elem, attrs){
	    					if(!attrs.layout){
		    					return url;
		    				} else {
		    					return 'assets/js/core/baseWidget/baseWidget.html';
		    				}
	    				}
	    			}
	    			
	    			directive.link = function($scope, elem, attrs){
	    				
	    				elem.addClass(directive.cssClass);
	    				$scope.attrs = attrs;
	    				if(!attrs.layout){
	    					directive._link($scope, elem, attrs);
	    				}	    				
	    			}
	    		}
	    		
	    		return directive;
	    	}
	    };
	});

});