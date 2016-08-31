/*globals $, Clipboard*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.q = '';

    oApp.localStorageName = 'italian-conjugations';

    oApp.ls = oApp.getLs() || {};

    new Clipboard('#clipboardTarget');

    oApp.loadDataAndStart = function () {
        $.getJSON(oApp.jsonFeedUrlBase + 'italian/conjugations', function (json) {
            oApp.ls.conjugations = oApp.ls.conjugations || {};
            oApp.ls.conjugations = json;
            oApp.setLs(oApp.ls);
            oApp.start();
        });
    };

    oApp.settings = oApp.settings || {};
    oApp.settings.pronouns = [true, false, false, false, false, false];
    oApp.settings.tenses = {};
    oApp.settings.tenses['present - regular'] = {it: 'Il presente)', show: true};
    oApp.settings.tenses['present - irregular'] = {it: 'Il presente)', show: true};
    oApp.settings.tenses['present perfect - regular'] = {it: 'Il passato prossimo)', show: true};
    oApp.settings.tenses['present perfect - irregular'] = {it: 'Il passato prossimo)', show: true};
    oApp.settings.tenses['imperfect - regular'] = {it: 'l\'imperfetto)', show: true};
    oApp.settings.tenses['imperfect - irregular'] = {it: 'l\'imperfetto)', show: true};
    oApp.settings.tenses['future - regular'] = {it: 'Il futuro semplice)', show: true};
    oApp.settings.tenses['future - irregular'] = {it: 'Il futuro semplice)', show: true};



    oApp.settings.tenses['conditional past - irregular'] = {it: 'il condizionale passato', show: false};
    oApp.settings.tenses['conditional past - regular'] = {it: 'il condizionale passato', show: false};
    oApp.settings.tenses['conditional present - irregular'] = {it: 'il condizionale presente', show: false};
    oApp.settings.tenses['conditional present - regular'] = {it: 'il condizionale presente', show: false};
    oApp.settings.tenses['future perfect - irregular'] = {it: 'Il futuro anteriore)', show: false};
    oApp.settings.tenses['future perfect - regular'] = {it: 'Il futuro anteriore)', show: false};
    oApp.settings.tenses['gerund - irregular'] = {it: 'gerundio', show: false};
    oApp.settings.tenses['gerund - regular'] = {it: 'gerundio', show: false};
    oApp.settings.tenses['imperative - irregular'] = {it: 'l\'imperativo', show: false};
    oApp.settings.tenses['imperative - regular'] = {it: 'l\'imperativo', show: false};
    oApp.settings.tenses['imperfect progressive - irregular'] = {it: 'xxx', show: false};
    oApp.settings.tenses['imperfect progressive - regular'] = {it: 'xxx', show: false};
    oApp.settings.tenses['infinitive'] = {it: 'infinito', show: false};
    oApp.settings.tenses['past participle - irregular'] = {it: 'passato participio', show: false};
    oApp.settings.tenses['past participle - regular'] = {it: 'passato participio', show: false};
    oApp.settings.tenses['past perfect - irregular'] = {it: 'Il trapassato prossimo)', show: false};
    oApp.settings.tenses['past perfect - regular'] = {it: 'Il trapassato prossimo)', show: false};
    oApp.settings.tenses['past simple - irregular'] = {it: 'xxx', show: false};
    oApp.settings.tenses['past simple - regular'] = {it: 'xxx', show: false};

    oApp.settings.tenses['present participle - irregular'] = {it: 'presente participio', show: false};
    oApp.settings.tenses['present participle - regular'] = {it: 'presente participio', show: false};
    oApp.settings.tenses['present progressive - irregular'] = {it: 'xxx', show: false};
    oApp.settings.tenses['present progressive - regular'] = {it: 'xxx', show: false};
    oApp.settings.tenses['subjunctive imperfect - irregular'] = {it: 'Il congiuntivo imperfetto)', show: false};
    oApp.settings.tenses['subjunctive imperfect - regular'] = {it: 'Il congiuntivo imperfetto)', show: false};

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
            if (oApp.settings.tenses[tItem].show !== true) {
                continue;
            }
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
                        if (oApp.settings.pronouns[pItem] === true && (q === tItem || ((pLoop[pItem].en.toLowerCase().indexOf(q) > -1 || pLoop[pItem].it.toLowerCase().indexOf(q) > -1)))) {
                            results[tItem] = results[tItem] || [];
                            results[tItem].push(pLoop[pItem]);
                        }
                    }
                }
            }
        }
        oApp.outputResults(results);

    };

    oApp.outputResults = function (results) {
        var vItem,
            vLoop,
            tItem,
            tLoop = results,
            aItem,
            aLoop = oApp.settings.tenses,

            HTML = '';

        for (aItem in aLoop) {
            for (tItem in tLoop) {
                if (tItem !== aItem) {
                    continue;
                }
                HTML += '<div class="type"><h2>' + tItem + ' <span>(' + oApp.settings.tenses[tItem].it + ')</span></h2>';
                vLoop = tLoop[tItem];
                for (vItem in vLoop) {
                    HTML += '<div class="item"><p class="en">' + vLoop[vItem].en + '</p><p class="it">' + vLoop[vItem].it + '</p></div>';
                }
                HTML += '</div>';
            }
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
            if (oApp.settings.tenses[tItem].show !== true) {
                continue;
            }
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
            type = el.text();

        el.find('span').html('');
        type = el.text().trim();

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
