'use strict';

define([ 'angular'
       //  ,'agGrid'
         ,'core/filters'
         ,'views/widgets/services/profileGroupService'
         ,'views/widgets/services/widgetService'
         ,'views/widgets/directives/widget'
         ,'views/widgets/services/accrualService'
         ,'views/accruals/gridColumnFactory'
         ], function(angular, AgGrid) {
	return angular.module('pbwApp2')
	.controller('AccrualsCtrl',
	    [
	        'Helper',
	        '$scope',
	        '$rootScope',
	        '$location',
	        '$http',
	        '$timeout',
	        '$q',
	        'inform',
	        'WidgetService',
	        'ProfileGroupService',
	        'EventService',
	        'AccrualService',
	        'GridColumnFactory',
        function(Helper, $scope, $rootScope, $location, $http, $timeout, $q, inform, WidgetService, ProfileGroupService, EventService, AccrualService, GridColumnFactory) {
	        	
	        	
	        	$scope.pageParams = {};
	        	
	        	$scope.activeList = AccrualService.get();
	        	console.log($scope.activeList);
	        	
	        	$scope.routeWatch = $scope.$watch(function(){ return $location.search(); }, function(newVal, oldVal){
        			$scope.pageParams = newVal;
        			
        			console.log($scope.pageParams.view);
        			if($scope.pageParams.view == 'client')
    					$scope.gridOptions = GridColumnFactory.getConfig('client', $scope.activeList);
    				else if($scope.pageParams.view == 'channel')
    					$scope.gridOptions = GridColumnFactory.getConfig('channel', $scope.activeList);
    				else if($scope.pageParams.view == 'account')
    					$scope.gridOptions = GridColumnFactory.getConfig('account', $scope.activeList);
            	
	        	});
	        	
	        	$scope.$on('$destroy', function(){
	        		$scope.routeWatch();
	        	});
	        	
	        	console.log($scope.pageParams);
	        	
	        	
	        	
	        	$scope.minDate = '01/19/2016';
	        	$scope.maxDate = '01/20/2016';
	        	 $scope.today = function() {
	        		    $scope.dt = new Date();
	        		  };
	        		  $scope.today();

	        		  $scope.clear = function() {
	        		    $scope.dt = null;
	        		  };

	        		  // Disable weekend selection
	        		  $scope.disabled = function(date, mode) {
	        		    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
	        		  };

	        		  $scope.toggleMin = function() {
	        		    $scope.minDate = $scope.minDate ? null : new Date();
	        		  };

	        		  $scope.toggleMin();
	        		  $scope.maxDate = new Date(2020, 5, 22);

	        		  $scope.open1 = function() {
	        		    $scope.popup1.opened = true;
	        		  };

	        		  $scope.open2 = function() {
	        		    $scope.popup2.opened = true;
	        		  };

	        		  $scope.setDate = function(year, month, day) {
	        		    $scope.dt1 = new Date(year, month, day);
	        		    $scope.dt2 = new Date(year, month, day);
	        		  };

	        		  $scope.dateOptions = {
	        		    formatYear: 'yy',
	        		    startingDay: 1
	        		  };

	        		  $scope.formats = ['MM/dd/yyyy','dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	        		  $scope.format = $scope.formats[0];
	        		  $scope.altInputFormats = ['M!/d!/yyyy'];

	        		  $scope.popup1 = {
	        		    opened: false
	        		  };

	        		  $scope.popup2 = {
	        		    opened: false
	        		  };

	        		  var tomorrow = new Date();
	        		  tomorrow.setDate(tomorrow.getDate() + 1);
	        		  var afterTomorrow = new Date();
	        		  afterTomorrow.setDate(tomorrow.getDate() + 1);
	        		  $scope.events =
	        		    [
	        		      {
	        		        date: tomorrow,
	        		        status: 'full'
	        		      },
	        		      {
	        		        date: afterTomorrow,
	        		        status: 'partially'
	        		      }
	        		    ];

	        		  $scope.getDayClass = function(date, mode) {
	        		    if (mode === 'day') {
	        		      var dayToCheck = new Date(date).setHours(0,0,0,0);

	        		      for (var i = 0; i < $scope.events.length; i++) {
	        		        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

	        		        if (dayToCheck === currentDay) {
	        		          return $scope.events[i].status;
	        		        }
	        		      }
	        		    }

	        		    return '';
	        		  };
	        		  
	        		  
	        		  
	        		  
	        		  
	        		$scope.optionsText = "Selected: All";
	              	$scope.optionsNextText = "";
	              	$scope.optionsPrevText = "";
	              	$scope.options = [{name: "All", selected: true, caption: "All"},
	              	                 {name: "Cash Credit", selected: true},
	              	                 {name: "Cash Debit", selected: true},
	              	                 {name: "Short", selected: true},
	              	                 {name: "PTH - Access Fee", selected: true},
	              	                 {name: "Type 1 Short", selected: true},
	              	                 {name: "MLP", selected: true}];
	              	
	              //	$scope.colorShades = ['yellow', 'orange', 'red', '#3687FF', '#4E9FA5', '#F26522', '#676766', '#2C4D75', '#C0504D', '#0247FE'];
	        		  $scope.toggled = function(open){
	                  	if(!open && $scope.optionsPrevText != $scope.optionsNextText){
	                  		
	                  		$timeout(function(){
	                  			$scope.optionsPrevText = $scope.optionsNextText;
	                      		
	                  		});
	                  	}
	                  }
	                  
	                  $scope.setSelected = function($event, opt){
	                  	$event.stopPropagation();
	                  	$event.preventDefault();
	                  	var selected = [], isAll = false;
	                  	opt.selected = !!!opt.selected;
	                  	isAll =(opt.name == "All" && opt.selected===true);
	                  	$scope.optionsNextText = "";
	                  	
	                  	if(opt.name != "All")
	          				$scope.options[0].selected = false;
	                  	
	              		for(var i=1; i < $scope.options.length; i++){
	              			if(opt.name == "All")
	              				$scope.options[i].selected = opt.selected;
	              			else
	              				$scope.options[0].selected = false;
	              			
	              			if($scope.options[i].selected===true){
	              				$scope.optionsNextText += $scope.options[i].name;
	              				selected.push($scope.options[i]);
	              			}
	              		}
	              		//if(selected.length == scope.options.length-1)
	              		//	scope.options[0].selected = true;

	              		if($scope.options[0].selected===true){
	              			$scope.optionsNextText = "";
	              			$scope.optionsText = "Selected: " + $scope.options[0].caption||$scope.options[0].name;
	              		}else if(selected.length > 0)
	              			$scope.optionsText = "Selected: ("+ selected.length +")";
	              		else 
	              			$scope.optionsText = "Selected: None";
	                  }
	        	
	                  $scope.difficultyOptionsText = "Selected: All";
	                  $scope.difficultiOptionsNextText = "";
		              $scope.dificultyOptionsPrevText = "";
	                  $scope.difficultyOptions = [{name: "All", selected: true, caption: "All"},
	     		              	                 {name: "Easy", selected: true},
	     		              	                 {name: "Medium", selected: true},
	     		              	                 {name: "Hard", selected: true},
	     		              	                 {name: "Super", selected: true}];
	                  
	                  $scope.diffToggled = function(open){
		                  	if(!open && $scope.difficultyOptionsPrevText != $scope.difficultyOptionsNextText){
		                  		
		                  		$timeout(function(){
		                  			$scope.difficultyOptionsPrevText = $scope.difficultyOptionsNextText;
		                      		
		                  		});
		                  	}
		                  }
	                  
	                  $scope.setDiffSelected = function($event, opt){
		                  	$event.stopPropagation();
		                  	$event.preventDefault();
		                  	var selected = [], isAll = false;
		                  	opt.selected = !!!opt.selected;
		                  	isAll =(opt.name == "All" && opt.selected===true);
		                  	$scope.difficultyOptionsNextText = "";
		                  	
		                  	if(opt.name != "All")
		          				$scope.difficultyOptions[0].selected = false;
		                  	
		              		for(var i=1; i < $scope.difficultyOptions.length; i++){
		              			if(opt.name == "All")
		              				$scope.difficultyOptions[i].selected = opt.selected;
		              			else
		              				$scope.difficultyOptions[0].selected = false;
		              			
		              			if($scope.difficultyOptions[i].selected===true){
		              				$scope.difficultyOptionsNextText += $scope.difficultyOptions[i].name;
		              				selected.push($scope.difficultyOptions[i]);
		              			}
		              		}
		              		//if(selected.length == scope.options.length-1)
		              		//	scope.options[0].selected = true;

		              		if($scope.difficultyOptions[0].selected===true){
		              			$scope.difficultyOptionsNextText = "";
		              			$scope.difficultyOptionsText = "Selected: " + $scope.difficultyOptions[0].caption||$scope.difficultyOptions[0].name;
		              		}else if(selected.length > 0)
		              			$scope.difficultyOptionsText = "Selected: ("+ selected.length +")";
		              		else 
		              			$scope.difficultyOptionsText = "Selected: None";
		                  }
		        	
        } 
	        ]
	);

});