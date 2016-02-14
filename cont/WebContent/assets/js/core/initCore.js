'use strict';

define(['angular'
        ,'constants'
        ,'core/userInfo'
        ,'core/eventService'
        ,'core/authService'
        ,'core/config'
        ,'core/router'
        ,'core/socketFactory'
        ,'core/filters'
        ,'core/helpers'
        ,'core/directives/header/header'
        ,'core/directives/navigation/navigation'
        ,'core/directives/footer/footer'
        ,'core/directives/uiLoader'
        ,'core/directives/socketListener'
        ], function(angular){
	
	'use strict';
	
	angular.module('pbwApp2')
	.run(function ($rootScope, $location, $timeout, UserInfo, CONST, $interval, logger) {

			$rootScope.notification = {
				enabled: true,
				soundEnabled: true
		    };
			$rootScope.CONST = CONST;

			$rootScope.showNoAccess = false;
			$rootScope.hasAppAccess = false;
			$rootScope.hasUpdateAccess = false;
			$rootScope.fontSize = '11';
			$rootScope.fontFamily = "Arial, Helvetica, sans-serif";

			$rootScope.page = $location.path().substring( $location.path().lastIndexOf('/')+1 );
			$rootScope.basePath = $location.path().substring( 0, $location.path().indexOf('/') );
			$rootScope.wfStatus = "";
			$rootScope.allConfirmed = false;
			$rootScope.showLoading = true;

			//As a plugin application
			$rootScope.asPlugin = !!$location.search().plugin;

			// =======================================
			// Watch 
			// =======================================
			var pathWatch = $rootScope.$watch(function(){ return $location.path(); }, function(current){
				current = current.replace(/^\s+|\s+$/g, ' ').replace(/\//gim,' ').split(' ');
				$rootScope.page = current[ current.length-1 ];
				$rootScope.basePath = current[0];
			});
			
			var accessWatch = $rootScope.$watch(function(){ return UserInfo.isLoggedIn(); }, function(loggedIn, oldLoggedIn){
				if(loggedIn !== oldLoggedIn){
					$rootScope.hasAppAccess = UserInfo.checkRead('pbwAutoBidding');
					//TODO later we have to set it properly
					$rootScope.hasUpdateAccess = UserInfo.checkUpdate('pbwAutoBidding');
					accessWatch();
				}
			});
			
			var clockInterval = $interval(function(){ $rootScope.currTime = (new Date()).getTime()/1000; }, 999);

			// =======================================
			// Router events 
			// =======================================
			$rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
			    $rootScope.showNoAccess = false;
				logger.debug("Route Success "+ current.$$route.originalPath);
			});

			$rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
				if (eventObj.authorized === false) {
					$rootScope.showLoading = false;
					$rootScope.showNoAccess = true;
				}
				logger.error("Route Error "+ current.$$route.originalPath);
			});

			// =======================================
			// Redirect if no path available 
			// =======================================
			if($location.path() == ""){
				$location.path('/views/dashboard');
			}

			// =======================================
			// To remove popop
			// =======================================
			angular.element(document.body).on('click', function(e){
				var elm = e.target||e.srcElement,
				popover = document.querySelector('div.popover.auto-close');
				
				if(popover){
					if( (popover.contains(elm)===true && elm.getAttribute('data-dismiss') === 'popover') || popover.contains(elm)===false ){
						angular.element(popover).remove();
					}
				}
				elm = popover = e = null;
			});

			// =======================================
			// DESTROY
			// =======================================
			$rootScope.$on('$destroy', function(){
				if(pathWatch) pathWatch();
				if(accessWatch) accessWatch();
				if(clockInterval) $interval.cancel(clockInterval);
				angular.element(document.body).off();
			});

	});	
	
});