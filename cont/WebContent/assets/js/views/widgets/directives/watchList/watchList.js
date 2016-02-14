define(['angular', 'views/widgets/services/watchListService', 'core/directives/charts/pie'], function(angular){
	
	var RateAlerts = angular.module('pbwApp2')
	.directive('wgtWatchList', ['$http', 'Helper', 'WatchListService', function($http, Helper, WatchListService){
		
		return Helper.getBaseWidget().extend({
			restrict: 'C',
			scope:{
				demo: '@' 
			},
			cssClass: "col-xs-12 col-sm-12 col-md-12 watchList",
			templateUrl: 'assets/js/views/widgets/directives/watchList/watchList.html',
			link: function($scope, elem, attr){
				
				function getColumnDefs(){
					var columnDef = [
				                	  {
				                		displayName: "Ticker",
				                	    field: "symbol",
				                	    type: 'string',
				                	    headerCellClass: "text-left",
				                	    cellTemplate: '<div class="ui-grid-cell-contents" title="{{row.entity.secShortDesc}}"><i class="fa fa-circle {{row.entity.difficulty}}" style="margin-right: 6px;"></i>{{COL_FIELD}}</div>',
				                	    minWidth: 30
				                	  },
				                	  /*{
				                		displayName: 'Security',
				                	    field: "secShortDesc",
				                	    type: 'string',
				                	    headerCellClass: "text-left",
				                	    minWidth: 70
				                	  },*/			                	  
				                	  {
				                		displayName: "Astec Rate",
				                	    field: "astecRate",
				                	    //width: 130,
				                	    type: 'number',
				                	    cellClass: "text-right",
				                	    headerCellClass: "text-right",
				                	    cellFilter: 'decimal:"":2',
				                	    minWidth: 70
				                	  },  
				                	  {
				                		  displayName: "Eq. Rate",
				                	    field: "equilendRate",
				                	    type: 'number',
				                	    cellClass: "text-right",
				                	    headerCellClass: "text-right",
				                	    cellFilter: 'decimal:"":2',
				                	    minWidth: 50
				                	  },
				                	  {
				                		  displayName: "Utilization",
				                	    field: "utilization",
				                	    minWidth: 75,
				                	    type: 'number',
				                	    cellClass: "text-right",
				                	    headerCellClass: "text-right",
				                	    cellFilter: 'decimal:"":2',
				                	    cellTemplate: '<div class="ui-grid-cell-contents" ng-init="row.entity.pie=[row.entity.utilization, (100-row.entity.utilization)]; row.entity.sliceColors=[\'#109618\',\'#ff9900\']" ng-click="grid.appScope.log(col, row, grid)">'
				                	    			+'<span jqsparkline type="pie" ng-if="row.entity.pie" data-model="row.entity.pie" height="16" offset="-90" slice-colors="row.entity.sliceColors" width="16"></span> {{COL_FIELD}}%</div>'
				                	    /*cellTemplate: '<div class="ui-grid-cell-contents">'
				                	    	+'<div style="position:relative; width:100%; height:100%;">'
					                	        +'<div style="position:absolute; left:0; right:25px; top:3px; bottom:3px;">'
								                	+'<div ng-repeat="x in ::[0,1,2,3,4,5,6,7,8,9]" style="float:left; width:10%; height:100%; padding:0 1px">'
					                	                +'<div style="height: 100%; width: 100%;" ng-class="{\'greenbg\': row.entity.utilization/10>=$index && $index<3, \'orangebg\': row.entity.utilization/10>=$index && $index>=3 && $index<7, \'redbg\': row.entity.utilization/10>=$index && $index>=7, \'graybg\': row.entity.utilization/10<$index}"></div>'
					                	            +'</div>'
					                	        +'</div>'
					                	        +'<div style="position:absolute; right:0; top:0; bottom:0; width:25px;">{{COL_FIELD}}%</div>'
				                	    	+'</div>'*/
				                	    /*cellTemplate: '<div class="ui-grid-cell-contents"><svg width="18" height="18">'
				                	        +'<g transform="translate(180,180)">'
				                	        +'<path d="M0,-180A..." fill="#393b79"></path>'
				                	        +'<path d="M105.801..." fill="#5254a3"></path>'
				                	        +'<path d="M171.190..." fill="#6b6ecf"></path>'
				                	        +'<path d="M-105.80..." fill="#9c9ede"></path>'
				                	        +'</g>'
				                	        +'</svg></div>'*/
				                	  },
				                	  {
				                		  displayName: "Mkt. Rate",
				                	    field: "mktRate",
				                	    //width: 130,
				                	    type: 'number',
				                	    cellClass: "text-right",
				                	    headerCellClass: "text-right",
				                	    cellFilter: 'decimal:"":2',
				                	    minWidth: 65
				                	  },
				                	  {
				                		  displayName: "Action",
				                		//width: 80,
				                		  minWidth: 210,
				                		  enableSorting: false,
				                		  type: 'string',
					                	    cellClass: "text-right",
					                	    headerCellClass: "text-center",
				                		field: "action",
				                		cellTemplate: '<div class="ui-grid-cell-contents">'
	                									+'<a href="javascript:;" ng-if="row.entity.alerts == \'Y\'" class=""  style="margin-right:10px" title="View Alerts">View Alerts</a>'
				                						+'<a title="Add alert" href="javascript:;" style="margin-right:10px">Add Alert</a>'
														+'<a href="javascript:;" class="btn-dismiss" title="Remove from watch list">Remove</a>'
				                						+'&nbsp;&nbsp;</div>'

									  }

				                	];
					
					return angular.copy(columnDef);
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
							enableSorting: true,
						    
							enableHorizontalScrollbar: false,
					        enableInfiniteScroll: true,

					        onRegisterApi: function(gridApi){
					        	$scope.gridApi = gridApi;
					        },
					        columnDefs: getColumnDefs()
					};
					
					return angular.copy(gridOptions);
				}
				
				$scope.activeList = WatchListService.get();
				
				$scope.gridOptions = getGridOptions('activeList');
				
				$scope.log = function(a,b,c){
					console.log(a);
					console.log(b);
					console.log(c);
				}
			}
		});
		
	}]);
	
	return RateAlerts;
})