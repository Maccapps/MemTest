/*globals $, Clipboard*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.q = '';

    oApp.localStorageName = 'italian-snippets';

    oApp.ls = oApp.getLs() || {};

    new Clipboard('#clipboardTarget');

    oApp.loadDataAndStart = function () {
        $.getJSON(oApp.jsonFeedUrlBase + 'italian/snippets', function (json) {
            oApp.ls.snippets = oApp.ls.snippets || {};
            oApp.ls.snippets = json;
            oApp.setLs(oApp.ls);
            oApp.start();
        });
    };

    oApp.settings = oApp.settings || {};
    oApp.settings.pronouns = [true, false, false, false, false, false];



    oApp.setPronounButtons = function () {
        $('.jsPronounHolder .jsPronouns').each(function (idx) {
            if (oApp.settings.pronouns[idx] === true) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    };

    oApp.start = function () {
        //oApp.setPronounButtons();
    };

    oApp.doSearch = function () {

        if (oApp.q === '') {
            return oApp.emptySearch();
        }

        var q = oApp.q,
            tLoop = oApp.ls.snippets,
            tItem,
            vLoop,
            vItem,
            pLoop,
            pItem,
            results = [];


        $('#results').html('');

        for (tItem in tLoop) {
            vLoop = tLoop[tItem];
            for (vItem in vLoop) {
                if (q === tItem || (vLoop[vItem].en.toLowerCase().indexOf(q) > -1 || vLoop[vItem].it.toLowerCase().indexOf(q) > -1)) {
                    results[tItem] = results[tItem] || [];
                    results[tItem].push(vLoop[vItem]);
                }
            }
        }
        oApp.outputResults(results);

    };

    oApp.outputResults = function (results) {
        var vLoop,
            tItem,
            vItem,
            HTML = '';

        for (tItem in results) {
            HTML += '<div class="type"><h2>' + tItem + '</h2>';
            vLoop = results[tItem];
            for (vItem in vLoop) {
                HTML += '<div class="item"><p class="en">' + vLoop[vItem].en + '</p><p class="it">' + vLoop[vItem].it + '</p></div>';
            }
            HTML += '</div>';
        }

        $('#results').html(HTML);
    };

    oApp.emptySearch = function () {
        var tLoop = oApp.ls.snippets,
            hasPronouns,
            vLoop,
            pLoop,
            results = [],
            pItem,
            tItem;

        $('#results').html('');

        for (tItem in tLoop) {
            hasPronouns = tLoop[tItem].hasPronouns;
            vLoop = tLoop[tItem];
            results[tItem] = results[tItem] || [];
            results[tItem].push(vLoop[0]);
  
        }
        oApp.outputResults(results);

    };

    if (oApp.ls.snippets === undefined) {
        oApp.loadDataAndStart();
    } else {
        oApp.start();
    }

    $('.refresh').click(function () {
        oApp.loadDataAndStart();
        oApp.doSearch();
    });

    $('.jsSearchInput').keyup(function () {
        var el = $(this),
            q = el.val().toLowerCase();

        oApp.q = q;
        oApp.doSearch();
    });

    $('.jsPronounHolder .jsPronouns').click(function () {
        var el = $(this),
            isActive = !el.hasClass('active'),
            idx = $('.jsPronounHolder .jsPronouns').index(el);

        el.toggleClass('active');
        oApp.settings.pronouns[idx] = isActive;
        oApp.setPronounButtons();
        oApp.doSearch();
    });

    $('#results').on('click', 'h2', function () {
        var el = $(this),
            type = el.html();

        $('.jsSearchInput').val(type);
        oApp.q = type;
        oApp.doSearch();
    });

    $('.jsClearInput').click(function () {
        $('.jsSearchInput').val('');
        oApp.q = '';
        $('.jsSearchInput').focus();
        oApp.doSearch();
    });

    oApp.doSearch();

    $('#results').on('click', '.item p', function () {
        var el = $(this),
            val = el.html();

        $('#clipboardTarget').html(val).trigger('click');
    });

}());
