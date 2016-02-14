'use strict';

define([ 'angular'
         ,'core/helpers'
         ]
, function(angular) {
	
	return angular.module('pbwApp2')
	.factory('CommonData', ['$http', 'Helper', '$q',
	    function ($http, Helper, $q) {
		
			var data = {}, factory = {};
			
			function makeCall(type, url, params, headers){
				var def = $q.defer();
				data[url] = def;
				
				$http({
					  method: type,
					  url: Helper.formatUrl(url),
					  params: type=='GET'? params: null,
					  data: type=='POST'? params: null,
					  headers: headers 
					}).success(function(resp){
						def.resolve(resp);
					});
				
				return def.promise;
			}
			
			factory.get = function(url, params, headers){
				if(data[url])
					return data[url].promise;
				else
					return makeCall('GET', url, data, headers);					
			};

			factory.post = function(url, params, headers){
				if(data[url])
					return data[url].promise;
				else
					return makeCall('POST', url, data, headers);
			};
			
			return factory;
	 
	}]);
 
});