/*globals $, phpJs*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    var ls = oApp.getLs() || {
            options: {}
        };

    oApp.highlightOptionsFromLocalStorage = function () {
        var i;

        $('.btn.half-width').removeClass('active');

        for (i in ls.options.verbs) {
            if (ls.options.verbs[i] === 1) {
                $('.btn.half-width[data-name="verbs-' + i + '"]').addClass('active');
            }
        }

        for (i in ls.options.tenses) {
            if (ls.options.tenses[i] === 1) {
                $('.btn.half-width[data-name="tenses-' + i + '"]').addClass('active');
            }
        }

    };

    oApp.highlightOptionsFromLocalStorage();


    $('.btn.jsLsBtn').click(function () {
        var el = $(this),
            name = el.data('name'),
            type,
            active = !el.hasClass('active');

        name = name.split('-');
        type = name.shift();
        name = name.join('-');

        el.toggleClass('active');

        if (active) {
            ls.options[type] = ls.options[type] || {};
            ls.options[type][name] = 1;
        } else {
            ls.options[type] = ls.options[type] || {};
            delete ls.options[type][name];
        }

        oApp.setLs(ls);

    });

    $('.btnContinueRead').click(function () {
        window.location = 'verb-conjugation-test.php?type=read';
    });

    $('.btnContinueWrite').click(function () {
        window.location = 'verb-conjugation-test.php?type=write';
    });


}());
