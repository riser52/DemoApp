'use strict';

define([ 'angular'
         ,'constants']
,function(angular) {
	
	var app = angular.module('pbwApp2');
	
 	var config = app.config([
 	                         '$httpProvider'
 	                         ,'informProvider'
 	                         ,'$controllerProvider'
 	                         ,'$provide'
 	                         ,'$compileProvider'
 	                         ,'$filterProvider'
 	                         ,'$tooltipProvider'
 	                         ,'CONST'
		         ,function (
		        		 $httpProvider
		        		 ,informProvider
		        		 ,$controllerProvider
		        		 ,$provide
		        		 ,$compileProvider
		        		 ,$filterProvider
		        		 ,$tooltipProvider
		        		 ,CONST) {

	 		$tooltipProvider.setTriggers({
		        'show': 'hide'
		    });
	 		
	 		//This can result in significant performance improvement for bigger applications
	 		$httpProvider.useApplyAsync(true);
	 		//Common header for all requests, this is needed when no access the service will return json response 
	 		$httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

	 		//Inform message settings
	 		informProvider.defaults({
	 		      /* default time to live for each notification */
	 		      ttl: 4000,
	 		      /* default type of notification */
	 		      type: 'danger',
	 		      html: true
	 		    });
	 		
			app._controller = app.controller;
            app._service = app.service;
            app._factory = app.factory;
            app._value = app.value;
            app._directive = app.directive;
            app._filter = app.filter;
            
         // Provider-based controller.
            app.controller = function( name, constructor ) {
                $controllerProvider.register( name, constructor );
                return( this );
            };
            // Provider-based service.
            app.service = function( name, constructor ) {
                $provide.service( name, constructor );
                return( this );
            };
            // Provider-based factory.
            app.factory = function( name, factory ) {
                $provide.factory( name, factory );
                return( this );
            };
            // Provider-based value.
            app.value = function( name, value ) {
                $provide.value( name, value );
                return( this );
            };
            // Provider-based directive.
            app.directive = function( name, factory ) {
                $compileProvider.directive( name, factory );
                return( this );
            };
            // Provider-based filter.
            app.filter = function( name, factory ) {
            	$filterProvider.register( name, factory );
                return( this );
            };
            

	
		}]) //End of config definition	
  
		return config;
});