'use strict';

define(['angular'], function(angular) {
	
	angular.module('pbwApp2')
	.directive('socketListener', 
			['logger'
          ,function(logger
		          ){
        	  return {
      			restrict: 'A',
      			link: function(scope){
      				logger.console("Registering the listeners");
      				DemandListener.start();
      				HistoryListener.start();
      				ConfigListener.start();
      				
      				scope.$on('$destroy', function(){
      					DemandListener.stop();
          				HistoryListener.stop();
          				ConfigListener.stop();
          				logger.console("Un-Registering the listeners");
      				});
      			}
        	  }
	}]);
	
});