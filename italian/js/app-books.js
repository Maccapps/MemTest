/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.ls = oApp.getLs() || {};
   
    oApp.loadBooksAndShowList = function () {
        $.getJSON('http://local.isig.co.uk/json/italian-books/list', function (json) {
            oApp.ls.books = oApp.ls.books || {};
            oApp.ls.books.books = json.data.books;
            oApp.setLs(oApp.ls);
            oApp.showList();
        });
    };

    oApp.loadBookAndShowChapters = function (bookid) {
        $.getJSON('http://local.isig.co.uk/json/italian-books/list-chapters/' + bookid, function (json) {
            oApp.ls.books.chapters = oApp.ls.books.chapters || {};
            oApp.ls.books.chapters[bookid] = json.data.chapters;
            oApp.setLs(oApp.ls);
            oApp.showChapters(bookid);
        });
    };

    oApp.loadChapterAndShowSentences = function (bookid, chapterid) {
        $.getJSON('http://local.isig.co.uk/json/italian-books/list-sentences/' + bookid + '/' + chapterid, function (json) {
            oApp.ls.books.sentences = oApp.ls.books.sentences || {};
            oApp.ls.books.sentences[bookid] = oApp.ls.books.sentences[bookid] || {};
            oApp.ls.books.sentences[bookid][chapterid] = json.data.sentences;
            oApp.setLs(oApp.ls);
            oApp.showSentences(bookid, chapterid);
        });
    };



    $('body').on('click', '.jsLangSwitch', function () {
        var el = $(this);

        el.toggleClass('show-en show-it');
        return false;
    });

    $('body').on('click', '.jsShowBook', function () {
        var id = $(this).html();
        oApp.ls.books.currentBook = id;
        oApp.setLs(oApp.ls);
        window.location = 'book-list-chapters.php';
    });

    $('body').on('click', '.jsShowChapter', function () {
        var id = $(this).html();
        oApp.ls.books.currentChapter = id;
        oApp.setLs(oApp.ls);
        window.location = 'book-chapter.php';
    });

}());
