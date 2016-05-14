/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.setPageHeight = (function () {
        $('.page').height($('.page').height() + $(window).height() - $('body').height());
    }());

}());
