/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.ls = oApp.getLs() || {};
   
    $('body').on('click', '.jsLinkBooks', function () {

        if (oApp.ls.books === undefined || oApp.ls.books.list === undefined || oApp.ls.books.current === undefined) {
            window.location = 'books-list.php';
        }

        return false;
    });

}());
