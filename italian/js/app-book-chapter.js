/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.ls = oApp.getLs() || {};
   
    oApp.showSentences = function (bookid, chapterid) {
        console.log('showSentences', bookid, chapterid);
        var HTML = '',
            paragraphIdx = 1;

        if (oApp.ls.books.sentences[bookid] !== undefined) {
            for (var i in oApp.ls.books.sentences[bookid][chapterid]) {
                var sentence = oApp.ls.books.sentences[bookid][chapterid][i],
                    classes = ['new-paragraph-marker'];
                if (sentence.np !== undefined && sentence.np === true) {
                    classes.push('new-paragraph');
                }
                if (paragraphIdx == 1 || (sentence.np !== undefined && sentence.np === true)) {
                    HTML += '<p class="' + classes.join(' ') + '">paragraph '+paragraphIdx+'</p>';
                    paragraphIdx++;
                }
                HTML += '<p class="book-list-item">';
                HTML += '<span class="jsLangSwitch show-it">';
                HTML += '<span class="it">' + sentence.it + '</span>';
                HTML += '<span class="en">' + sentence.en + '</span>';
                HTML += '</span>';
                HTML += '</p>';
            }
        }
        oApp.ls.books.currentSentence = oApp.ls.books.currentSentence || 1;
        oApp.setLs(oApp.ls);

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
