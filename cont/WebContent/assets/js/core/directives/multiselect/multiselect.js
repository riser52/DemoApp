'use strict';

define(['angular'], function(angular) {
	
	angular.module('pbwApp2')
	.directive('multiselect', ['$compile','$http','$templateCache', 'CONST', 
	    function($compile, $http, $templateCache, CONST){
		
		return {
			restrict: 'A',
			template: '<div class="dropdown multiselect" uib-dropdown on-toggle="toggled(open)" ng-include="template"></div>',
			scope:{
				template: '@',
				rowTemplate: '@',
				idField: '@',
				captionField: '@',
				update: '@',
				model: '=',
				options: '=',
				showSelectAll: '@',
				placeholder: '@',
				buttonClass: '@',
				toggleDropdown: '&'
			},
			link: function(scope, element, attrs){
				var watch = null;
				
				scope.template = scope.template || "assets/js/core/directives/multiselect/multiselect-button.html";
				scope.rowTemplate = scope.rowTemplate || "assets/js/core/directives/multiselect/multiselect-item.html";
				
				scope.selectedCount = 0;
				scope.idField = scope.idField||'id';
				scope.captionField = scope.captionField||'name';
				scope.showSelectAll = (scope.showSelectAll=='true');
				scope.selectAllChk = false; 
				scope.minDisplayOption = parseInt(attrs.minDisplayOption||0);
				scope.placeholder = scope.placeholder||"Selected";

				scope.updateList = function(bInit){
					var selected = {};
					for(var i=0; i < scope.model.length; i++){
						if(scope.idField && scope.model[i][ scope.idField ])
							selected[ scope.model[i][ scope.idField ] ] = scope.model[i];
					}
					scope.model.splice(0, scope.model.length);
					scope.selectedCount = 0;
					for(var i=0; i < scope.list.length; i++){
						if(scope.list[i].selected === true || scope.selectAllChk===true
								|| (bInit===true && selected[ scope.list[i][scope.idField] ])
								|| (scope.list[i].selected === true && selected[ scope.list[i][scope.idField] ]) 
										 ){
							scope.list[i].selected = true;
							scope.selectedCount++;
							scope.model.push( scope.list[i] );
						}
					}
					console.log(scope.selectedCount);
					console.log(scope.model);
					if(scope.selectedCount == scope.list.length){
						scope.selectAllChk = true;
					}
					
					scope.optionsText = scope.buttonText();
				}; 
				
				watch = scope.$watch('update', function(newFlg, oldFlg){
					if(newFlg == 'true'){
						scope.list = angular.copy(scope.options);
						scope.updateList();
					}
				});
				
				scope.toggled = function(open){
					if(scope.toggleDropdown){
						scope.toggleDropdown({open: open});
					}
				};
				
				scope.toggleSelectAll = function(){
					scope.selectAllChk = !!scope.selectAllChk;
					scope.model.splice(0, scope.model.length);
					scope.updateList();
				};
				
                scope.setSelected = function($event, opt){
                	$event.stopPropagation();
                	$event.preventDefault();
                	opt.selected = !!!opt.selected;
                	if(opt.selected===false)
                		scope.selectAllChk = false;
                	scope.updateList();
                };

	        	scope.buttonTitle = function() {
	        		var selected = '';
	        		if(scope.model){
		        		for(var i=0; i< scope.model.length; i++){
	        				selected += scope.model[i][scope.captionField] + ', ';
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
	        	
	        	scope.list = angular.copy(scope.options);
	        	scope.updateList(true);
	        	
			}//End of link
		};//end of return
	}]);
	
});