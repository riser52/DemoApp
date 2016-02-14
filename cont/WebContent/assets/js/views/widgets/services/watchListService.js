'use strict';

define(['angular'], function(angular) {
	
	angular.module('pbwApp2')
	.service('WatchListService', ['$http', 'Helper', function($http, Helper) {
		var list = [
		            {
		                "symbol": "GPRO",
		                "astecRate": 7,
		                "equilendRate": 0,
		                "utilization": 68,
		                "alerts": "",
		                "mktRate": 1,
		                "difficulty": "Easy"
		            },
		            {
		                "symbol": "AAA",
		                "astecRate": 3,
		                "equilendRate": 1,
		                "utilization": 52,
		                "alerts": "Y",
		                "mktRate": 1,
		                "difficulty": "Medium"
		            },
		            {
		                "symbol": "ALL",
		                "astecRate": 7,
		                "equilendRate": 8,
		                "utilization": 42,
		                "alerts": "",
		                "mktRate": 0,
		                "difficulty": "Hard"
		            },
		            {
		                "symbol": "VGIT",
		                "astecRate": 5,
		                "equilendRate": 3,
		                "utilization": 93,
		                "alerts": "",
		                "mktRate": 1,
		                "difficulty": "Super"
		            },
		            {
		                "symbol": "IBM",
		                "astecRate": 0,
		                "equilendRate": 6,
		                "utilization": 33,
		                "alerts": "Y",
		                "mktRate": 0,
		                "difficulty": "Easy"
		            },
		            {
		                "symbol": "AOA",
		                "secShortDesc": "ANGOLA KWANZA",
		                "astecRate": 8,
		                "equilendRate": 5,
		                "utilization": 86,
		                "alerts": "",
		                "mktRate": 1,
		                "difficulty": "Medium"
		            },
		            {
		                "symbol": "QVT",
		                "secShortDesc": "ARGENTINA PESO",
		                "astecRate": 7,
		                "equilendRate": 4,
		                "utilization": 37,
		                "alerts": "",
		                "mktRate": 1,
		                "difficulty": "Hard"
		            },
		            {
		                "symbol": "TSLA",
		                "secShortDesc": "AUSTRALIAN SHILLING",
		                "astecRate": 4,
		                "equilendRate": 7,
		                "utilization": 68,
		                "alerts": "Y",
		                "mktRate": 0,
		                "difficulty": "Super"
		            },
		            {
		                "symbol": "DDD",
		                "secShortDesc": "AUSTRALIAN DOLLAR",
		                "astecRate": 6,
		                "equilendRate": 8,
		                "utilization": 80,
		                "alerts": "",
		                "mktRate": 0,
		                "difficulty": "Easy"
		            }
		        ]
		//,
			//loader = $http.get( Helper.getConst().getServiceUrl('alerts/getAlerts/-2') )
		//				.success(function(resp){
		//					list = resp.list||resp.data;
		//				});
		
	//	this.load = function(){
		//	return loader;
		//},
		this.get = function(){
			return list;
		};
		this.destroy = function(){
			list = null;
			return this;
		};
		
	}])
	
});