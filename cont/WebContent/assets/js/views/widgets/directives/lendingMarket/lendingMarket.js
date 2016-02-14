define(['angular', 'views/widgets/services/lendingMarketService'], function(angular){
	
	var lendingMarket = angular.module('pbwApp2')
	.directive('wgtLendingMarket', ['$http', 'Helper', 'LendingMarketService', function($http, Helper, LendingMarketService){
		

		return Helper.getBaseWidget().extend({
			restrict: 'C',
			scope:{
				demo: '@' 
			},
			cssClass: "col-xs-12 lendingMarket",
			templateUrl: 'assets/js/views/widgets/directives/lendingMarket/lendingMarket.html',

			link: function(scope, elem, attr){

                scope.Math = window.Math;

                function getColumnDefs(){
                    var columnDef = [
                        {
                            displayName: "Ticker",
                            field: "symbol",
                            type: 'string',
                            width: 60,
                            cellClass: 'text-left',
                            headerCellClass: 'text-left'
                        },
/*                        {
                            displayName: "On Loan",
                            field: "onLoan",
                            type: 'number',
                           minWidth: 65,
                            cellFilter: 'number:0',
                            cellClass: 'text-right',
                            headerCellClass: 'text-right'
                        },*/
                        {
                            displayName: "On Loan",
                            field: "percentChange",
                            headerCellClass: 'text-center',
                            cellTemplate: '<div class="ui-grid-cell-contents text-right">'
                                +'{{row.entity.onLoan | number:0}}'
                            +'<span ng-class="row.entity.delta<0?\'red-arrow\':\'green-arrow\'">'
                            +'<span class="glyphicon" ng-class="row.entity.delta<0?\'glyphicon-arrow-down\':\'glyphicon-arrow-up\'" style="margin-right:2px;margin-left:2px;"></span>'
                            //+'{{grid.appScope.Math.abs(row.entity.delta) | number:0}}'
                            +'{{grid.appScope.Math.abs(row.entity.percentChange) | autoDecimal:"%"}}'
                            +'</span>'
                            +'</div>'
                        }
                    ];

                    return angular.copy(columnDef);
                }

                function getGridOptions(data){

                    var gridOptions = {
                        data: data,
                        rowHeight: 20,
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

                        enableHorizontalScrollbar: 0,
                        enableInfiniteScroll: true,

                        onRegisterApi: function(gridApi){
                            scope.gridApi = gridApi;
                        },
                        columnDefs: getColumnDefs()
                    };

                    return angular.copy(gridOptions);
                }

                scope.secs = LendingMarketService.get();

                scope.gridOptions = getGridOptions('secs');

			}

		});
		
	}]);
	
	return lendingMarket;
});
