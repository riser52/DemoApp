'use strict';

define(['angular'], function(angular) {
	
	angular.module('pbwApp2')
	.factory('UserInfo', ['$http','$rootScope', function($http, $rootScope) {
		var user = null; //{"data":{"lastName":"Gupta","febsecid":"a532096","pbWorkstation":"UPDATE","firstName":"Rajkumar"},"message":null,"status":200};
		
		return {
			
			isLoggedIn: function () {
				return !!this.get();
			},
			
			get: function(){
				return user;
			},
			
			set: function(usr){
				user = usr;
				$rootScope.firstName = user.firstName;
				$rootScope.lastName = user.lastName;
				return this;
			},

			checkRead: function(module){
				return this.isLoggedIn()===false? false : (this.get()[module] == 'READ'||this.get()[module] == 'UPDATE');
			},
		
			checkUpdate: function(module){
				return this.isLoggedIn()===false? false : this.get()[module] == 'UPDATE';
			},

			destroy: function(){
				user = null;
			}
		};
		
	}])
	
});