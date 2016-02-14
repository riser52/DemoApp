'use strict';

define(['angular'], function(angular) {

    angular.module('pbwApp2')
        .service('LendingMarketService', ['$http', 'Helper', function($http, Helper) {
            var list = [
                    {"symbol":"RIG", onLoan:1233465, delta: 543245},
                    {"symbol":"IBM", onLoan:462568, delta:-4658},
                    {"symbol":"AAPL", onLoan:2135489, delta:-468423},
                    {"symbol":"QVT", onLoan:164318, delta: 465682},
                    {"symbol":"DDD", onLoan:86401304, delta: 456828},
                    /*{"symbol":"TSLA", onLoan:1684238, delta:-123845},
                    {"symbol":"VGIT", onLoan:164531, delta: 64354},
                    {"symbol":"GPRO", onLoan:2135123, delta:-456},
                    {"symbol":"AUD", onLoan:32054658, delta:-45645},
                    {"symbol":"AWG", onLoan:5498789, delta:-4865},
                    {"symbol":"AZM", onLoan:549721, delta: 45968},
                    {"symbol":"AZN", onLoan:4651384, delta:-1235},
                    {"symbol":"BAM", onLoan:84065651, delta: 46854},
                    {"symbol":"BBD", onLoan:188465, delta: 243245},
                    {"symbol":"BDT", onLoan:8486851, delta: 443245},
                    {"symbol":"BEF", onLoan:855355, delta:-65245}*/
                ];

            list.forEach(function(d){
                d.percentChange = 100 * d.delta / (d.onLoan + d.delta);
            });

            //this.load = function(){
             //   return loader;
            //};
            this.get = function(){
                return list;
            };
            this.destroy = function(){
                list = null;
                return this;
            };

        }])

});