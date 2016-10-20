/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.ls = oApp.getLs() || {};
   
    oApp.ls.books.currentLang = oApp.ls.books.currentLang || 'it';

    oApp.showChapters = function (bookid) {

        var HTML = '';

        if (oApp.ls.books.chapters[bookid] !== undefined) {
            for (var i in oApp.ls.books.chapters[bookid]) {
                var chapter = oApp.ls.books.chapters[bookid][i];
                HTML += '<p class="book-list-item">';
                HTML += '<span class="list-link jsShowChapter">' + i + '</span>';
                HTML += '<span class="jsLangSwitch show-' + oApp.ls.books.currentLang + '">';
                HTML += '<span class="it">' + chapter.it + '</span>';
                HTML += '<span class="en">' + chapter.en + '</span>';
                HTML += '</span>';
                HTML += '</p>';
            }
        }

        $('.jsBookListHolder').html(HTML);
    };

    var book = oApp.ls.books.books[oApp.ls.books.currentBook],
        HTML = '';
        HTML += '<span class="jsLangSwitch show-' + oApp.ls.books.currentLang + '">';
        HTML += '<span class="it">' + book.it + '</span>';
        HTML += '<span class="en">' + book.en + '</span>';
        HTML += '</span>';

    $('h1').html(HTML);

    if (oApp.ls.books.chapters === undefined || oApp.ls.books.chapters[oApp.ls.books.currentBook] === undefined) {
        oApp.loadBookAndShowChapters(oApp.ls.books.currentBook);
    } else {
        oApp.showChapters(oApp.ls.books.currentBook);
    }

    $('.refresh').click(function () {
        oApp.loadBookAndShowChapters(oApp.ls.books.currentBook);
    });

}());
