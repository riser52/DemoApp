// Set the require.js configuration for your application.
'use strict';

requirejs.config({
    // Initialize the application with the main application file.
    baseUrl: "assets/js",
    urlArgs: 'v=BUILD_NUMBER',
    catchError: true,

    deps: ['initApp'],
    
	paths : {

		angular 						: 'vendor/angular-1.4.7/angular.min',
		ngAnimate						: 'vendor/angular-1.4.7/angular-animate.min',
		ngResource						: 'vendor/angular-1.4.7/angular-resource.min',
		ngSanitize 						: 'vendor/angular-1.4.7/angular-sanitize.min',
		ngRoute 						: 'vendor/angular-1.4.7/angular-route.min',
		uiBootstrap 					: 'vendor/angular-bootstrap/ui-bootstrap-tpls-0.14.3.min',
		socksjs 						: 'vendor/socks/sockjs-0.3.4',
		stomp		 					: 'vendor/socks/stomp',
		d3								: 'vendor/charts/d3/d3.min',
		agGrid	 						: 'vendor/ag-grid-2.3.5/ag-grid.min',
		uiGrid	 						: 'vendor/ui-grid/ui-grid.min',
		angularInform					: 'vendor/plugins/angular-inform/angular-inform.min',
		ngDraggable						: 'vendor/plugins/ngDraggable/ngDraggable',

        'angular-range-slider'			: 'vendor/plugins/angular-range-slider/angular-range-slider.min',

        constants						: 'constants',
        templates						: 'templates',
        gridTemplates					: 'grid-templates',
        uiLogger						: 'logger/uiLogger',
        errorHandler					: 'logger/errorHandler',
        text 							: 'vendor/require/text',
        highcharts						: 'vendor/charts/highcharts/highstock',
        highchartsMore					: 'vendor/charts/highcharts/highcharts-more',
        solidGauge						: 'vendor/charts/highcharts/solid-gauge',
        jquery							: 'vendor/jquery/jquery.min',
		jqSparkline						: 'vendor/charts/sparkline/jquery.sparkline.min'
		
	},

	shim : {
		angular:{
			deps: ['jquery'],
			exports: 'angular'
		},
		ngAnimate: {
			deps: ['angular'],
			exports: 'ngAnimate'
		},
		angularInform: ['angular'],
		agGrid: ['angular','ngAnimate','ngResource'],
		uiGrid: ['angular','ngAnimate','ngResource'],
		gridTemplates: ['uiGrid'],
		constants: ['angular'],
		solidGauge: ['highchartsMore'],
		ngResource: {
			deps: ['angular'],
			exports: 'ngResource'
		},
		ngSanitize: {
			deps: ['angular'],
			exports: 'ngSanitize'
		},
		ngDraggable: ['angular'],
		ngRoute: {
			deps: ['angular']
		},
		uiBootstrap: {
			deps: ['angular']
		},
		ngDragabble: {
			deps: ['angular'],
			exports: 'ngDraggable'
		},
		d3: {
			exports: 'd3'
		},
		highchartsMore: ['highcharts'],
		
		jqSparkline: ['jquery'],
		highcharts:{
			exports: 'Highcharts'
		},
		templates: ['angular'],
		'angular-range-slider': ['angular']
	}
});

//window.name = "NG_DEFER_BOOTSTRAP!";

