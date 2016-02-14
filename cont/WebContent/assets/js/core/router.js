'use strict';

define([ 'angular'
         ,'./authService']
,function(angular) {
	
	var app = angular.module('pbwApp2');
	
 	var config = app.config(['$routeProvider'
 	                         ,'CONST'
		         ,function ($routeProvider
		        		 ,CONST) {

            function getResolve(modulePath, screenName){
            	return {
					auth: ['AuthService', '$route', '$rootScope', 'logger', 
					       function resolveAuthentication(AuthService, $route, $rootScope, logger) {
						$rootScope.screenName = screenName||"";
						return AuthService.authorize($route.current.$$route.data.authorizedRoles);
					}],
					
					deps: ['$q', 'Helper', function($q, Helper){
						var defer = $q.defer();
						Helper.getLogger().debug("Loading page specific module " + modulePath);
						Helper.showLoading();
						require([modulePath], function(){
							
							Helper.hideLoading();
							defer.resolve();
						});
						
						return defer.promise;
						
					}]
				 }
            }
			//$urlRouterProvider.otherwise('/home/demand');
			
			$routeProvider
			.when("/admin/layoutmanager", {
				templateUrl: 'assets/js/views/admin/layoutmgr/controller/layoutmanager.html',
				controller : "LayoutMgrCtrl",
				data:{
					authorizedRoles: {pbWorkstation: "UPDATE"}
				},
				resolve: getResolve('views/admin/layoutmgr/controller/initLayoutMgr', "Layout manager")
			})
			.when("/views/dashboard", {
				controller : 'DashboardCtrl',
				templateUrl: CONST.BASE_URL + 'assets/js/views/dashboard/controller/dashboard.html',
				data:{
					authorizedRoles: {pbWorkstation: "READ"}
				},
				resolve: getResolve('views/dashboard/controller/initDashboard', "PB Workstation")
			})
			.when("/views/accruals", {
				controller : 'AccrualsCtrl',
				templateUrl: CONST.BASE_URL + 'assets/js/views/accruals/controller/accruals.html',
				reloadOnSearch: false,
				data:{
					authorizedRoles: {pbWorkstation: "READ"}
				},
				resolve: getResolve('views/accruals/controller/accrualsCtrl', "Accruals")
			})
			.when("/*", {
				resolve: {
					destroy: ['logger', function(logger){
						logger.debug("Destroying root");
						$rootScope.$destroy();
					}]
				 }
			})
			;
			
		}]) //End of config definition	
		  
		return config;
});			