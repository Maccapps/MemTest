/*globals $, Clipboard*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.q = '';

    oApp.localStorageName = 'italian-conjugations';

    oApp.ls = oApp.getLs() || {};

    //new Clipboard('#clipboardTarget');

    oApp.loadDataAndStart = function () {
        console.log('loadDataAndStart');
        $.getJSON(oApp.jsonFeedUrlBase + 'italian/conjugations', function (json) {
            oApp.ls.conjugations = oApp.ls.conjugations || {};
            oApp.ls.conjugations = json;
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
        oApp.setPronounButtons();
    };

    oApp.doSearch = function () {

        if (oApp.q === '') {
            return oApp.emptySearch();
        }

        var q = oApp.q,
            tLoop = oApp.ls.conjugations,
            tItem,
            hasPronouns,
            vLoop,
            vItem,
            pLoop,
            pItem,
            results = [];


        $('#results').html('');

        for (tItem in tLoop) {
            //console.group(tItem);
            hasPronouns = tLoop[tItem].hasPronouns;
            vLoop = tLoop[tItem].data;
            for (vItem in vLoop) {
                if (hasPronouns === false) {
                    if (q === tItem || (vLoop[vItem].en.toLowerCase().indexOf(q) > -1 || vLoop[vItem].it.toLowerCase().indexOf(q) > -1)) {
                        results[tItem] = results[tItem] || [];
                        results[tItem].push(vLoop[vItem]);
                    }
                } else {
                    pLoop = vLoop[vItem];
                    for (pItem in pLoop) {
                        if (oApp.settings.pronouns[pItem] === true && q === tItem || ((pLoop[pItem].en.toLowerCase().indexOf(q) > -1 || pLoop[pItem].it.toLowerCase().indexOf(q) > -1))) {
                            results[tItem] = results[tItem] || [];
                            results[tItem].push(pLoop[pItem]);
                        }
                    }
                }
            }
            //console.groupEnd();
        }
        //console.log(results);
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
                //console.log(tItem, vLoop[vItem]);
                HTML += '<div class="item"><p class="en">' + vLoop[vItem].en + '</p><p class="it">' + vLoop[vItem].it + '</p></div>';
            }
            HTML += '</div>';
        }

        $('#results').html(HTML);
    };

    oApp.emptySearch = function () {
        var tLoop = oApp.ls.conjugations,
            hasPronouns,
            vLoop,
            pLoop,
            results = [],
            pItem,
            tItem;

        $('#results').html('');

        for (tItem in tLoop) {
            hasPronouns = tLoop[tItem].hasPronouns;
            vLoop = tLoop[tItem].data;
            results[tItem] = results[tItem] || [];
            if (hasPronouns === false) {
                results[tItem].push(vLoop[0]);
            } else {
                pLoop = vLoop[0];
                for (pItem in pLoop) {
                    if (oApp.settings.pronouns[pItem] === true) {
                        results[tItem].push(vLoop[0][pItem]);
                    }
                }
            }
        }
        oApp.outputResults(results);

    };

    if (oApp.ls.conjugations === undefined) {
        oApp.loadDataAndStart();
    } else {
        oApp.start();
    }

    $('.refresh').click(function () {
        oApp.loadDataAndStart();
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
        oApp.doSearch();
    });

    oApp.doSearch();

    $('#results').on('click', '.item p', function () {
        var el = $(this),
            val = el.html();

        $('#clipboardTarget').html(val).trigger('click');
    });

}());
