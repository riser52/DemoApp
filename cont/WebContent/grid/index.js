// Choose to inject either HashBangs or HTML5 mode, your preference.
var app = angular.module('myApp', ['ngRoute'
                              ,'ui.bootstrap'
                              ,'ngSanitize'
                              ,'ngAnimate',
                              ,'inform'
                              ,'ui.grid'
                              ]);

app.run(function ($templateCache) {
	  $templateCache.put('ui-grid/uiGridHeaderCell',
	    "<div role=\"columnheader\" ng-class=\"{ 'sortable': sortable }\" ui-grid-one-bind-aria-labelledby-grid=\"col.uid + '-header-text ' + col.uid + '-sortdir-text'\" "
			  +"aria-sort=\"{{col.sort.direction == asc ? 'ascending' : ( col.sort.direction == desc ? 'descending' : (!col.sort.direction ? 'none' : 'other'))}}\">"
			  +"<div role=\"button\" tabindex=\"0\" class=\"ui-grid-cell-contents ui-grid-header-cell-primary-focus\" col-index=\"renderIndex\" title=\"TOOLTIP\">"
			  +"<span ui-grid-one-bind-id-grid=\"col.uid + '-sortdir-text'\" ui-grid-visible=\"col.sort.direction\" aria-label=\"{{getSortDirectionAriaLabel()}}\" ng-if=\"col.colDef.cellClass!='text-left'\">"
			  +"<i ng-class=\"{ 'fa-lg fa-sort-alpha-asc': col.sort.direction == asc && col.colDef.type=='string', 'fa-lg fa-sort-alpha-desc': col.sort.direction == desc && col.colDef.type=='string', 'fa-lg fa-sort-amount-asc': col.sort.direction == asc && col.colDef.type=='number', 'fa-lg fa-sort-amount-desc': col.sort.direction == desc && col.colDef.type=='number', 'fa-lg fa-long-arrow-up': col.sort.direction == asc && col.colDef.type!='number' && col.colDef.type!='string', 'fa-lg fa-long-arrow-down': col.sort.direction == desc && col.colDef.type!='number' && col.colDef.type!='string', 'ui-grid-icon-blank': !col.sort.direction }\" title=\"{{col.sort.priority ? i18n.headerCell.priority + ' ' + col.sort.priority : null}}\" aria-hidden=\"true\" class=\"fa col-sort-icon\"></i> "
			  +" <sub class=\"ui-grid-sort-priority-number\">{{col.sort.priority}}</sub>"
			  +"</span> "
			  +"<span class=\"ui-grid-header-cell-label\" ui-grid-one-bind-id-grid=\"col.uid + '-header-text'\">{{ col.displayName CUSTOM_FILTERS }}</span>"
			  +"<span ui-grid-one-bind-id-grid=\"col.uid + '-sortdir-text'\" ui-grid-visible=\"col.sort.direction\" aria-label=\"{{getSortDirectionAriaLabel()}}\" ng-if=\"col.colDef.cellClass=='text-left'\">"
			  +"<i ng-class=\"{ 'fa-lg fa-sort-alpha-asc': col.sort.direction == asc && col.colDef.type=='string', 'fa-lg fa-sort-alpha-desc': col.sort.direction == desc && col.colDef.type=='string', 'fa-lg fa-sort-amount-asc': col.sort.direction == asc && col.colDef.type=='number', 'fa-lg fa-sort-amount-desc': col.sort.direction == desc && col.colDef.type=='number', 'fa-lg fa-long-arrow-up': col.sort.direction == asc && col.colDef.type!='number' && col.colDef.type!='string', 'fa-lg fa-long-arrow-down': col.sort.direction == desc && col.colDef.type!='number' && col.colDef.type!='string', 'ui-grid-icon-blank': !col.sort.direction }\" title=\"{{col.sort.priority ? i18n.headerCell.priority + ' ' + col.sort.priority : null}}\" aria-hidden=\"true\" class=\"fa col-sort-icon\"></i> "
			  +" <sub class=\"ui-grid-sort-priority-number\">{{col.sort.priority}}</sub>"
			  +"</span> "
			  +"</div><div role=\"button\" tabindex=\"0\" ui-grid-one-bind-id-grid=\"col.uid + '-menu-button'\" class=\"ui-grid-column-menu-button\" ng-if=\"grid.options.enableColumnMenus && !col.isRowHeader  && col.colDef.enableColumnMenu !== false\" ng-click=\"toggleMenu($event)\" ng-class=\"{'ui-grid-column-menu-button-last-col': isLastCol}\" ui-grid-one-bind-aria-label=\"i18n.headerCell.aria.columnMenuButtonLabel\" aria-haspopup=\"true\">"
			  +"<i class=\"ui-grid-icon-angle-down\" aria-hidden=\"true\">&nbsp;</i>"
			  +"</div><div ui-grid-filter></div></div>"
	  );
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, data) {

	  $scope.data = data;

	  $scope.ok = function () {
	    $uibModalInstance.close($scope.data);
	  };

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
	});
	
app.filter('decimal', function() {
	return function(amount, symbol, decimal){

		var ret = "";
			
		if( amount == null || typeof amount == "undefined"|| isNaN(amount) ){
			return "-";
		}else if( amount == 0 ){
            return amount;
		}else{
			
			decimal = parseInt(decimal,10);
			
			ret = (amount + '').replace('-','').split(".");
			decimal = typeof decimal != "undefined" ? decimal : 2;
			var bNeg = (amount+'').indexOf('-') == 0,
				regex = /(\d)(?=(\d\d\d)+(?!\d))/g;
			
			var zeros = Array(decimal+1).join('0'), 
				intPart = ret[0], 
				deciPart = (ret.length > 1 ? ret[1]	: '') + zeros;

			ret = intPart.replace(regex, "$1,")
					+ (decimal == 0 ? '' : '.'
							+ deciPart.substring(0, decimal));
			
	    	if(bNeg === true)
	    		return "-" + symbol + ret;
	    	else
	    		return symbol + ret;

		}
		return ret; 
	}
});

app.controller('myCtrl', function($scope, $rootScope, inform, $http, $uibModal) {

	$scope.columns = []; 
	$scope.activeList = [];
	$scope.isPost = false;
	$scope.url = "/pbw2.0/grid/sample.jsp";
	
	$rootScope.showLoading = false;
	
	function getGridOptions(data){
		
		var gridOptions = {
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
		        columnDefs: $scope.columns
		};
		
		return angular.copy(gridOptions);
	}
	
	function success(resp){
		
		$scope.columns = [];
		for(var i=0; i < resp.columns.length; i++){
			var col = resp.columns[i];
			
			if( col.type == "string" ){
				col.cellClass = col.cellClass||'text-left';
				col.headerCellClass = col.headerCellClass||col.cellClass;
			}
			else if( col.type == "flag" ){
				col.type = "string"
				col.cellClass = col.cellClass||'text-center';
				col.headerCellClass = col.headerCellClass||col.cellClass;
			}
			else if( col.type == "number" ){
				col.cellFilter = col.cellFilter||'decimal:"":2';
				col.cellClass = col.cellClass||'text-right';
				col.headerCellClass = col.headerCellClass||col.cellClass;
			}
			else if( col.type == "currency" ){
				col.type == "number";
				col.cellFilter = col.cellFilter||'decimal:"$":2';
				col.cellClass = col.cellClass||'text-right';
				col.headerCellClass = col.headerCellClass||col.cellClass;
			}
			else if( col.type == "boolean" ){
				col.cellClass = col.cellClass||'text-center';
				col.headerCellClass = col.headerCellClass||col.cellClass;
			}
			else if( col.type == "numberStr" ){
				col.cellClass = col.cellClass||'text-right';
				col.headerCellClass = col.headerCellClass||col.cellClass;
			}
			else {
				col.type == "string";
				col.cellClass = col.cellClass||'text-left';
				col.headerCellClass = col.headerCellClass||col.cellClass;
			}
			
			$scope.columns.push(col);
		}
		console.log($scope.columns);
		$scope.activeList = resp.list;
		$scope.gridOptions = getGridOptions('activeList');
		
		$scope.hideLoading();
	}
	
	function error(resp){
		inform.add(resp.error||'Failed to get response from server.', {
			  ttl: 2000, type: 'error'
			});
		$scope.hideLoading();
	}
	
	$scope.getServiceData = function(){
		
		$scope.showLoading();
		if($scope.url == "")
			return;
		var url = $scope.url;
		if(url.indexOf('?') == -1)
			url += '?';
		
		url += '&callback=JSON_CALLBACK';
		
		$http.jsonp(url)
		.success(success)
		.error(error);
	};
	
	$scope.showLoading = function(){
		$rootScope.showLoading = true;
	}
	$scope.hideLoading = function(){
		$rootScope.showLoading = false;
	}
	
	$scope.showHelpModel = function(){

	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: 'helpContent.html',
	      controller: 'ModalInstanceCtrl',
	      size: 'lg',
	      resolve: {
	        data: function () {
	          return null;
	        }
	      }
	    });

	    modalInstance.result.then(function (data) {
	    	
	    }, function () {
	      //$log.info('Modal dismissed at: ' + new Date());
	    });
	}

});



