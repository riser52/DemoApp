define(['angular', 'views/widgets/services/regCapService'], function(angular){
	
	var RegCap = angular.module('pbwApp2')
	.directive('wgtRegcap', ['$http', '$timeout', 'Helper', 'RegCapService', function($http, $timeout, Helper, RegCapService){
		
		return Helper.getBaseWidget().extend({
			restrict: 'C',
			scope:{
				
			},
			cssClass: "col-xs-12 regcap",
			templateUrl: 'assets/js/views/widgets/directives/regcap/regcap.html',
			link: function($scope, elem, attr){
				
				$scope.updateAllowed = true; //Helper.getUser().checkUpdate("ratealerts"); 
				$scope.chartConfig = null;
				
				$scope.list = {"missingPositions" : 100, 
						"tradeBreaks" : 10,
						"watchListAlerts" : 5,
						"rateAlerts" : 26,
						"revenueOpportunity" : 2345400,
						"newShorts" : 35,
						"newLongs" : 27,
						"cashWiresIn" : 48,
						"cashWiresOut" : 32,
						"supplyTightening" : 8,
						"supplyEasing" : 15,
						"locatesNeedAction" : 15,
						"negativeNetRevenue" : 3200
				}
				
				$scope.t1 = new Date();
				$scope.t2 = new Date();
				$scope.t3 = new Date();
				$scope.t1.setDate($scope.t1.getDate()+1);
				$scope.t2.setDate($scope.t2.getDate()+2);
				$scope.t3.setDate($scope.t3.getDate()+3);
				
			    function getChartConfig(){
					var outerRim = [], revRim = [], regCap = [];
				    
				    for(var i =0; i < 100; i++ ){
				    	outerRim.push({color: i%5==0?'#999':'transparent', y: i%5==0?1:6, name: (i+1)*100});
				    }
				    
				    return {

			            chart: {
			            	type: 'pie',
			                backgroundColor: 'transparent',
			                height: 160,
			                margin: [0,0,0,0]
			            },

			            title: {
			            	text: "$640M",
			            	y: 70
			            },
			            subtitle:{
			            	text: "TODAY",
			            	y: 85,
			            	style:{
			            		fontSize: '11px'
			            	}
			            },

			            tooltip: {
			                enabled: true,
	                        formatter: function(){
	                        	return "<span>Today's Reg Cap: <b> $640M</b></span>";
	                        }
			            },

			            // the value axis
			            yAxis: {

			            },
			            credits: {
			                enabled: false
			            },

			            plotOptions: {
			            	pie: {
			                    shadow: false,
			                    center: ['50%', '50%']
			                }
			            },
			            series: [{
			                name: "Reg Cap",
			                data: [{
			                	name: "Today",
			                	y: 64,
			                	color: 'green'
			                }, {
			                	y: 36,
			                	color: '#eee'
			                }],
			                borderWidth: 0,
			                size: '85%',
			                innerSize: '80%',
			                states:{
				            	hover:{
				              	enabled: false
				              }
				            },
			                dataLabels: {
			                	enabled: false
			                }
			            },{
			                name: "Reg Cap",
			                data: [{
			                	name: 'empty',
			                	y: 69.8,
			                	color: 'transparent'
			                }, {
			                	name: "700",
			                	y: 0.4,
			                	color: 'red'
			                }, {
			                	name: 'empty',
			                	y: 29.8,
			                	color: 'transparent'
			                }],
			                borderWidth: 0,
			                size: '85%',
			                innerSize: '75%',
			                states:{
				            	hover:{
				              	enabled: false
				              }
				            },
			                dataLabels: {
			                	enabled: true,
			                    formatter: function () {
			                    	if(this.point.name=='empty')
			                    		return null;
			                    	else
			                    		return '$'+this.point.name+'M';
			                    },
			                    connectorPadding: 0,
			                    softConnector: true,
			                    padding: 0,
			                    //reserveSpace: false,
			                    //color: '#ffffff',
			                    x: 12,
			                    y: 15,
			                    //,
			                    distance: 10
			                }
			            }],
			        }
			    };
			    
			    $timeout(function(){
			    	$scope.chartConfig = getChartConfig();
			    }, 200);
			}
		});
		
	}]);
	
	return RegCap;
})

/*
			    {
				        chart: {
				            type: 'pie',
				            height: 170,
				            //width: 170,
				            margin:[0,0,0,0],
				            spacing:[0,0,0,0],
				            backgroundColor: 'transparent'
				        },
				        title: {
				            text: '640M',
				            style:{
				            	fontSize: '20px',
				            	fontWeight: 'bold'
				            },
				            y: 90
				        },
				        subtitle:{
				        	text:"Today's Reg Cap",
				            style:{
				            	fontSize: '12px',
				            	color: '#bbb'
				            },
				            y: 107
				        },
				        yAxis: {
				            title: {
				                text: ' '
				            }
				        },
				        exporting:{
				        	enabled: false
				        },
				        credits:{
				        	enabled: false
				        },
				        plotOptions: {
				            pie: {
				                shadow: false,
				                center: ['50%', '50%']
				            }
				        },
				        tooltip: {
				        	enabled: false,
				            valueSuffix: '%'
				        },
				        series: [{
				        	animation: false,
				            name: 'Reg Cap',
				            data: [{color: '#444', y:640}, {color: 'transparent', y: 360}],
				            size: '124px',
				            innerSize: '119px',
				            borderWidth: 0,
				            dataLabels: {
				                enabled: false
				            },
				            reversed: true,
				            states:{
				            	hover:{
				              	enabled: false
				              }
				            }
				        },{
				        	animation: false,
				            name: 'Revenue',
				            data: [{color: '#6BFF74', y: 700}, {color: '#FF3131', y: 300}],
				            size: '140px',
				            borderWidth: 0,
				            innerSize: '130px',
				            dataLabels: {
				            		enabled: false
				            },
				            states:{
				            	hover:{
				              	enabled: false
				              }
				            }
				        },{
				        	animation: false,
				            name: '',
				            data: outerRim,
				            borderWidth: 0,
				            size: '155px',
				            innerSize: '145px',
				            dataLabels: {
				            	enabled: true,
				            },
				            reversed: true,
				            states:{
				            	hover:{
				              	enabled: false
				              }
				            }
				        }]
				    }; 
 
*/

/*

{

			            chart: {
			                type: 'solidgauge',
                      height: 170
			            },

			            title: null,

			            pane: {
			                center: ['50%', '50%'],
			                size: '100%',
			                startAngle: 0,
			                endAngle: 360,
			                background: {
			                    backgroundColor: 'transparent',
			                    innerRadius: '95%',
			                    outerRadius: '95%',
			                    shape: 'arc'
			                }
			            },

			            tooltip: {
			                enabled: true,
                      formatter: function(){
                      	return '<span>' + this.series.name + ': <b> ' + this.y + 'M</b></span>';
                      }
			            },

			            // the value axis
			            yAxis: {
                      lineWidth: 0,
                      min: 0,
                      max: 1000,
											offset: 10,
                      minorTickWidth: 0,

                      tickPixelInterval: 20,
                      tickWidth: 1,
                      tickPosition: 'inside',
                      tickLength: 5,
                      tickColor: '#666',
                      labels: {
                      		enabled: false,
                          step: 2,
                          rotation: 'auto'
                      },
                      title: {
                          text: ' '
                      },
                      plotBands: [{
                      		thickness: 7,
                      		//innerRadius: 65,
                          from: 0,
                          to: 700,
                          color: '#31FF3E' // green
                      }, {
                      	  thickness: 7,
                     		  //innerRadius: 65,
                          from: 701,
                          to: 1000,
                          color: '#FF3131' // red
                      }]
			            },
			            credits: {
			                enabled: false
			            },

			            plotOptions: {
			                solidgauge: {
			                    dataLabels: {
                              enabled: true,
			                        y: 5,
			                        borderWidth: 0,
			                        useHTML: true
			                    }
			                }
			            },
			            series: [{
			                name: 'Reg Cap',
			                data: [{y: 640, radius: 86, innerRadius: 81, color: '#777'}],
			                dataLabels: {
                          y: -25,
                          enabled: true,
			                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
			                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}M</span><br />' +
			                           '<span style="font-size:12px;color:silver">TODAY</span></div>'
			                },
			                tooltip: {
			                    valueSuffix: 'M'
			                }
			            }],
			        }
*/