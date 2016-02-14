'use strict';

define([ 'angular'
         ,'core/helpers'
         ]
, function(angular) {
	
	return angular.module('pbwApp2')
	.factory('AuthService', ['$http', 'Helper', '$rootScope', '$timeout', '$q',
	    function ($http, Helper, $rootScope, $timeout, $q) {
		
			//Method calls the entitlement service 
			function login(){
				
				return $http.get(Helper.formatUrl('common/getEntitlements'))
				    .success(function (res) {
	
						if(res.status == Helper.getConst().RESP.SUCCESS){
							Helper.getUser().set(res.data);
						} else {
							Helper.hideLoading();
							Helper.getUser().destroy();
						}
				    }).error(function(){
				    	Helper.hideLoading();
				    	Helper.getUser().destroy();
					});
			}
			
			//Validate user entitlement required for a module
			function validateAccess(authorizedRoles, $defer){ 
				
				var boolFound = false;
			
				for(var priviledge in authorizedRoles){
					boolFound = boolFound 
						|| ( authorizedRoles[priviledge] == "READ" && Helper.getUser().checkRead(priviledge) )
						|| ( authorizedRoles[priviledge] == "UPDATE" && Helper.getUser().checkUpdate(priviledge) );
				}
				
				if( boolFound === true )
					$defer.resolve({ authorized: true });
				else{
					Helper.getLogger().debug("User not Authorized for module");
					$defer.reject({ authorized: false });
				}
			}

			//AuthService object
			return {
	 
				authorize: function (authorizedRoles){
		  
					if (authorizedRoles == "*") {
						return Helper.getUser().isLoggedIn();
					}
					
					var $defer = $q.defer();
					
					if( Helper.getUser().isLoggedIn() === true ){
						validateAccess(authorizedRoles, $defer);
					} else {
						login().then(function(){
							validateAccess(authorizedRoles, $defer);
						}, function(){ 
							Helper.getLogger().debug("User login failed");
							$defer.reject({ authorized: false });
						})
					}
					
					return $defer.promise;
				}
			};
	 
	}]);
 
});