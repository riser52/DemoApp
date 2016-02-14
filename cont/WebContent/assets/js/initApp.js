// Set the require.js configuration for your application.
'use strict';

define([
        'socksjs', 
        'stomp', 
        'uiBootstrap', 
        'angular', 
        'ngAnimate',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngDraggable',
        'uiGrid',
        'agGrid',
        'angular-range-slider',
        'uiLogger',
        'errorHandler',
        'angularInform',
        'gridTemplates',
        'templates'
    ],
    
    function(SocksJs 
    		,Stomp
    		,uiBootstrap
    		,angular
    		,ngAnimate
    		,ngResource
    		,ngSanitize
    		,ngRoute
    		,ngDraggable
    		,uiGrid
    		,agGrid
    		,slider
    		,uiLogger
    		,errorHandler
    		,angularInform
    		,gridTemplates
    		,templates
    		){
		
		'use strict';
		
	    angular.element(document).ready(function() {
			// Choose to inject either HashBangs or HTML5 mode, your preference.
			angular.module('pbwApp2', ['ngRoute'
			                              ,'ui.bootstrap'
			                              ,'ngSanitize'
			                              ,'ngAnimate',
			                              ,'angularRangeSlider'
			                              ,'templates'
			                              ,'inform'
			                              ,'ui.grid'
			                              ,'agGrid'
			                              ,'ngDraggable'
			                              ,'ui.constants'
			                              ,'error.util'
			                              ,'http.error.util'
			                              ,'ui.logger'
			                              ]);
			require(['core/initCore'], function(){
				angular.bootstrap(document, ['pbwApp2']);
			});
	    });
});