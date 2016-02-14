'use strict';

define(['angular'], function(angular) {
	
	angular.module('pbwApp2')
	.service('WidgetService', ['$http', 'CONST', function($http, CONST) {
		var widgets = {
    			"revenueTrend": {name: "Revenue Trend", id: "revenueTrend", enabled: true, visible: true, systemDefault: false },
    			"revenueSummary": {name: "Revenue Summary", id: "revenueSummary", row: "", col: "", enabled: true, visible: true, systemDefault: false },
    			"lendingMarket": {name: "Lending Market", id: "lendingMarket", row: "", col: "", enabled: true, visible: true, systemDefault: false },
    			"rateAlerts": {name: "Rate Alerts", id: "rateAlerts", row: "", col: "", enabled: true, visible: true, systemDefault: false },
    			"watchList": {name: "Watch List", id: "watchList", row: "", col: "", enabled: true, visible: true, systemDefault: false },
    			"alerts": {name: "Alerts", id: "alerts", row: "", col: "", enabled: true, visible: true, systemDefault: true },
    			}
		//,
			//loader = $http.get( CONST.getServiceUrl('common/widgets') )
			//			.success(function(resp){
			//				var list = resp.list||resp.data;
			//				for(var i in list){
			//					widgets[ list[i].id ] = list[i];
			//				}
			//			});
		
		//this.load = function(){
		//	return loader;
		//},
		this.getWidget = function(id){
			return widgets[id];
		};
		this.getAll = function(){
			return widgets;
		};
		this.setWidget = function(id, wdgt){
			widgets[id] = wdgt;
			return this;
		};
		this.setAll = function(wdgts){
			widgets = wdgts;
			return this;
		};
		this.destroy = function(){
			widgets = null;
			return this;
		};
		
	}])
	
});