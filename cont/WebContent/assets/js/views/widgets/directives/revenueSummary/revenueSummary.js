define(['angular'], function(angular){
	
	var RateAlerts = angular.module('pbwApp2')
	.directive('wgtRevenueSummary', ['$http', 'Helper', function($http, Helper){
		
		return Helper.getBaseWidget().extend({
			restrict: 'C',
			scope:{
				demo: '@' 
			},
			cssClass: "col-xs-12 revenueSummary",
			templateUrl: 'assets/js/views/widgets/directives/revenueSummary/revenueSummary.html',

			link: function(scope, elem, attr){
				
                scope.Math = window.Math;

                scope.measures = [
                    {label:"Revenue", name:"revenue"},
                    {label:"Balance", name:"balance"}
                ];

                scope.$watch('measures', function(){
                    scope.gridOptions = getGridOptions();
                    scope.measure = scope.measures[0];
                }, true);

                scope.$watch('measure', function(){
                    if (scope.measure) {
                        scope.gridOptions.data = scope[scope.measure.name];
                        scope.gridOptions.columnDefs = getColumnDefs(scope.measure.name);
                    }
                }, true);

				scope.revenue = [
					{
						type: 'Shorts',
						revenue: 480956,
                        delta: 13.43,
                        mtd:  480956,
                        ytd:  480956
					},
					{
						type: 'Pay To Hold',
                        revenue: 97995,
                        delta: 2.03,
                        mtd:  480956,
                        ytd:  480956
					},
					{
						type: 'Longs',
                        revenue: 17766,
                        delta: -0.28,
                        mtd:  480956,
                        ytd:  480956
					},
					{
						type: 'Cash (Debit)',
                        revenue: -110207,
                        delta: -31.78,
                        mtd:  480956,
                        ytd:  480956
					},
					{
						type: 'Cash (Credit)',
                        revenue: 8449,
                        delta: 0.36,
                        mtd:  480956,
                        ytd:  480956
					},
					{
						type: 'Shorts (Type 1)',
                        revenue: -147,
                        delta: 10.21,
                        mtd:  480956,
                        ytd:  480956
					},
					{
						type: 'Arranged Financing',
                        revenue: -79833,
                        delta: 6.38,
                        mtd:  480956,
                        ytd:  480956
					}
				];

                scope.revenue.forEach(function(d){
                    d.mtd = d.revenue*(8+Math.random()*2);
                    d.ytd = d.mtd;
                });

				scope.balance = [
					{
						type: 'Short',
						balance: 15255,
                        prevYear: 14321,
                        prevYearEnd: 15321,
						util: 36.07
					},
					{
						type: 'Long',
                        balance: 745,
                        prevYear: 654,
                        prevYearEnd: 754,
						util: 14.20
					},
					{
						type: 'Cash',
                        balance: 7346,
                        prevYear: 8543,
                        prevYearEnd: 7543,
						util: 46.23
					},
					{
						type: 'Net MV',
                        balance: 342,
                        prevYear: 234,
                        prevYearEnd: 334,
						util: 23.04
					},
					{
						type: 'GC/HTB',
                        balance: 153,
                        prevYear: 132,
                        prevYearEnd: 162,
						util: 3.44
					}
/*					{
						type: 'Total',
                        balance: 23841,
						util: 56.14
					}*/
				];

                scope.balance.forEach(function(d){
                    d.prevYearDelta = d.balance - d.prevYear;
                    d.prevYearDeltaP = 100 * d.prevYearDelta/d.prevYear;
                    d.prevYearEndDelta = d.balance - d.prevYearEnd;
                    d.prevYearEndDeltaP = 100 * d.prevYearEndDelta/d.prevYearEnd;
                });

				scope.getProgressValue = function (val) {

					var revArr = scope.revenue.map(function(d){
						return d.value;
					});

					var maxRev = Math.max.apply(Math,revArr);
					var minRev = Math.min.apply(Math,revArr);

					if (maxRev > 0 && minRev < 0) {
						return 100 * Math.abs(val) / (maxRev - minRev);
					}
				};

				function getColumnDefs(data){

					var columnDefRevenue = [
						{
							displayName: "Product",
							field: "type",
							type: 'string',
							cellClass: 'text-left',
							headerCellClass: 'text-left',
							minWidth: 65
						},
						{
							displayName: "Revenue",
							field: "revenue",
							type: 'number',
							minWidth: 55,
							cellFilter: 'currency:"$":0',
							cellClass: 'text-right',
							headerCellClass: 'text-right'
						},
                        {
                            displayName: "DoD Change",
                            field: "delta",
                            type: 'number',
                            minWidth: 55,
                            cellTemplate: '<div class="ui-grid-cell-contents">'
                            + '<span ng-class="row.entity.delta<0?\'red-arrow\':\'green-arrow\'">'
                            + '<span class="glyphicon" ng-class="row.entity.delta<0?\'glyphicon-arrow-down\':\'glyphicon-arrow-up\'" style="margin-right:2px;"></span>'
                            + '{{grid.appScope.Math.abs(row.entity.delta) | autoDecimal:"%"}}'
                            + '</span>'
                            + '</div>'
                        },
                        {
                            displayName: "MTD",
                            field: "mtd",
                            type: 'number',
                            minWidth: 65,
                            cellFilter: 'currency:"$":0',
                            cellClass: 'text-right',
                            headerCellClass: 'text-right'
                        },
                        {
                            displayName: "YTD",
                            field: "ytd",
                            type: 'number',
                            minWidth: 80,
                            cellFilter: 'currency:"$":0',
                            cellClass: 'text-right',
                            headerCellClass: 'text-right'
                        }
					];

                    var columnDefBalance = [
                        {
                            displayName: "Product",
                            field: "type",
                            type: 'string',
                            width: 60,
                            cellClass: 'text-left',
                            headerCellClass: 'text-left'
                        },
                        {
                            displayName: "Balance",
                            field: "balance",
                            type: 'number',
                            minWidth: 70,
                            cellFilter: 'currency:"$":0',
                            cellClass: 'text-right',
                            headerCellClass: 'text-right'
                        },
                        {
                            displayName: "Prior Year End",
                            field: "prevYearEnd",
                            type: 'number',
                            minWidth: 95,
                            cellFilter: 'currency:"$":0',
                            cellClass: 'text-right',
                            headerCellClass: 'text-right'
                        },
                        {
                            displayName: "MoM Change",
                            field: "prevYearDeltaP",
                            type: 'number',
                            minWidth: 90,
                            cellClass: 'text-right',
                            headerCellClass: 'text-right',
                            cellTemplate: '<div class="ui-grid-cell-contents text-right">'
                            + '<span ng-class="row.entity.prevYearDelta<0?\'red-arrow\':\'green-arrow\'">'
                            + '{{row.entity.prevYearDelta | number:0}}'
                            + '<span class="glyphicon" ng-class="row.entity.prevYearDelta<0?\'glyphicon-arrow-down\':\'glyphicon-arrow-up\'" style="margin:0 2px;"></span>'
                            + '{{grid.appScope.Math.abs(row.entity.prevYearDeltaP) | autoDecimal:"%"}}'
                            + '</span>'
                            + '</div>'
                        },
                        {
                            displayName: "YoY Change",
                            field: "prevYearDeltaP",
                            type: 'number',
                            minWidth: 100,
                            cellClass: 'text-right',
                            headerCellClass: 'text-right',
                            cellTemplate: '<div class="ui-grid-cell-contents text-right">'
                            + '<span ng-class="row.entity.prevYearDelta<0?\'red-arrow\':\'green-arrow\'">'
                            + '{{row.entity.prevYearDelta | number:0}}'
                            + '<span class="glyphicon" ng-class="row.entity.prevYearDelta<0?\'glyphicon-arrow-down\':\'glyphicon-arrow-up\'" style="margin:0 2px;"></span>'
                            + '{{grid.appScope.Math.abs(row.entity.prevYearDeltaP) | autoDecimal:"%"}}'
                            + '</span>'
                            + '</div>'
                        }
                    ];

                    switch (data) {
                        case "revenue":
                            return angular.copy(columnDefRevenue);
                        case "balance":
                            return angular.copy(columnDefBalance);
                    }

				}

				function getGridOptions(data){

					var gridOptions = {
						rowHeight: 30,
						minRowsToShow: 7,
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
						enableVerticalScrollbar: 0,
						enableInfiniteScroll: true,

						onRegisterApi: function(gridApi){
							scope.gridApi = gridApi;
						}
					};

					return angular.copy(gridOptions);
				}

				function colorIdx(i) {
					if (i>6) return "red";
					if (i>2) return "orange";
					return "green";
				}

				function updateProgressBar () {
					scope.pbStyles = [];
					for (var i=0; i<10; i++){
						var percent = scope.regcapUtil;
						var color = (10*i<percent) ? colorIdx(i) : "#CCC";
						scope.pbStyles.push({'background-color':color});
					}

				}

				scope.init = function(attrs){
					
	                scope.regcapUtil = 56.14;

					scope.$watchGroup(["regcapUtil"], updateProgressBar, true);

				}
				
			}
		});
		
	}]);
	
	return RateAlerts;
})