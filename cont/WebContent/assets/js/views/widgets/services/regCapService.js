'use strict';

define(['angular'], function(angular) {
	
	angular.module('pbwApp2')
	.service('RegCapService', ['$http', 'Helper', function($http, Helper) {
		var list = [
		            
		        ]

		this.get = function(){
			return list;
		};
		this.destroy = function(){
			list = null;
			return this;
		};
		
	}])
	
});