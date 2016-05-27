/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.ls = oApp.getLs() || {};
    oApp.verb = {};
    oApp.tense = {};
    oApp.currentVerb = {};
    oApp.clearData();

    oApp.init = (function () {
        if (oApp.ls.data === undefined) {
            oApp.loadJsonAndGetNewItem();
        } else {
            oApp.getNewItem();
        }
    }());

    $('.verb-questions').on('keyup', 'input', function () {
        var el = $(this),
            val = el.val(),
            id = el.data('el'),
            idx = id.split('-'),
            answer;

        if (id == 'translation') {
            answer = oApp.currentVerb.translation[0];
        } else {
            answer = oApp.currentVerb.items[idx[1]] !== undefined ? oApp.currentVerb.items[idx[1]][idx[0]] : '';
        }

        if (val.toLowerCase() === answer.toLowerCase()) {
            el.addClass('correct');
        } else {
            el.removeClass('correct');
        }
    });

    $('.verb-questions').on('click', 'em', function () {
        $(this).closest('.verb-questions').find('input').each(function () {
            var el = $(this),
                id = el.data('el'),
                idx = id.split('-'),
                answer = '';

            if (id == 'translation') {
                answer = oApp.currentVerb.translation;
            } else {
                answer = oApp.currentVerb.items[idx[1]] !== undefined ? oApp.currentVerb.items[idx[1]][idx[0]] : '';
            }
            el.val(answer);

        });
    });

    $('.btnContinue').click(function () {
        oApp.getNewItem();
    });

    $('.refresh').click(function () {
        oApp.loadJsonAndGetNewItem();
    });

}());
