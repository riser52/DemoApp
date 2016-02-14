define(['angular', 'views/widgets/services/rateAlertsService'], function(angular){
	
	var RateAlerts = angular.module('pbwApp2')
	.directive('wgtRateAlerts', ['$http', 'Helper', 'RateAlertsService', function($http, Helper, RateAlertsService){
		
		return Helper.getBaseWidget().extend({
			restrict: 'C',
			scope:{
				title: '@'
			},
			cssClass: "col-xs-12 col-sm-12 col-md-12 rateAlerts",
			templateUrl: 'assets/js/views/widgets/directives/rateAlerts/rateAlerts.html',
			link: function($scope, elem, attr){
				
				$scope.updateAllowed = true; //Helper.getUser().checkUpdate("ratealerts"); 
					
				function getColumnDefs(){
					var columnDef = [
				                	  {
				                		displayName: "Client",
				                	    field: "clientCode",
				                	    type: 'string',
				                	    headerCellClass: "text-left",
				                	    minWidth: 60
				                	  },
				                	  {
				                		displayName: 'Security',
				                	    field: "security",
				                	    type: 'string',
				                	    headerCellClass: "text-left",
				                	    minWidth: 65,
				                	    cellTemplate: '<div class="ui-grid-cell-contents"><i class="fa fa-circle {{row.entity.difficulty}}" style="margin-right: 6px;"></i>{{COL_FIELD}}</div>'
				                	  },				                	  
				                	  {
				                		displayName: "Curr. Rate",
				                	    field: "currentRate",
				                	    minWidth: 70,
				                	    type: 'number',
				                	    cellClass: "text-right bold text-primary",
				                	    headerCellClass: "text-right",
				                	    cellFilter: 'decimal:"":2',
				                	    cellTemplate: '<div class="ui-grid-cell-contents"><div ng-if="grid.appScope.updateAllowed===true" class="new-rate editable" tabindex="0" autocapitalization="off" autocorrection="off" style="padding: 0;" autocomplete="off">{{COL_FIELD CUSTOM_FILTERS}}</div><div ng-if="!grid.appScope.updateAllowed">{{COL_FIELD CUSTOM_FILTERS}}</div></div>'
				                	  },  
				                	  {
				                		displayName: "Sugg. Rate",
				                	    field: "suggestedRate",
				                	    minWidth: 90,
				                	    type: 'number',
				                	    cellClass: "text-right",
				                	    headerCellClass: "text-right",
				                	    cellFilter: 'decimal:"":2',
				                	    cellTemplate: '<div class="ui-grid-cell-contents"><span ng-if="!grid.appScope.updateAllowed" class="fa fa-arrow-left rate-change-arrow text-primary" title="Set to this rate"></span> {{COL_FIELD CUSTOM_FILTERS}}</div>'
				                	  },
				                	  {
				                		displayName: "Astec Rate",
				                	    field: "suggestedRate",
				                	    minWidth: 80,
				                	    type: 'number',
				                	    cellClass: "text-right",
				                	    headerCellClass: "text-right",
				                	    cellFilter: 'decimal:"":2',
				                	    cellTemplate: '<div class="ui-grid-cell-contents"><span ng-if="!grid.appScope.updateAllowed" class="fa fa-arrow-left rate-change-arrow text-primary" title="Set to this rate"></span> {{COL_FIELD CUSTOM_FILTERS}}</div>'
				                	  },
				                	  {
				                		displayName: "Rev. Delta",
				                	    field: "dailyRevDelta",
				                	    minWidth: 85,
				                	    type: 'number',
				                	    cellClass: "text-right",
				                	    headerCellClass: "text-right",
				                	    cellFilter: 'decimal:"":2',
				                	    cellTemplate: '<div class="ui-grid-cell-contents" ng-class="{\'text-danger\': row.entity.dailyRevDelta < 0, \'text-success\': row.entity.dailyRevDelta >= 0}">{{COL_FIELD CUSTOM_FILTERS}}</div>'
				                	  },
				                	  {
				                		  displayName: "Action",
				                		  minWidth: 175,
				                		  enableSorting: false,
					                	  headerCellClass: "text-center",
					                	  cellClass: "text-center",
				                		  type: 'string',
				                		  field: "action",
				                		  cellTemplate: '<div class="ui-grid-cell-contents">'
				                						+'<a class="" style="margin-right: 10px;" title="Click to see reason for alert" data-trigger="hover" href="javascript:;">Reason</a>'
				                						+'<span ng-if="row.entity.active==\'Y\' && grid.appScope.updateAllowed === true">'
														+'<span class="dropdown"><a data-toggle="dropdown" class="dropdown-toogle" title="Snooze" style="margin-right: 10px;" href="javascript:;">Snooze</a></span>'
														+'<a href="javascript:;" class="btn-dismiss" title="Dismiss">Dismiss</a>'
				                						+'</span>'
				                						+'</div>'

									  }

				                	];
					
					return angular.copy(columnDef);
				}
				
				function createRowData(){
					var list = RateAlertsService.get();
					for(var i=0; i < list.length; i++){
						if(list[i].dismissed == 'Y')
							$scope.dismissedList.push(list[i]);
						else if(list[i].snoozed == 'Y')
							$scope.snoozedList.push(list[i]);
						else if(list[i].active == 'Y')
							$scope.activeList.push(list[i]);
					}
				}
				
				function getGridOptions(data){
					
					var gridOptions = {
							//rowTemplate: '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader, \'no-bottom-border\': row.treeLevel<2 }" ui-grid-cell tooltip-placement="top" tooltip-template="\'assets/templates/views/history/details-tooltips.html\'" tooltip-append-to-body="true" tooltip-enable="{{col.colDef.customTooltip}}"></div>',
					        data: data,
					        rowHeight: 30,
					        minRowsToShow: 50,
					        showGridFooter: false,
					        columnFooterHeight: 40,
					        enableColumnResize: false,
					        showColumnMenu: false,
					        
					        showGroupPanel: true,
					        groupingShowCounts: false,
					        
					        enableColumnMenus: false,
					        enableHighlighting: true,
					        enableCellEdit: false,
					        showSelectionCheckbox: false,
					        selectWithCheckboxOnly: false,
					        multiSelect: false,
					        enableRowSelection: false,
					        enableRowHeaderSelection: false,
					        enableFullRowSelection: false,
					        
					        rowEditWaitInterval: -1,

							showFilter: false,
					        useExternalFiltering: true,
					        
					        enablePaging: false,

						    useExternalSorting: false,
							enableSorting: false,
						    
							enableHorizontalScrollbar: false,
					        enableInfiniteScroll: true,

					        onRegisterApi: function(gridApi){
					        	$scope.gridApi = gridApi;
					        },
					        columnDefs: getColumnDefs()
					};
					
					return angular.copy(gridOptions);
				}
				
				$scope.activeList = [];
				$scope.snoozedList = [];
				$scope.dismissedList = [];
				
				$scope.alertMe = function(id){
					if(id == 0)
						$scope.activeGridOptions = getGridOptions('activeList');
					else if( id==1)
						$scope.snoozedGridOptions = getGridOptions('snoozedList');
					else if( id ===2 )
						$scope.dismissedGridOptions = getGridOptions('dismissedList');
				}

				createRowData();
				$scope.alertMe(0);
				
				$scope.log = function(obj){
					console.log(obj);
				}
			}
		});
		
	}]);
	
	return RateAlerts;
})