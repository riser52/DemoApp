'use strict';

define(['angular', 'uiLogger'], function(angular) {
	
	angular.module('error.util', ['ui.logger'])
	  .config(["$provide", function($provide) {
	    $provide.decorator('$exceptionHandler', ['$delegate', '$injector', 'logger', function($delegate, $injector, logger) {
	
	      return function(exception, cause) {
	        try {
	        	logger.console(exception);
	        	logger.console(cause);
	        	logger.error(exception.toString(), null, cause, null);
	        } catch(ex) {
	        	logger.console('$exceptionHandler', ex);
	        }
	        $delegate(exception, cause);
	      };
	    }]);
	  }]);

	angular.module('http.error.util', ['ui.logger'])
	.factory('errorHttpInterceptor', ["$q", "inform", "logger", function ($q, inform, logger) {

	    function interceptor(rejection) {
	      try {
	    	  var msg = 'Network error (' + rejection.status + '): ' + rejection.statusText;
	    	  logger.console(msg, rejection);
	    	  logger.error(msg, null, rejection, null);
	      } catch(ex) {
	    	  logger.console('$httpProvider', ex);
	      }	
	      return $q.reject(rejection);
	    }

	    return {
	      requestError: interceptor,
	      responseError: interceptor
	    };

	}])

	.config(["$httpProvider", function ($httpProvider) {
		$httpProvider.interceptors.push('errorHttpInterceptor');
	}]);
  
});  