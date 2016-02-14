'use strict';

define(['angular','constants','core/userInfo','views/widgets/baseWidget/baseWidget'], function(angular){
	
	angular.module("pbwApp2")
	.factory('Helper', ['$rootScope', 'CONST', 'UserInfo', 'logger', 'BaseWidget', function($rootScope, CONST, User, logger, BaseWidget) {

		return {
			getUser: function(){
				return User;
			},
			
			getConst: function(){
				return CONST;
			},

			getLogger: function(){
				return logger;
			},
			getBaseWidget: function(){
				return BaseWidget;
			},
			getWidgetTemplateUrl : function(fragment){
				return 'assets/js/views/widgets/directives/' + fragment;
			},
			formatUrl: function(url){
				return CONST.getServiceUrl(url);
			},
			parseInt: function(val){
				if(!val || isNaN(val)) return 0;
				
				return parseInt(val, 10);
			},
			
			parseFloat: function(val){
				if(!val || isNaN(val)) return 0;
				
				return parseFloat(val);
			},
			
			getStrToMilli: function(str){
				str = str.split('/');
				var d = new Date(parseInt(str[2],10), parseInt(str[0],10)-1, parseInt(str[1],10));
				return d.getTime();
			},
			
			getDateToStr: function(dt){
				return (dt.getMonth()<9?'0'+(dt.getMonth()+1):(dt.getMonth()+1))
				+'/'+(dt.getDate()<10?'0'+dt.getDate():dt.getDate())
				+'/'+dt.getFullYear();
			},
			
			getStrToDate: function(str){
				str = str.split('/');
				var d = new Date(parseInt(str[2],10), parseInt(str[0],10)-1, parseInt(str[1],10));
				return d;
			},
			
			getEOW: function(dateFormat){//End of World
				if(dateFormat)
					return new Date(2099,11,31);
				else{
					return '12/31/2099';
				}
			},
			
			showLoading: function(msg){
				//$('#loading_bar').showLoading(msg).fadeIn();
				$rootScope.showLoading = true;
				//$rootScope.loadingMsg = msg||"Loading please wait ...";
			},
			
			hideLoading: function(){
				//$('#loading_bar').fadeOut().empty();
				$rootScope.showLoading = false;
			},
			
			formatDecimal: function(amount, symbol, decimal){
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
			},
			
			formatNotationalDecimal: function(amount, symbol, decimal){
				var ret = "", suffix="";
				
				if( amount == null || typeof amount == "undefined"|| isNaN(amount) ){
					return "-";
				}else if( amount == 0 ){
		            return amount;
				}else{
					
					decimal = isNaN(decimal)||decimal==""? 2: decimal;
					if(Math.abs(amount)>=1000000000){
						amount = amount/1000000000;
						suffix = "B";
						decimal = 1;
					}
					else if(Math.abs(amount)>=1000000){
						amount = amount/1000000;
						suffix = "M";
						decimal = 1;
					}
					else if(Math.abs(amount)>=1000){
						amount = amount/1000;
						suffix = "K";
					}
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
			    		return "-" + symbol + ret + suffix;
			    	else
			    		return symbol + ret + suffix;
		
				}
				return ret; 
			}
		};
	}])
	
});