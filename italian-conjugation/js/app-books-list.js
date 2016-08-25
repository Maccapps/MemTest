/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.ls = oApp.getLs() || {};
   
    oApp.showList = function () {

        var HTML = '';

        for (var i in oApp.ls.books.books) {
            HTML += '<p class="book-list-item">';
            HTML += '<span class="list-link jsShowBook">' + i + '</span>';
            HTML += '<span class="jsLangSwitch show-it">';
            HTML += '<span class="it">' + oApp.ls.books.books[i].it + '</span>';
            HTML += '<span class="en">' + oApp.ls.books.books[i].en + '</span>';
            HTML += '</span>';
            HTML += '</p>';
        }

        $('.jsBookListHolder').html(HTML);
    };


    if (oApp.ls.books === undefined) {
        oApp.loadBooksAndShowList();
    } else {
        oApp.showList();
    }

    $('.refresh').click(function () {
        oApp.loadBooksAndShowList();
    });

}());
