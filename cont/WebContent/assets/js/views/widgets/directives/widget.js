define(['angular'], function(angular){
	
	angular.module('pbwApp2')	
	.directive('widget', ['$compile', '$interpolate', '$timeout', 'Helper', function($compile, $interpolate, $timeout, Helper) {
	    return {
	    	restrict: 'E',
	        template: '',
	        scope: {
	        	meta: '=',
	        	index: '@',
	        	rowIndex: '@'
	        },
	        link: function($scope, element, attrs) {
	        	
	        	$scope.init = function(attrs){
	        		//console.log(attrs);
	        	};
	        	
	        	$timeout(function(){
	        		if(attrs.layout=='true')
		        		element.replaceWith($compile('<div ng-drag="true" ng-drag-data="meta" drag-allow-transform="true" draggable="false" ng-drop="true" ng-drop-success="$parent.onReOrder(index, $data, $event)" ng-class="{\'in\': init'+ attrs.index +'===true }" ng-init="init'+ attrs.index +'=true;" class="' + attrs.id + ' widget widget-name" title="'+ attrs.title +'" data-layout="'+ attrs.layout +'" ng-init="init('+ angular.toJson(attrs).replace(/"/gim, "'") +')"></div>')($scope));
		        	else
		        		element.replaceWith($compile('<div class="fade ' + attrs.id + ' widget" ng-class="{\'in\': init'+ attrs.index +'===true }" ng-init="init'+ attrs.index +'=true; init('+ angular.toJson(attrs).replace(/"/gim, "'") +');"></div>')($scope));
	        	}, 10);
	        	/*var name = attrs.id.substring(0,1).toUpperCase() + attrs.id.substring(1);
	        	if(attrs.layout=='true')
	        		element.replaceWith($compile('<div ng-drag="true" ng-drag-data="meta" drag-allow-transform="true" draggable="false"
	        				+' ng-drop="true" ng-drop-success="$parent.onReOrder(index, $data, $event)" '
	        				+' ng-controller="Wgt'+ name +'Ctrl" '
	        				+' ng-init="init('+ angular.toJson(attrs).replace(/"/gim, "'") +')" '
	        				+' class="widget widget-name" title="'+ attrs.title +'" ></div>')($scope));
	        	else
	        		element.replaceWith($compile('<div class="widget"'
	        				+' ng-controller="Wgt'+ name +'Ctrl"'
	        				+' ng-include="'+ Helper.getWidgetTemplateUrl(attrs.id +'/'+ attrs.id +'.html') 
	        				+' ng-init="init('+ angular.toJson(attrs).replace(/"/gim, "'") +')" title="'+ attrs.title +'" ></div>')($scope));
	        	*/
	        }
	    };
	}]);

});