"use strict";

define(["angular"], function(angular){
	
	angular.module("ui.constants", [])
	.constant("CONST", {
		"BASE_URL": "",
		"SERVICE_BASE_URL": "service/",
		"USER_ROLES": {
			  "READ": "AUTO_BIDDING",
			  "UPDATE": "AUTO_BIDDING"
		},
		"RESP": {
			"SUCCESS": "SUCCESS",
			"FAILED": "FAILED",
			"ERROR": "ERROR"
		},
		"EVENTS": {
			"PAGE_PARAMS": "PAGE_PARAMS"
		},
		
		getServiceUrl: function(url){
			return this.SERVICE_BASE_URL + url;
		}
	});
	
});