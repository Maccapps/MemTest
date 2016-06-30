/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.ls = oApp.getLs() || {};
   
    oApp.showSentences = function (bookid, chapterid) {
console.log('showSentences');
        var HTML = '';

        for (var i in oApp.ls.books.sentences[bookid][chapterid]) {
            var sentence = oApp.ls.books.sentences[bookid][chapterid][i];
            HTML += '<p class="book-list-item">';
            HTML += '<span class="jsLangSwitch show-it">';
            HTML += '<span class="it">' + sentence.it + '</span>';
            HTML += '<span class="en">' + sentence.en + '</span>';
            HTML += '</span>';
            HTML += '</p>';
        }

        $('.jsBookListHolder').html(HTML);
    };

    var chapter = oApp.ls.books.chapters[oApp.ls.books.currentBook][oApp.ls.books.currentChapter],
        HTML = '';
        HTML += '<span class="jsLangSwitch show-it">';
        HTML += '<span class="it">' + chapter.it + '</span>';
        HTML += '<span class="en">' + chapter.en + '</span>';
        HTML += '</span>';

    $('h1').html(HTML);

    if (oApp.ls.books.sentences === undefined || oApp.ls.books.sentences[oApp.ls.books.currentSentence] === undefined) {
        oApp.loadChapterAndShowSentences(oApp.ls.books.currentBook, oApp.ls.books.currentChapter);
    } else {
        oApp.showSentences(oApp.ls.books.currentBook, oApp.ls.books.currentChapter);
    }

    $('.refresh').click(function () {
        oApp.loadChapterAndShowSentences(oApp.ls.books.currentBook, oApp.ls.books.currentChapter);
    });

}());
