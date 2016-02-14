'use strict';

define(['angular'], function(angular) {
	
	angular.module('pbwApp2')
	.factory('SocketFactory', ['$location' 
	                       ,'$q' 
	                       ,'$timeout'
	                       ,'CONST'
	                       ,'logger' 
    ,function($location, $q, $timeout, CONST, logger){
	  
		var topics = {},
	  		defer = null,
	  		socketConnection = null, 
	  		stompClient = null, 
	  		connected = false;

	  
		function disconnect() {
			if(stompClient){
				stompClient.disconnect(function(){
					stompClient = null;
					socketConnection = null;
					connected = false;
					logger.debug("Socket Disconnected");
				});
			}
		};
	  
		function connect() {
			
			//disconnect();
    	  
			defer = $q.defer();
    	  
			logger.debug('STOMP: Attempting connection');
			socketConnection = new SockJS(CONST.SERVICE_BASE_URL + 'ws/', ['websocket','xhr-polling']);
			stompClient = Stomp.over(socketConnection);
			stompClient.debug = false;
			stompClient.connect({}, 
								function(frame) {
									connected = true;
									defer.resolve();
									logger.debug('Socket Connected: ' + frame);
								},
								function(error) {
									connected = false;
									socketConnection = null;
									stompClient = null;
									defer.reject();
									logger.debug('Socket Disconnected: ' + error);
									logger.debug('Socket Re connecting in: 1 sec');
									setTimeout(connect, 10000);
								}
			);
		};

		function register(key){

			if(typeof topics[key] !== "undefined"){
				return topics[key];
			}

			if(! CONST.SOCKET.MAP[key]){
				logger.debug("INVALID key requested "+ key);
				return null;
			}

			// Make Socket connection
			if(!socketConnection){
				connect();
			}

			topics[key] = (function(){

				var receiveHandlers = [],
					errorHandlers = [];

				defer.promise.then(function(){
					stompClient.subscribe(CONST.SOCKET.MAP[key].RECEIVE, function(calResult){
						logger.console("received message" + calResult.body);
						if(calResult.body){
							var msg = angular.fromJson(calResult.body);
						
							// $timeout(function(){
							for(var i in receiveHandlers){
								receiveHandlers[i].call(this, msg);
							}
							msg = null;
							// }, 0);
						} else {
							logger.debug("Empty message received");
						}
					}); //End of stompClient
				}); //End of defer


				return {
					registerReceiveHandler: function(handler){
						if(handler) receiveHandlers.push(handler);
					},
					registerErrorHandler: function(handler){
						if(handler) errorHandlers.push(handler);		
					},
					removeHandler: function(receive, error){
						if(receive){
							for(var i = 0; i < receiveHandlers.length; i++){
								if(receiveHandlers[i] == receive){
									receiveHandlers.splice(i,1);
									logger.console("Removed receive listener");
								}
							}
						}
						if(error){
							for(var i = 0; i < errorHandlers.length; i++){
								if(errorHandlers[i] == error){
									errorHandlers.splice(i,1);
									logger.console("Removed error listener");
								}
							}
						}
					},
					post: function(message){
						if(connected === true){
							if(typeof message != "string")
								message = JSON.stringify(message);
							try{
								// start the transaction
								var tx = stompClient.begin();
								// send the message in a transaction
								stompClient.send(CONST.SOCKET.MAP[key].SEND, {transaction: tx.id}, message);
								// commit the transaction to effectively send the
								// message
								tx.commit();
								return true;
								
							}catch(e){
								return false;
							}
						} //End of if connected
						else{
							//If not connected return false
							return false;
						}
					}
				}; //End of return
			})(); //End of defining topic
		};

		return angular.merge(
			{},
			CONST.SOCKET, 
			{
				get: function(key){ 
					register(key);
					// logger.debug("Registered for key :: "+ key);
					return register(key); 
				}
			}
		); //end of return object
		
	}]) //End of WsFactory
	
});