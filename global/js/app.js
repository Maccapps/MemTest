/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.setPageHeight = (function () {
        $('.page').height($('.page').height() + $(window).height() - $('body').height());
    }());

    oApp.rand = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

}());
