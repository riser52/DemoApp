'use strict';

define(['angular','views/widgets/services/widgetService'], function(angular) {
	
	angular.module('pbwApp2')
	.service('ProfileGroupService', ['$http', 'CONST', 'WidgetService', function($http, CONST, WidgetService) {
		var groups = {"0": {id: 0,
							name: "System Default",
							widgets: [
//							          {id:"alerts", row: 0, meta: null, visible: true},
							          {id:"revenueTrend", row: 0, meta: null, visible: true},
							          //{id:"revenueSummary", row: 0, meta: null, visible: true},
							          {id:"rateAlerts", row: 1, meta: null, visible: true},
							          //{id:"lendingMarket", row: 2, meta: null, visible: true},
							          {id:"watchList", row: 2, meta: null, visible: true}
							]
				},
				"1": {id: 1,
					name: "Test Profile",
					widgets: [
//					          {id:"alerts", row: 0, meta: null, visible: true},
							          {id:"revenueTrend", row: 0, meta: null, visible: true},
							          //{id:"revenueSummary", row: 0, meta: null, visible: true},
							          {id:"rateAlerts", row: 1, meta: null, visible: true},
							          //{id:"lendingMarket", row: 2, meta: null, visible: true},
							          {id:"watchList", row: 2, meta: null, visible: true}
					]
				}
			},
			parseResponse = function(resp){
				var list = resp.list||resp;
				for(var i in list){
					list[i].widgets = angular.fromJson(list[i].widgets)||[];
					
					//Setting the 
					var widgets = list[i].widgets;
					if( widgets ){
						for(var j=0; j < widgets.length; j++){
							widgets[j].meta = WidgetService.getWidget( widgets[j].id );
						}
					}								
					groups[ list[i].id ] = list[i];
				}
			}
		//,
		//	loader = $http.get( CONST.getServiceUrl('common/groupWidgets') ).success(parseResponse);
		
			parseResponse(groups);
			
			//this.load = function(){
			//	return loader;
			//};
			this.getProfile = function(id){
				return groups[id];
			};
			this.getAll = function(){
				return groups;
			};
			this.set = function(id, group){
				groups[id] = group;
				return this;
			};
			this.getRowLayout = function(profile){
    			var rows = [];
        		if( profile ){
        			for(var i =0; i < profile.widgets.length; i++){
        				if( rows[ profile.widgets[i].row ] )
        					rows[ profile.widgets[i].row ].push(profile.widgets[i]);
        				else
        					rows[ profile.widgets[i].row ] = [profile.widgets[i]];
        			}
        		} 
        		return rows;
        	};
			this.save = function(id){
				if(id){
					//save group and return promise
				}
			};
			this.destroy = function(){
				groups = null;
				return this;
			};
		
	}])
	
});