/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.ls = oApp.getLs() || {};
   
    oApp.italianNumbers = [
        'zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove',
        'dieci', 'undici', 'dodici', 'tredici', 'quattordici', 'quindici', 'sedici', 'diciassette', 'dicoitto', 'diciannove',
        'venti', 'ventuno', 'ventidue', 'ventitre', 'ventiquattro', 'venticinque', 'ventisei', 'ventisette', 'ventotto', 'ventinove'
    ];

    $('body').on('keyup', '.jsTimeInput', function () {
        var el = $(this),
            val = el.val();

        if (val.toLowerCase() === oApp.answer.toLowerCase()) {
            el.addClass('correct');
        } else {
            el.removeClass('correct');
        }

    });

    $('.verb-questions').on('click', 'em', function () {
        $(this).closest('.verb-questions').find('input').each(function () {
            var el = $(this);

            el.val(oApp.answer);

        });
    });

    oApp.getNewTimeObject = function () {

        var time = {};

        time.numbers = oApp.getNewTime();
        time.words = oApp.getTimeWordsFromNumbers(time.numbers);

        return time;
        
    };


    oApp.getNewTime = function () {

        var hour = oApp.rand(0, 23),
            mins = oApp.rand(0, 59),
            random = oApp.rand(0, 100),
            time;

        if(random === 0) {
            mins = oApp.rand(0, 3) * 15;
        }

        hour = hour < 10 ? '0' + hour : hour;
        mins = mins < 10 ? '0' + mins : mins;

        time = hour + ':' + mins;

        return time;
        
    };

    oApp.getTimeWordsFromNumbers = function (numbers) {

        var bits = numbers.split(':'),
            hour = parseInt(bits[0], 10),
            mins = parseInt(bits[1], 10),
            words;

        if (mins > 30) {
            hour++;
            if (hour == 24) {
                hour = 0;
            }
        }
        if (hour == 0) {
            words = 'e mezzanotte';
        }
        if (hour == 1) {
            words = "e l'una";
        }
        if (hour == 12) {
            words = 'e mezzagiorno';
        }
        if (hour > 1 && hour != 12) {
            words = 'sono le ' + oApp.italianNumbers[hour];
        }

        if (mins > 30) {
            words += ' meno ';
        } else {
            if (mins != 0) {
                words += ' e ';
            }
        }

        if (mins == 15 || mins == 45) {
            words += 'quarto';
        }
        if (mins == 30) {
            words += 'mezzo';
        }
        if (mins != 15 && mins!=30 && mins != 45 && mins > 30) {
            words += oApp.italianNumbers[(60 - mins)];
        }
        if (mins != 15 && mins!=30 && mins != 45 && mins < 30 && mins != 0) {
            words += oApp.italianNumbers[mins];
        }


        return words;
        
    };

    oApp.getNewItem = function () {
        var time = oApp.getNewTimeObject();

        $('.correct').removeClass('correct');

        $('.jsTimeDisplay').html(time.numbers);
        $('.jsTimeInput').val('').focus();
        oApp.answer = time.words;
    
    };

    oApp.handleWindowResize = function () {
        console.log('handleWindowResize');
        oApp.setPageHeight();
    };

    $('.btnContinue').click(function () {
        oApp.getNewItem();
    });

    oApp.init = (function () {
        oApp.getNewItem();
    }());

}());
