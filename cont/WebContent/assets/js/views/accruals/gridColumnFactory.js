'use strict';

define(['angular'], function(angular){
	
	angular.module("pbwApp2")
	.factory('GridColumnFactory', [ function() {

		var getConfig = function(scrName, gridData){
			return getOptionsConfig(scrName, gridData);
		};
		
		['primeYn', 'channelCode','recordType', 'securityId', 'symbol', 
		 'sec','cusip', 'sedol', 'secDescFull', 'countryCode', 
		 'productCode', 'assetClass', 'usEquity','accrualRate','effectiveRate',
		 'pnlRate', 'secpriceUsd', 'accrualQty', 'accrualUsdMv', 'accrualLocalMv', 
		 'shortMv', 'accrualUsd', 'accrualLocal','netAccrual', 'grossAccrual', 
		 'localCcy', 'accrualCcy', 'difficulty', 'elBalance', 'wavBorrowRate', 
		 'suggestedRate', 'dailyRevSuggested', 'astecAvgRate', 'astecMaxRate','astecMinRate',
		 'eqlAvgAllRate','eqlAvg5Rate','eqlAvg1Rate', 'updateTime', 'updateBy', 
		 'asOfDate', 'statusFlag']
		
		['clientCode', 'clientName', 'branch', 'superbranch', '', '',  '','','','','','','','','','','',
		    '', '','', '', '',
			'', '', '', '', '', '', '', '', '',
			'', '', '', '', '', '', '','',
			'','','', '', '', 'accruedAccounts', '', ''];

		['accountNumber', 'accountName', 'clientCode', 'clientName', 'branch', 'superbranch', '', '', '','','','','','','','','','','', 'recordTypeId',
		'', '', '', '', '', 'rateType', '', '', '', '', 
		'', '', '', '', '', 'mrmAccrualRuleId',
		'mrmBenchmarkId', '', '', '', '', '', '', '','',
		'','','', '', '', 'manualRateYn', '', ''];
		
		['', '', '','','','','','','','','','','', '', '', '','', '',
		'', '', '', '', '', '', '', '', '',
		'', '', '', '', '', '', '','','',
		'','', '', '', 'accruedAccounts', '', ''];

		var getColumnDefs = function(scrName, GridData){
			  
			var columnDefs= [];
			
			if(scrName == "client" || scrName == "account")
			columnDefs.push({	
				  				displayName:"Client ID", 
								field:"clientCode", 
								cellClass: "text-left ellipsis", 
								minWidth: 60,
								headerCellClass: "text-left",
							},
							{	
				  				displayName:"Client Name", 
								field:"clientName", 
								cellClass: "text-left ellipsis", 
								minWidth: 120,
								headerCellClass: "text-left",
							},
							{	
				  				displayName:"Branch", 
								field:"branch", 
								cellClass: "text-left ellipsis", 
								minWidth: 80,
								headerCellClass: "text-left",
							},
							{	
				  				displayName:"Superbranch", 
								field:"superbranch", 
								cellClass: "text-left ellipsis", 
								minWidth: 80,
								headerCellClass: "text-left",
							});
					
			if(scrName == "account" || scrName == "channel")
			columnDefs.push({	
								displayName:"Accrued Accounts", 
								field:"accruedAccounts", 
								cellClass: "text-left ellipsis", 
								minWidth: 70,
								headerCellClass: "text-left",
							});
							
							
		
		

			if(scrName == "account")
			columnDefs.push({	
				  				displayName:"Account Number", 
								field:"accountNumber", 
								cellClass: "text-left ellipsis", 
								minWidth: 60,
								headerCellClass: "text-left",
							},
							{	
				  				displayName:"Account Name", 
								field:"accountName", 
								cellClass: "text-left ellipsis", 
								minWidth: 60,
								headerCellClass: "text-left",
							},
							{	
				  				displayName:"Record Type ID", 
								field:"recordTypeId", 
								cellClass: "text-left ellipsis", 
								minWidth: 60,
								headerCellClass: "text-left",
							},
							{	
				  				displayName:"Rate Type", 
								field:"rateType", 
								cellClass: "text-left ellipsis", 
								minWidth: 60,
								headerCellClass: "text-left",
							},
							{	
				  				displayName:"Rule ID", 
								field:"mrmAccrualRuleId", 
								cellClass: "text-left ellipsis", 
								minWidth: 60,
								headerCellClass: "text-left",
							},
							{	
				  				displayName:"MRM Benchmark ID", 
								field:"mrmBenchmarkId", 
								cellClass: "text-left ellipsis", 
								minWidth: 60,
								headerCellClass: "text-left",
							},
							{	
				  				displayName:"Manual Rate Yn", 
								field:"manualRateYn", 
								cellClass: "text-left ellipsis", 
								minWidth: 60,
								headerCellClass: "text-left",
							});
			
			
			if (scrName != null)
			columnDefs.push(
								{	displayName:"Prime", 			
									field:"primeYn", 
									cellClass: "text-left ellipsis", 
									minWidth: 40,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Channel", 
									field:"channelCode", 
									cellClass: "text-left ellipsis", 
									minWidth: 60,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Accrual Type",  
									field:"recordType", 
									cellClass: "text-left ellipsis", 
									minWidth: 80,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Security ID", 
									field:"securityId", 
									cellClass: "text-left ellipsis", 
									minWidth: 80,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Ticker", 
									field:"sec", 
									cellClass: "text-left ellipsis", 
									minWidth: 80,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Symbol", 
									field:"symbol", 
									cellClass: "text-left ellipsis", 
									minWidth: 80,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Cusip", 
									field:"cusip", 
									cellClass: "text-left ellipsis", 
									minWidth: 80,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Sedol", 
									field:"sedol", 
									cellClass: "text-left ellipsis", 
									minWidth: 80,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Sec Description", 
									field:"secDescFull", 
									cellClass: "text-left ellipsis", 
									minWidth: 120,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Country Code", 
									field:"countryCode", 
									cellClass: "text-left ellipsis", 
									minWidth: 60,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Product Code", 
									field:"productCode", 
									cellClass: "text-left ellipsis", 
									minWidth: 60,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Asset Class", 
									field:"assetClass", 
									cellClass: "text-left ellipsis", 
									minWidth: 60,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"US Equity", 
									field:"usEquity", 
									cellClass: "text-left ellipsis", 
									minWidth: 50,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Rate", 
									field:"accrualRate", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Effective Rate", 
									field:"effectiveRate", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Cost Rate", 
									field:"pnlRate", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Price (USD)", 
									field:"secpriceUsd", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Accrual Qty", 
									field:"accrualQty", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Accrual USD MV", 
									field:"accrualUsdMv", 
									cellClass: "text-right ellipsis", 
									minWidth: 100,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Local MV", 
									field:"accrualLocalMv", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Short MV", 
									field:"shortMv", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Accrual USD", 
									field:"accrualUsd", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Accrual Local", 
									field:"accrualLocal", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Net Revenue", 
									field:"netAccrual", 
									cellClass: "text-right ellipsis", 
									minWidth: 90,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Gross Revenue", 
									field:"grossAccrual", 
									cellClass: "text-right ellipsis", 
									minWidth: 90,
									headerCellClass: "text-right",
								},
								{	
									displayName:"MVC", 
									field:"localCcy", 
									cellClass: "text-right ellipsis", 
									minWidth: 50,
									headerCellClass: "text-right",
								},
								{	
									displayName:"AVC", 
									field:"accrualCcy", 
									cellClass: "text-right ellipsis", 
									minWidth: 50,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Difficulty", 
									field:"difficulty", 
									cellClass: "text-left ellipsis", 
									minWidth: 80,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"EL Balance", 
									field:"elBalance", 
									cellClass: "text-left ellipsis", 
									minWidth: 80,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"WAV Short Rate", 
									field:"wavBorrowRate", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Suggested Rate", 
									field:"suggestedRate", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Daily Rev Suggested", 
									field:"dailyRevSuggested", 
									cellClass: "text-right ellipsis", 
									minWidth: 80,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Astec Avg Rate", 
									field:"astecAvgRate", 
									cellClass: "text-right ellipsis", 
									minWidth: 100,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Astec Max Rate", 
									field:"astecMaxRate", 
									cellClass: "text-right ellipsis", 
									minWidth: 100,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Astec Min Rate", 
									field:"astecMinRate", 
									cellClass: "text-right ellipsis", 
									minWidth: 100,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Equilend All Day Rate", 
									field:"eqlAvgAllRate", 
									cellClass: "text-right ellipsis", 
									minWidth: 100,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Equilend 5 Day Rate", 
									field:"eqlAvg5Rate", 
									cellClass: "text-right ellipsis", 
									minWidth: 100,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Equilend 1 Day Rate", 
									field:"eqlAvg1Rate", 
									cellClass: "text-right ellipsis", 
									minWidth: 100,
									headerCellClass: "text-right",
								},
								{	
					  				displayName:"Updated Time", 
									field:"updateTime", 
									cellClass: "text-left ellipsis", 
									minWidth: 110,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Updated By", 
									field:"updateBy", 
									cellClass: "text-left ellipsis", 
									minWidth: 70,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Date", /* 'localCcy', 'accrualCcy',*/
									field:"asOfDate", 
									cellClass: "text-left ellipsis", 
									minWidth: 70,
									headerCellClass: "text-left",
								},
								{	
					  				displayName:"Status", 
									field:"recordStatus", 
									cellClass: "text-center ellipsis", 
									minWidth: 60,
									headerCellClass: "text-left",
									cellTemplate: '<div class="ui-grid-cell-contents">'
													+'<i ng-if="row.entity.recordStatus == \'Calculated\'" class="fa fa-check fa-lg accrual-status locked" style="color:#1AAE1C;"></i>'
													+'<i ng-if="row.entity.recordStatus == \'Locked\'" class="fa fa-lock fa-lg accrual-status locked" style="color:#1AAE1C;"></i>'	
													+'<i ng-if="row.entity.recordStatus != \'Calculated\' && row.entity.recordStatus != \'Locked\'" class="fa fa-exclamation fa-lg accrual-status text-info locked" style="color:#AE1A1A;"></i>'
													+'</div>'
								});
			
			
/*			var columnsAjax = {
			'button': {"data": null, "class": 'text-center', "orderable": false, 'width': '25px', "defaultContent": '', "render": function () {
					return '<i class="fa fa-lg fa-plus-square-o details-control hand" title="Expanded/Collapse View"></i>';
				}},
			'statusFlag': {"data": "recordStatus", "class": 'text-center', "orderable": false, 'width': '25px', "defaultContent": '', "render": function (data, type, full) {
					if (data == "Calculated") {
						return '<i class="fa fa-check fa-lg accrual-status locked" data-update-by="' + full.updateBy + '" data-updated-time="' + full.updateTime + '" data-status="' + data + '" style="color:#1AAE1C;"></i>';
					}
					else if (data == "Locked") {
						return '<i class="fa fa-lock fa-lg accrual-status locked" data-update-by="' + full.updateBy + '" data-updated-time="' + full.updateTime + '" data-status="' + data + '" ></i>';
					}
					else {
						return '<i class="fa fa-exclamation fa-lg accrual-status text-info locked" data-update-by="' + full.updateBy + '" data-updated-time="' + full.updateTime + '" data-status="' + data + '" style="color:#AE1A1A;"></i>';
					}
				}},
			"clientCode": {"data": "clientCode", "width": "65px", "name": "CLIENT_CODE", "class": "ellipsis semi-bold", "bVisible": true, "allowResize": true, "allowReorder": true},
			"accountId": {"data": "accountId", "width": "86px", "name": "ACCOUNT_ID", "class": "ellipsis", "bVisible": false, "allowResize": true, "allowReorder": true},
			"accountNumber": {"data": "accountNumber", "name": "ACCOUNT_NUMBER", "class": "ellipsis", "allowResize": true, "bVisible": true, "allowReorder": true, "width": "71px"},
			"accountName": {"data": "accountName", "width": "106px", "name": "ACCOUNT_NAME", "class": "ellipsis", "bVisible": false, "allowResize": true, "allowReorder": true},
			"clientName": {"data": "clientName", "width": "65px", "name": "CLIENT_NAME", "class": "ellipsis", "bVisible": false, "allowResize": true, "allowReorder": true},
			"branch": {"data": "branch", "width": "65px", "name": "BRANCH", "class": "ellipsis", "allowResize": true, "bVisible": false, "allowReorder": true},
			"superbranch": {"data": "superbranch", "width": "65px", "name": "SUPERBRANCH", "class": "ellipsis", "allowResize": true, "bVisible": false, "allowReorder": true},
			"primeYn": {"data": "primeYn", "width": "65px", "name": "PRIME_YN", "class": "ellipsis", "bVisible": false, "allowResize": true, "allowReorder": true},
			"channelCode": {"data": "channelCode", "width": "65px", "name": "CHANNEL_CODE", "class": "ellipsis", "allowResize": true, "bVisible": false, "allowReorder": true},
			"recordType": {"data": "recordType", "name": "RECORD_TYPE", "class": "ellipsis", "allowResize": true, "bVisible": true, "allowReorder": true, "width": "55px"},
			"securityId": {"data": "securityId", "width": "85px", "name": "SECURITY_ID", "class": "ellipsis", "bVisible": false, "allowResize": true, "allowReorder": true},
			"symbol": {"data": "symbol", "width": "58px", "bVisible": false, "name": "SYMBOL", "class": "ellipsis"},
			"sec": {"data": "sec", "name": "SEC", "class": "ellipsis", "allowResize": true, "allowReorder": true, "width": "71px"},
			"cusip": {"data": "cusip", "width": "65px", "name": "CUSIP", "class": "ellipsis", "bVisible": false},
			"sedol": {"data": "sedol", "width": "65px", "name": "SEDOL", "class": "ellipsis", "bVisible": false},
			"secDescFull": {"data": "secDescFull", "width": "65px", "name": "SEC_DESC_FULL", "class": "ellipsis", "bVisible": false},
			"secpriceUsd": {"data": "secpriceUsd", "name": "secprice_USD", "class": "ellipsis text-right", "bVisible": true, "width": "80px", "allowResize": true, "allowReorder": true,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
				}},
			"countryCode": {"data": "countryCode", "width": "65px", "name": "COUNTRY_CODE", "class": "ellipsis", "bVisible": false},
//			"ccy": {"data": "ccy", "width": "65px", "name": "CCY", "class": "ellipsis", "bVisible": false},
			"productCode": {"data": "productCode", "width": "65px", "name": "PRODUCT_CODE", "class": "ellipsis", "bVisible": false},
			"assetClass": {"data": "assetClass", "width": "65px", "name": "ASSET_CLASS", "class": "ellipsis", "bVisible": false},
			"usEquity": {"data": "usEquity", "width": "78px", "name": "US_EQUITY", "class": "ellipsis", "bVisible": false},
			"recordTypeId": {"data": "recordTypeId", "width": "80px", "name": "RECORD_TYPE_ID", "class": "ellipsis", "bVisible": false},
			"accrualQty": {"data": "accrualQty", "width": "50px", "name": "ACCRUAL_QTY", "bVisible": true, "class": "ellipsis text-right", "allowResize": true, "allowReorder": true,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data, 0) + '</span>';
				}},
			"accrualUsdMv": {"data": "accrualUsdMv", "width": "118px", "name": "ACCRUAL_USD_MV", "class": "ellipsis text-right", "bVisible": false,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data, 0) + '</span>';
				}},
			"accrualLocalMv": {"data": "origMvLocal", "name": "ACCRUAL_LOCAL_MV", "class": "ellipsis text-right", "bVisible": true, "width": "83px", "allowResize": true, "allowReorder": true,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data, 0) + '</span>';
				}},
			"shortMv": {"data": "shortMv", "name": "SHORT_MV", "class": "ellipsis text-right", "bVisible": false, "width": "65px", "allowResize": true, "allowReorder": true,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data, 0) + '</span>';
				}},
			"accrualRate": {"data": "accrualRate", "width": "55px", "name": "ACCRUAL_RATE", "class": "ellipsis text-right", "bVisible": true, "allowResize": true, "allowReorder": true,
				render: function (data, type, full) {
					if( that.accrualAccess.editrate[full.recordTypeId+''] === true){
						return '<a href="javascript:;" class="rate-changer bold ' + (data < 0 ? 'text-danger' : 'black') + ' accrual-new-rate">' + Handlebars.helpers["decimal"](data) + '</a>';
					}	else {
						return '<div class="bold ' + (data < 0 ? 'text-danger' : 'black') + ' " tabindex="0">' + Handlebars.helpers["decimal"](data) + '</div>';}
					}
				},
			"rateType": {"data": "rateType", "width": "50px", "name": "RATE_TYPE", "class": "ellipsis", "bVisible": true, "allowResize": true, "allowReorder": true,
				render: function (data) {
					var rtClass = "";
					var rt = "";
					switch (data) {
						case "Benchmark Spread":
							rtClass = "rate-type-b";
							rt = "B";
							break;
						case "Fixed":
							rtClass = "rate-type-f";
							rt = "F";
							break;
						case "GC":
							rtClass = "rate-type-gc";
							rt = "GC";
							break;
						case "Auto":
							rtClass = "rate-type-a";
							rt = "A";
							break;
					}
					return '<div class="rate-type-icon" title="' + data + '"><div class="' + rtClass + '">' + rt + '</span></div>';
				}
			},
			"accrualUsd": {"data": "accrualUsd", "name": "ACCRUAL_USD", "class": "ellipsis text-right", "bVisible": true, "width": "70px", "allowResize": true, "allowReorder": true,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
				}},
			"accrualLocal": {"data": "accrualLocal", "name": "ACCRUAL_LOCAL", "class": "ellipsis text-right", "bVisible": false, "width": "70px", "allowResize": true, "allowReorder": true,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
				}},
			"netAccrual": {"data": "netAccrual", "name": "Net_Accrual", "class": "ellipsis text-right", "bVisible": false, "width": "70px", "allowResize": true, "allowReorder": true,
					render: function (data) {
						return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
				}},	
			"grossAccrual": {"data": "grossAccrual", "name": "Gross_Accrual", "class": "ellipsis text-right", "bVisible": false, "width": "70px", "allowResize": true, "allowReorder": true,
					render: function (data) {
						return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
				}},	
			"effectiveRate": {"data": "effectiveRate", "width": "65px", "name": "EFFECTIVE_RATE", "class": "ellipsis hand text-right", "bVisible": true,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
				}},
			"pnlRate": {"data": "costRate", "name": "COST_RATE", "class": "ellipsis text-right", "bVisible": true, "width": "70px", "allowResize": true, "allowReorder": true,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
				}},
			"localCcy": {"data": "localCcy", "width": "45px", "name": "LOCAL_CCY", "bVisible": true, "class": "ellipsis", "allowResize": true, "allowReorder": true,
				"render": function (data, type, full) {
					var color = (data == "USD") ? 'none' : '#257877';
					var textColor = (color == 'none') ? '#333;' : 'white;';
					var ccyAlert = (full.localCcy===full.accrualCcy) ? "" : "<span class='fa fa-exclamation-triangle ccy-alert-icon' data-mvc='"+full.localCcy+"' data-avc='"+full.accrualCcy+"' style='margin-left:5px; color:red;'></span>";
					return '<span class="label label-default" style="font-size: 0.9em;color:' + textColor + 'background:' + color + '">' + data + '</span>' + ccyAlert;
				}
			},
			"accrualCcy": {"data": "accrualCcy", "width": "45px", "name": "ACCRUAL_CCY", "bVisible": false, "class": "ellipsis", "allowResize": true, "allowReorder": true,
				"render": function (data, type, full) {
					var color = (data == "USD") ? 'none' : '#257877';
					var textColor = (color == 'none') ? '#333;' : 'white;';
					var ccyAlert = (full.localCcy===full.accrualCcy) ? "" : "<span class='fa fa-exclamation-triangle ccy-alert-icon' data-mvc='"+full.localCcy+"' data-avc='"+full.accrualCcy+"' style='margin-left:5px; color:red;'></span>";
					return '<span class="label label-default" style="font-size: 0.9em;color:' + textColor + 'background:' + color + '">' + data + '</span>' + ccyAlert;
				}
			},
			"mrmAccrualRuleId": {"data": "mrmAccrualRuleId", "width": "65px", "name": "MRM_ACCRUAL_RULE_ID", "class": "ellipsis", "bVisible": false},
//			"mrmSchedRateRuleId": {"data": "mrmSchedRateRuleId", "width": "50px", "name": "MRM_SCHED_RATE_RULE_ID", "class": "ellipsis", "bVisible": false},
//			"mrmPriceRuleId": {"data": "mrmPriceRuleId", "width": "45px", "name": "MRM_PRICE_RULE_ID", "class": "ellipsis", "bVisible": false},
//			"mrmRateTypeId": {"data": "mrmRateTypeId", "width": "45px", "name": "MRM_RATE_TYPE_ID", "class": "ellipsis", "bVisible": false},
//			"mrmSchedRateTypeId": {"data": "mrmSchedRateTypeId", "width": "45px", "name": "MRM_SCHED_RATE_TYPE_ID", "class": "ellipsis", "bVisible": false},
			"mrmBenchmarkId": {"data": "mrmBenchmarkId", "width": "45px", "name": "MRM_BENCHMARK_ID", "class": "ellipsis", "bVisible": false},
			"difficulty": {"data": "difficulty", "width": "82px", "name": "DIFFICULTY", "class": "ellipsis", "bVisible": false},
			"elBalance": {"data": "elBalance", "name": "EL_BALANCE", "class": "ellipsis", "bVisible": false, "width": "65px", "allowResize": true, "allowReorder": true,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data, 0) + '</span>';
				}},
			"wavBorrowRate": {"data": "wavBorrowRate", "width": "45px", "name": "WAV_BORROW_RATE", "class": "ellipsis", "bVisible": false,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
				}},
			"suggestedRate": {"data": "suggestedRate", "width": "124px", "name": "SUGGESTED_RATE", "class": "ellipsis", "bVisible": false,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
				}},
			"dailyRevSuggested": {"data": "dailyRevSuggested", "width": "158px", "name": "DAILY_REV_SUGGESTED", "class": "ellipsis", "bVisible": false,
				render: function (data) {
					return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
				}},
			"astecAvgRate": {"data": "astecAvgRate", "name": "Astec_Avg_Rate", "class": "ellipsis text-right", "bVisible": false, "width": "70px", "allowResize": true, "allowReorder": true,
					render: function (data) {
						return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
					}},
			"astecMaxRate": {"data": "astecMaxRate", "name": "Astec_Max_Rate", "class": "ellipsis text-right", "bVisible": false, "width": "70px", "allowResize": true, "allowReorder": true,
					render: function (data) {
						return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
					}},
			"astecMinRate": {"data": "astecMinRate", "name": "Astec_Min_Rate", "class": "ellipsis text-right", "bVisible": false, "width": "70px", "allowResize": true, "allowReorder": true,
					render: function (data) {
						return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
					}},
			"eqlAvgAllRate": {"data": "eqlAvgAllRate", "name": "Equal_Avg_Allrate", "class": "ellipsis text-right", "bVisible": false, "width": "70px", "allowResize": true, "allowReorder": true,
					render: function (data) {
						return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
					}},
			"eqlAvg5Rate": {"data": "eqlAvg5Rate", "name": "Equal_Avg_5rate", "class": "ellipsis text-right", "bVisible": false, "width": "70px", "allowResize": true, "allowReorder": true,
					render: function (data) {
						return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
					}},
			"eqlAvg1Rate": {"data": "eqlAvg1Rate", "name": "Equal_Avg_1rate", "class": "ellipsis text-right", "bVisible": false, "width": "70px", "allowResize": true, "allowReorder": true,
					render: function (data) {
						return '<span class="' + (data < 0 ? 'text-danger' : '') + '">' + Handlebars.helpers["decimal"](data) + '</span>';
						}},
			"updateTime": {"data": "updateTime", "width": "103px", "name": "UPDATE_TIME", "class": "ellipsis", "bVisible": false},
			"updateBy": {"data": "updateBy", "width": "65px", "name": "UPDATE_BY", "class": "ellipsis", "bVisible": false},
			"accruedAccounts": {"data": "accruedAccounts", "width": "65px", "name": "ACCRUED_ACCOUNTS", "class": "ellipsis", "bVisible": false},
			"manualRateYn": {"data": "manualRateYn", "width": "65px", "name": "MANUAL_RATE_YN", "class": "ellipsis", "bVisible": false},
			"asOfDate": {"data": "asOfDate", "width": "74px", "name": "AS_OF_DATE", "class": "ellipsis", "bVisible": true, "allowResize": true, "allowReorder": true}
			};*/
			  		
			  return columnDefs;
      	}

      	            

	           var getOptionsConfig = function(scrName, gridData){
	        		   
	        	   var gridOptions = {
							//rowTemplate: '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader, \'no-bottom-border\': row.treeLevel<2 }" ui-grid-cell tooltip-placement="top" tooltip-template="\'assets/templates/views/history/details-tooltips.html\'" tooltip-append-to-body="true" tooltip-enable="{{col.colDef.customTooltip}}"></div>',
					        data: gridData,
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
					        enableRowSelection: true,
					        enableRowHeaderSelection: false,
					        enableFullRowSelection: true,
					        
					        rowEditWaitInterval: -1,

							showFilter: false,
					        useExternalFiltering: true,
					        
					        enablePaging: false,

						    useExternalSorting: false,
							enableSorting: true,
						    
							enableHorizontalScrollbar: true,
					        enableInfiniteScroll: true,

					        onRegisterApi: function(gridApi){
					        	gridApi = gridApi;
					        },
					        columnDefs: getColumnDefs(scrName, gridData)
					};
					
					return angular.copy(gridOptions);
				
	           }
		
		return {
			getConfig: getConfig,
			}
		
	}]);
	
});
	