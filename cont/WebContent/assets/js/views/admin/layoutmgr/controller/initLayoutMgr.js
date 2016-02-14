'use strict';

define([ 'angular'
         ,'views/widgets/services/profileGroupService'
         ,'views/widgets/services/widgetService'
         ,'views/widgets/directives/widget'
         ], function(angular) {

	return angular.module('pbwApp2')
	.controller('LayoutMgrCtrl',
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
        function(Helper, $scope, $rootScope, $http, $timeout, $q, inform, WidgetService, ProfileGroupService, EventService) {

	        	$scope.widgets = WidgetService.getAll();
	        	$scope.profiles = ProfileGroupService.getAll();
	        	
	        	$scope.selectedProfile = null;
        
	        	$scope.setRows = function(){
	        		var modules = [];
	        		if(!$scope.selectedProfile){
	        			$scope.rows = [];
	        			return;
	        		}
	        		$scope.profile = angular.copy($scope.selectedProfile);
	        		
	        		Helper.showLoading();
	        		for(var i in $scope.profile.widgets)
	        			modules.push( 'views/widgets/directives/' + $scope.profile.widgets[i].id +'/'+ $scope.profile.widgets[i].id );
	        		
	        		require(modules, function(){
		        		$scope.rows = ProfileGroupService.getRowLayout($scope.profile);
		        		//console.log($scope.rows);
		        		Helper.hideLoading();
	        		});
	        	};
	        	
	        	$scope.cancelEdit = function(){
	        		$scope.profile = $scope.selectedProfile = null;
	        		$scope.rows = [];
	        	}
	        	
	        	$scope.saveProfile = function(){
	        		angular.merge($scope.profile, $scope.selectedProfile);
	        		$scope.cancelEdit();
	        	}
	        	
	        	$scope.onDropCompletion = function($data, $event, row, rowIndex){
	        		for(var i in $scope.selectedProfile.widgets){
	        			if( $scope.selectedProfile.widgets[i].id == $data.meta.id ){
	        				$scope.selectedProfile.widgets[i].row = rowIndex;
	        			}
	        		}
	        		$scope.selectedProfile.widgets.sort(function(a,b){
	        			return a.row - b.row;
	        		});
	        		console.log($scope.selectedProfile.widgets);
	        		$scope.rows = ProfileGroupService.getRowLayout($scope.selectedProfile);
	        	};
	        	
	        	$scope.onReOrder = function($index, $data, $event, row){
	        		var i = 0, newIdx = 0, colIdx = 0;
	        		for(i =0; i < $scope.selectedProfile.widgets.length; i++){
	        			if( $data.meta.row == $scope.selectedProfile.widgets[i].row)
	        				colIdx++;
	        			else
	        				colIdx = 0;
	        			if( $scope.selectedProfile.widgets[i].id == $data.meta.id ){
	        				newIdx = colIdx > $index? i - $index: i + $index; 
	        				$scope.selectedProfile.widgets.splice(newIdx, 0, $scope.selectedProfile.widgets.splice(i, 1)[0]);
	        				break;
	        			}
	        		}
	        		console.log("Parent "+ $index +"  "+ colIdx +"  "+ i);
	        		//console.log($data);
	        		//console.log($event);
	        	}
        } ]);

});