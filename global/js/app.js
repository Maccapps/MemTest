/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.localStorageName = 'change-this-local-storage-name';

    oApp.isBrowser = document.URL.indexOf( 'http://' ) === 0 || document.URL.indexOf( 'https://' ) === 0;

    oApp.jsonFeedUrlBase = oApp.isBrowser ? 'http://local.isig.co.uk/json/' : 'http://www.isig.co.uk/json/';

    oApp.getLs = function () {
        var ls = localStorage.getItem(oApp.localStorageName);
        return JSON.parse(ls);
    };

    oApp.setLs = function (data) {
        localStorage.setItem(oApp.localStorageName, JSON.stringify(data));
    };

    oApp.setPageHeight = (function () {
        $('.page').height($('.page').height() + $(window).height() - $('body').height());
    }());

    oApp.rand = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    oApp.setLocatioSearchGet = (function () {
        location.GET = {
            arr: [],
            obj: {}
        };
        if (location.search === '') {
            return false;
        }
        var string = location.search.substr(1),
            pairs = string.split('&');

        for (var i in pairs) {
            var keyVals = pairs[i].split('='),
                key = keyVals[0],
                val = keyVals[1],
                thisObj = {
                    key: key,
                    value: val
                };
            location.GET.arr.push(thisObj);
            location.GET.obj[key] = val;
        }
    }());

}());
