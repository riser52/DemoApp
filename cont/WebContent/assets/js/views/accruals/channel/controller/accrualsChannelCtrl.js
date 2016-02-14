'use strict';

define([ 'angular'
         ,'agGrid'
         ,'core/filters'
         ,'views/widgets/services/profileGroupService'
         ,'views/widgets/services/widgetService'
         ,'views/widgets/directives/widget'
         ], function(angular, AgGrid) {
	return angular.module('pbwApp2')
	.controller('AccrualsChannelCtrl',
	    [
	        'Helper',
	        '$scope',
	        '$rootScope',
	        '$http',
	        '$timeout',
	        '$q',
	        'inform',
	        'WidgetService',
	        'ProfileGroupService',
	        'EventService',
        function(Helper, $scope, $rootScope, $http, $timeout, $q, inform, WidgetService, ProfileGroupService, EventService) {
	        	
	        	$scope.name = "accruals content";
	        	
				  var columnDefs= [
									{headerName:"Info", field: "commentDesc", cellClass: "text-left nowrap ellipsis", width: 50, 
										cellRenderer: function (params) {
											//console.log(params.data.commentDesc);
											var str = "";
											if (params.data.commentDesc)
												str += '<i class="fa fa-comment hand" data-toggle="tooltip" data-placement="top" style="vertical-align:top;" title=""></i>';
											else
												str += '<i class="fa fa-comment-o" style="vertical-align:top;"></i>';
											if(params.data.closeDateCount > 0) {
												str += '<i class="fa fa-flag-red-icon locked hand" style="margin-left:4px;" data-toggle="tooltip" title=""></i>';
											}
											if(params.data.closedDateCount > 0) {
												str += '<i class="fa fa-flag-red-icon locked hand" style="margin-left:4px;" data-toggle="tooltip" title=""></i>';
											}
							            	if(params.data.futureYn == "Y")
							            		str += '<i class="fa fa-binoculars hand text-success" style="vertical-align: top; margin-left:5px;" data-toggle="tooltip" title="Start Date: '+ params.data.asOfDate+'"></i>';  	
											return str;
										}
									}, 
									{headerName:"Security", field:"security", cellClass: " ellipsis", name: "SECURITY",  width: 70,
										cellRenderer: function (params) {
											return '<span class="text-primary" href="javascript:;" title="' + params.data.security + '">' + params.data.security + '</span>';
										}
									},
									{headerName:"Client", field: "clientCode", cellClass: " ellipsis", name: "CLIENT_CODE",  width: 250, cellStyle:{'padding-left': '7px', 'padding-right': '7px'},
										cellRenderer: function (params) {
											return '<div title="' + params.data.clientName + '">' + params.data.clientName + '</div>';
										}
									},
									{headerName:"As of Date", field: "asOfDate", cellClass: " ellipsis",  width: 100, name: "AS_OF_DATE"},
									{headerName:"Position Source", field: "posSrc", cellClass: "ellipsis",  width: 100, name: "POS_SRC"},
									{headerName:"Rate", field: "rate", cellClass: "text-right ellipsis",  width: 100, name: "RATE",
										cellRenderer: function (params) {
											//if(that.updateAccess===true)
											//	return '<i class="icon-line-chart rate-history pull-right hand" title="Click to view Rollover History"></i><div data-min="-999.99999" data-max="999.99999" data-toggle="errorpop" style="margin-right: 25px;width: 74px;" class="new-rate editable double" tabindex="0">'+ data +'</div>';
											//else
											var str = '';
											var val = params.data.rate;
											if (params.data.rate != 0)
												val = Helper.parseFloat(params.data.rate);
											if (params.data.futureYn == 'N')
												str = '<i class="icon-line-chart rate-history pull-right hand" title="Click to view Rollover History"></i>';
											str += '<div style="margin-right: 25px;" >' + (val) + '</div>'; // || ''

											return str;
										}
									},
												/*{"data": "commentDesc", "class":"text-center", 
												 render: function(data, type, full){
												 if(data)
												 return '<i class="fa fa-comment hand" data-toggle="tooltip" data-placement="top" title=""></i>';
												 else
												 return '<i class="fa fa-comment-o"></i>';
												 }
												 },*/
									{headerName:"Qty", field: "qty", cellClass: "text-right ellipsis",  width: 70, name: "QTY",
										cellRenderer: function (params) {
											//if(that.updateAccess===true)
											//	return '<div class="pth-qty double editable" tabindex="0">'+ Handlebars.helpers["decimal"](data) +'</div>';
											//else
											return '<span title="' + Helper.parseFloat(params.data.qty) + '">' + Helper.parseFloat(params.data.qty) + '</span>';
										}
									},
									{headerName:"Shorts", field: "shorts", cellClass: "text-right ellipsis",  width: 100, name: "SHORTS",
										cellRenderer: function (params) {
											if (params.data.shorts != 0)
												return '<span title="' + Helper.parseFloat(params.data.shorts) + '">' + Helper.parseFloat(params.data.shorts) + '</span>';
											else
												return Helper.parseFloat(params.data.shorts);//params.data.shorts;
										}
									},
									{headerName:"Price", field: "localPrice", cellClass: "text-right ellipsis", width: 70, name: "LOCAL_PRICE",
										render: function (params) {
											if (params.data.localPrice != params.data.adjustedPrice)
												return '<span style="border:1px solid #6187ff;padding:0 5px;">' + Helper.parseFloat(params.data.localPrice) + '<span>';
											else
												return Helper.parseFloat(params.data.localPrice);
										}
									}
									,
									{headerName:"Mkt. Value", field: "localMktValue", cellClass: "text-right ellipsis",  width: 100, name: "LOCAL_MKT_VALUE",
										cellRenderer: function (params) {
											return '<span title="' + Helper.parseFloat(params.data.localMktValue) + '">' + Helper.parseFloat(params.data.localMktValue) + '</span>';
										}
									},
									{headerName:"Adjusted Price", field: "adjustedPrice", cellClass: "text-right ellipsis",  width: 120, name: "ADJUSTED_PRICE",
										cellRenderer: function (params) {
											var val = params.data.adjustedPrice;
											if (params.data.adjustedPrice != 0)
												val = Helper.parseFloat(params.data.adjustedPrice);

											if (params.data.localPrice != params.data.adjustedPrice)
												return '<span style="border:1px solid #6187ff;padding:0 5px;" title="' + val + '">' + val + '<span>';
											else
												return '<span title="' + val + '">' + val + '</span>';
										}
									},
									{headerName:"Adjusted Mkt. Value", field: "adjustedMktValue", cellClass: "text-right ellipsis",  width: 130, name: "ADJUSTED_MKT_VALUE",
										cellRenderer: function (params) {
											if (params.data.adjustedMktValue != 0)
												return '<span title="' + Helper.parseFloat(params.data.adjustedMktValue) + '">' + Helper.parseFloat(params.data.adjustedMktValue) + '</span>';
											else
												return params.data.adjustedMktValue;
										}
									},
									{headerName:"Start Date", field: "startDate", cellClass: "text-center ellipsis",  width: 100, name: "START_DATE"},
									{headerName:"MV Currency", field: "mvCurrency", cellClass: "text-center ellipsis", width: 100, name: "MV_CURRENCY",
										cellRenderer: function (params) {
											//if (that.currencyList[params.data.mvCurrency] && params.data.mvCurrency != "USD")
										//		return '<span class="label label-default" style="background-color:' + that.currencyList[params.data.mvCurrency].color + '">' + params.data.mvCurrency + '</span>';
									//		else
												return  params.data.mvCurrency;
										}
									},
									/*{headerName:"Action","data": null, "class": "text-right ellipsis", width:70,
										cellRenderer: function (params) {
											//if (that.allowEdit === true)
											//{
											var str = '';
												if(params.data.recordTypeId == 5) {
													if( that.posAccess.modify[params.data.recordTypeId+''] === true 
															|| that.posAccess.editrate[params.data.recordTypeId+''] === true){
														str += '<i class="fa fa-edit actBtn text-primary" title="Click to adjust Quantity/Rate"></i>';
													}
													if( that.posAccess.modify[params.data.recordTypeId+''] === true){
														str += '<i class="fa fa-times actBtn close-pth" title="Click to close Position"></i><i class="fa fa-trash actBtn delete-pth text-danger" title="Click to delete Position."></i>';
													}
												}
												else{
													if(params.data.asOfDate != App.getDateToStr(new Date())) {
														if( that.posAccess.modify[params.data.recordTypeId+''] === true 
																|| that.posAccess.editrate[params.data.recordTypeId+''] === true){
															str += '<i class="fa fa-edit actBtn text-primary" title="Click to adjust Quantity/Rate"></i>';
														}
														if( that.posAccess.modify[params.data.recordTypeId+''] === true){
															str += '<i class="fa fa-trash actBtn delete-pth text-danger" title="Click to delete Position."></i>';
														}
													}
												}
											return str;
											//}
											//else {
											//	return '';
											//}
										}
									},*/
									{headerName:"Type", field: "recordType", cellClass: "ellipsis", name: "RECORD_TYPE", width: 100}
								];

	        	            

		           $scope.gridOptions = {
			                  columnDefs: columnDefs,
			                 // rowData: null,
			                  enableColResize: true,
			                  rowSelection: 'single',
			                  rowHeight: 30,
			                  //showToolPanel: that.shVal,
			                  toolPanelSuppressValues: true,
			                  toolPanelSuppressPivot:true,
			                  enableSorting: false,
			                  enableServerSideSorting: true,
			                  enableServerSidePagination: true,
			                  enablePagination: false,
			                  icons:
			                	  {
			                	  columnVisible: '<i class="fa fa-lg fa-check-square-o"/>',
			                	  columnHidden:  '<i class="fa fa-lg fa-square-o"/>'
			                	  },
			                  overlayLoadingTemplate: '<span class="alert col-xs-10 col-xs-offset-1" style="font-size: 15px; font-weight: 800; font-family: Open Sans;">Loading &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-lg fa-spinner fa-spin"></i></span>',
			                  overlayNoRowsTemplate: '<span class="alert col-xs-10 col-xs-offset-1" style="font-size: 15px; font-weight: 800; font-family: Open Sans;" ><i class="fa fa-lg fa-th"></i>&nbsp;No Data to Display</span>', //style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;",
			                  datasource: {
			                	  		pageSize: 100, //parseInt(that.$('select.tablePageSize').val(),10),
							            getRows: function (params) {
							                
							            	console.log(params);
							                console.log('asking for ' + params.startRow + ' to ' + params.endRow);
							                
							                /*if (typeof (Storage) != "undefined") {
												that.positions_filter = {
													'startDate': that.$('#min').val(),
													'endDate': that.$('#max').val(),
													'accounts': that.AccountIdsPos,
													//'Position_securities': that.mySecuritiesPos,
													'recordTypeIds': that.recordsArray
												};
												sessionStorage.setItem("positions_filter", JSON.stringify(that.positions_filter));
											}*/
											/*that.ordering = [];
											for (var i = 0; i < that.data1.length; i++) {
												that.ordering.push(that.data1.columns[that.data1.order[i].column].name + ' ' + that.data1.order[i].dir);
											}*/
										/*	var securitysStr = null;
											if (typeof that.mySecuritiesPos !== 'undefined' && that.mySecuritiesPos.length > 0) {
												var secids = [];
												for (var i = 0; i < that.mySecuritiesPos.length; i++)
												{
													secids.push(that.mySecuritiesPos[i]['data-id']);
												}
												securitysStr = secids.join();
											}
											var channelStr = App.getClient().get('channelCode');
											var recordids = [];
											var recordId = "";
											if (that.recordsArray && that.recordsArray.length > 0) {
												for (var m = 0; m < that.recordsArray.length; m++) {
													recordids.push(that.recordsArray[m]);
												}
												recordId = recordids.join(',');
											}*/
							                  
							                $scope.datajax = {
												
													startDate: '12/14/2015',//that.$('#min').val(),
													closedDate: '01/15/2016', //that.$('#max').val(),
													clientCode: -1,//that.client.clientCode,
													securityIdList: null,//securitysStr,
													channelCode : 'FCM', //channelStr,
													closed: 'N',//$('#includeClosedPTH').is(':checked') ? 'Y' : 'N',
													recordTypeIdList: '3', //recordId,
													//sort: that.ordering.join(','),
													offset: params.startRow+1, //data.start + 1,
													pageSize: params.endRow - params.startRow //that.$('select[name="DataTables_Table_1_length"] option:selected').attr('value')// 100,//data.length
												};
							                  //  var rowsThisPage = that.data1.slice(params.startRow, params.endRow);
							                   // var lastRow = -1;
							                   // if (that.data1.length <= params.endRow) {
							                   //     lastRow = that.data1.length;
							                  //  }
							                
							                    $http({
													url: 'service/pos/getByRecTypeList',
													method: 'POST',
													contentType: 'application/json',
													data: JSON.stringify($scope.datajax),
													dataType: 'json'})
													.then(function successCallback(resp) {
														console.log(resp.data);
														var json = resp.data.list || [];
														if (resp.data.status === 'SUCCESS') {
															var ln = ($scope.gridOptions.datasource.pageSize == json.length? -1 : params.startRow + json.length);
															//console.log(that.gridOptions.datasource.pageSize +"  "+ json.length +"  "+ params.startRow);
															$scope.gridOptions.api.setRowData(resp.data.list);
															params.successCallback(json, ln);
															

														} else {
															params.failCallback();
															
															$scope.gridOptions.api.showNoRowsOverlay();
														}
														
													},
													function errorCallback(resp) {
														params.failCallback();
														$scope.gridOptions.api.showNoRowsOverlay();
													}
												);

							                
							            }
							        }
			              };


        		

        } 
	        ]
	);

});