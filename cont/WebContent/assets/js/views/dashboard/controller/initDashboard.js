'use strict';

define([ 'angular'
         ,'core/filters'
         ,'core/directives/highcharts',
         ,'core/directives/jqsparkline',         
         ,'core/directives/multiselect/multiselect',         
         ,'core/commonDataFactory',         
         ,'views/widgets/services/profileGroupService'
         ,'views/widgets/services/widgetService'
         ,'views/widgets/directives/widget',
         ,'views/widgets/directives/regcap/regcap'
         ,'views/widgets/directives/alerts/alerts'
         ,'views/widgets/directives/lendingMarket/lendingMarket'
         ,'views/widgets/directives/revenueSummary/revenueSummary'
         ], function(angular) {

	return angular.module('pbwApp2')
	.controller('DashboardCtrl',
	    [
	        'Helper',
	        '$scope',
	        '$rootScope',
	        '$http',
	        '$timeout',
	        '$q',
	        'inform',
	        'WidgetService',
	        'ProfileGroupService',
	        'EventService',
	        'CommonData',
        function(Helper, $scope, $rootScope, $http, $timeout, $q, inform, WidgetService, ProfileGroupService, EventService, CommonData) {

	        	$scope.selectedProfile = ProfileGroupService.getProfile("1");
        
        		$scope.channels = [{"channelCode":"FCM"}];
	        	CommonData.get('common/getChannels').then(function(resp){
	        		console.log(resp);
	        		$scope.channelsList = resp.list;
	        	});
	        	
	        	var modules = [];
        		if(!$scope.selectedProfile){
        			$scope.rows = [];
        			return;
        		}

        		Helper.showLoading();
        		for(var i in $scope.selectedProfile.widgets)
        			modules.push( 'views/widgets/directives/' + $scope.selectedProfile.widgets[i].id +'/'+ $scope.selectedProfile.widgets[i].id );
        		
        		require(modules, function(){
	        		$scope.rows = ProfileGroupService.getRowLayout($scope.selectedProfile);
	        		//console.log($scope.rows);
	        		Helper.hideLoading();
        		});

        } ]);

});