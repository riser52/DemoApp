'use strict';

define(['angular', 'constants'], function(angular, constants) {
	
	angular.module('ui.logger', ['ui.constants'])
	.factory('logger', ['$filter' ,'$log', 'CONST' ,function($filter, $log, CONST) {
		var queue = [],
			process = function(){
				if(queue.length){
					var msg = queue.splice(0, queue.length);
					log(msg, 'info');
				}
			},
			log = function(msg, type){
				return;
				var url = (type=="error"? CONST.getServiceUrl('ui/logError') : CONST.getServiceUrl('ui/logInfo'));
				var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
				xmlhttp.open("POST", url);
				xmlhttp.setRequestHeader("Content-Type", "application/json");
				xmlhttp.send(angular.toJson(msg));
			};

		setInterval(process, 5000);
		
		return {
			debug: function(msg){
				var json = $filter('date')(new Date(), 'y-MM-d HH:mm:ss', 'EST') + "::" + angular.toJson({message: msg});
				$log.debug(msg);//console.logging
				queue.push(json);
				msg = json = null;
				return this;
			},
		
			error: function(action, url, req, resp){
				var msg = {action: action, url: url, request: req, response: resp},
					json = $filter('date')(new Date(), 'y-MM-d HH:mm:ss', 'EST') + "::" + angular.toJson({message: msg});
				$log.debug(msg);//console.logging
				log(json, 'error');
				msg = json = null;
				return this;
			},
			
			console: function(msg){
				$log.info(msg);
				return this;
			}
		};
		
	}])
	
});