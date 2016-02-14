'use strict';

define(['angular'], function(angular) {
	
	angular.module('pbwApp2')
	.directive('multisearch', ['$compile','$http','$templateCache', 'CONST', 
	    function($compile, $http, $templateCache, CONST){
		
		return {
			restrict: 'A',
			templateUrl: 'assets/js/core/directives/multisearch/multisearch.html',
			scope:{
				allOptions: '=',
				minDisplayOption: '@',
				buttonDisplayText: '@',
				buttonClass: '@',
				outsideClick: '@',
				dropdownWidth: '@',
				toggleDropdown: '&'
			},
			link: function(scope, element, attrs){
				var watch = null;
				scope.model=[];
				scope.selectedCount = 0;
				scope.selectAllChk = false;
				scope.outsideClick = scope.outsideClick||false;
				scope.minDisplayOption = parseInt(attrs.minDisplayOption||0);
				scope.buttonDisplayText = scope.buttonDisplayText||'SELECT';
				scope.dropdownWidth = scope.dropdownWidth||'auto';
				
				watch = scope.$watch('allOptions', function(newOpt, oldOpt){
					scope.model=[];
					scope.selectedCount = 0;
					scope.options = newOpt;
				});
				
				scope.showHideDropdown = function(open){
					scope.model=[];
					angular.forEach(scope.options, function(opt){
						if(opt.selected===true)
							scope.model.push(opt.value);
					});
					if(scope.toggleDropdown)
						scope.toggleDropdown({open: open, model: scope.model});
				};
				
				scope.checkSelected = function(opt){
					if( opt.selected===true ){
						scope.selectedCount++;
						scope.model.push(opt.value);
						if(scope.toggleDropdown)
							scope.toggleDropdown({open: true, model: scope.model});
					}
					scope.selectAllChk = (scope.selectedCount == (angular.isArray(scope.options)? scope.options.length: Object.keys(scope.options).length ));
				};
				
				scope.toggleSelectAll = function(){
					//scope.selectAllChk = !!!scope.selectAllChk;
					scope.selectedCount = scope.selectAllChk===true? scope.options.length : 0;
					angular.forEach(scope.options, function(opt){
						opt.selected = scope.selectAllChk;
					});
				};

				scope.toggleSelect = function(opt){
					if(opt.selected===false)
						scope.selectedCount--;
					else if(opt.selected===true)
						scope.selectedCount++;
					scope.selectAllChk = (scope.selectedCount == (angular.isArray(scope.options)? scope.options.length: Object.keys(scope.options).length ));
				};
				
	        	scope.buttonTitle = function() {
	        		var selected = '';
	        		if(scope.options){
		        		for(var i=0; i< scope.options.length; i++){
		        			if(scope.options[i].selected===true)
		        				selected += scope.options[i].label + ', ';
		        		};
	        			return selected.substr(0, selected.length - 2);
	        		} else {
	        			return selected;
	        		}
	        	};
	        	
	        	scope.buttonText = function() {
	        		
	        		if (scope.selectedCount == 0) {
	        			return "None";
	        		}
	        		else if (scope.selectedCount > scope.minDisplayOption) {
	        			return '(' + scope.selectedCount + ')';
	        		}
	        		else {
	        			return scope.buttonTitle();
	        		}
	        	};
	        	
	        	scope.$on('$destroy', function(){
	        		watch();
	        	});
	        	
			}//End of link
		}//end of return
	}]);
	
});