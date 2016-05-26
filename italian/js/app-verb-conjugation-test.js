/*globals $, phpJs*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.ls = oApp.getLs();
    oApp.verb;
    oApp.tense;

    oApp.getNewItem();

    $('.verb-questions').on('keyup', 'input', function(){
        var el = $(this),
            val = el.val(),
            answer = el.data('correct'),
            isCorrect = val === answer;

        if (isCorrect) {
            el.addClass('correct');
        } else {
            el.removeClass('correct');
        }
    });

    $('.verb-questions').on('click', 'em', function(){
        $(this).closest('.verb-questions').find('input').each(function(){
            var el = $(this),
                answer = el.data('correct');
            el.val(answer);
        });
    });

    $('.btnContinue').click(function(){
        oApp.getNewItem();
    });



    $('p.home').click(function(){
        var HTML = $('.page').width() + ' :: ' + $('.verb input').width();
        $('input').width($('.verb input').width() - 1);
        $(this).html(HTML);
    });

}());
