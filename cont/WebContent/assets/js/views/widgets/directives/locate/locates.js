define(['angular', 'views/widgets/services/locatesService'], function(angular){
	
	var Locates = angular.module('pbwApp2')
	.directive('wgtLocates', ['$http', 'Helper', 'LocatesService', function($http, Helper, LocatesService){
		
		return Helper.getBaseWidget().extend({
			restrict: 'C',
			cssClass: "col-xs-12 col-sm-12 col-md-12 locates",
			templateUrl: 'assets/js/views/widgets/directives/locates/locates.html',
			link: function($scope, elem, attr){
				
				$scope.updateAllowed = Helper.getUser().checkUpdate("locates"); 
					
				function getColumnDefs(){
					var columnDef = [
				                	  {
				                		displayName: "Time",
				                	    field: "requestTime",
				                	    type: 'string',
				                	    headerCellClass: "text-left",
				                	    minWidth: 60
				                	  },
				                	  {
				                		displayName: "Client",
				                	    field: "clientCode",
				                	    type: 'string',
				                	    headerCellClass: "text-left",
				                	    minWidth: 60
				                	  },{
				                		displayName: "Account",
				                	    field: "accountNumber",
				                	    type: 'string',
				                	    headerCellClass: "text-left",
				                	    minWidth: 60
				                	  },
				                	  {
				                		displayName: 'Symbol',
				                	    field: "symbol",
				                	    type: 'string',
				                	    headerCellClass: "text-left",
				                	    minWidth: 65,
				                	    cellTemplate: '<div class="ui-grid-cell-contents"><i class="fa fa-circle {{row.entity.difficulty}}" style="margin-right: 6px;"></i>{{COL_FIELD}}</div>'
				                	  },				                	  
				                	  {
				                		displayName: 'Req Qty',
				                	    field: "requestQty",
				                	    type: 'number',
				                	    cellFilter: 'decimal:"":0',
				                	    cellClass: 'text-right',
				                	    headerCellClass: "text-right",
				                	    minWidth: 65
				                	  },
				                	  {
				                		displayName: 'Loc Qty',
				                	    field: "locateQty",
				                	    type: 'number',
				                	    cellFilter: 'decimal:"":0',
				                	    cellClass: 'text-right',
				                	    headerCellClass: "text-right",
				                	    minWidth: 65
				                	  },
				                	  {
				                		displayName: 'Remaining Qty',
				                	    field: "remainingQty",
				                	    type: 'number',
				                	    cellFilter: 'decimal:"":0',
				                	    cellClass: 'text-right',
				                	    headerCellClass: "text-right",
				                	    minWidth: 65
				                	  },
				                	  {
				                		displayName: 'Add Supply',
				                	    field: "supplyQty",
				                	    type: 'number',
				                	    cellClass: 'text-right',
				                	    headerCellClass: "text-right",
				                	    minWidth: 65,
				                	    cellTemplate: '<div class="ui-grid-cell-contents" ng-init="row.entity.supplyQtyNew=row.entity.supplyQty"><input ng-blur="grid.appScope.updateSupply(row)" type="text" ng-model="row.entity.supplyQtyNew" /></div>'
				                	  },
				                	  {
				                		displayName: "Rate",
				                	    field: "rate",
				                	    minWidth: 50,
				                	    type: 'number',
				                	    cellClass: "text-right",
				                	    headerCellClass: "text-right",
				                	    cellFilter: 'decimal:"":2'
				                	  },  
				                	  {
				                		displayName: "Fee",
				                	    field: "fee",
				                	    minWidth: 50,
				                	    type: 'number',
				                	    cellClass: "text-right",
				                	    headerCellClass: "text-right",
				                	    cellFilter: 'decimal:"":2'
				                	  },
				                	  {
				                		displayName: "Comments",
				                	    field: "hasComments",
				                	    minWidth: 100,
				                	    cellTemplate: '<div class="ui-grid-cell-contents"><span class="fa fa-comments" ng-class="{\'text-primary\': row.entity.hasComments}"></span> <input ng-blur="grid.appScope.updateComments(row)" type="text" ng-model="row.entity.comments" /></div>'
				                	  },
				                	  {
				                		  displayName: "Action",
				                		  field: 'action',
				                		  minWidth: 80,
					                	  headerCellClass: "text-center",
					                	  cellClass: "text-center",
				                		  type: 'string',
				                		  cellTemplate: '<div class="ui-grid-cell-contents" ng-init="row.entity.newAction=row.entity.action">'
				                			  			+'<select ng-model="row.entity.newAction" ng-change="grid.appScope.updateAction(row)">'
				                			  			+'<option value="approve">Approve</option>'
				                			  			+'<option value="reject">Reject</option>'
				                			  			+'<option value="cancel">Cancel</option>'
				                			  			+'</select>'
				                						+'</div>'

									  }

				                	];
					
					return angular.copy(columnDef);
				}
				
				function createRowData(){
					var list = LocatesService.get();
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
	
	return Locates;
})