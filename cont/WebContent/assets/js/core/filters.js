'use strict';

define([ 'angular', 'core/helpers'], function(angular) {
	
	return angular.module('pbwApp2')
	.filter('decimal', ['Helper', function(Helper) {
		return function(amount, symbol, decimal){
			return Helper.formatDecimal(amount, symbol, decimal);
		}
	}])
	.filter('notationalDecimal', ['Helper', function(Helper) {
		return function(amount, symbol, decimal){
			return Helper.formatNotationalDecimal(amount, symbol, decimal);
		}
	}])
	.filter('autoDecimal', function($filter) {
		return function(amount, symbol){
			if (!symbol) symbol="";
			var dp = 0;
			if (Math.abs(amount) < 100) dp=1;
			if (Math.abs(amount) < 10) dp=2;
			return $filter('number')(amount,dp)+symbol;
		}
	});
});
