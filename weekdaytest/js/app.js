/*globals $, phpJs*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    var dates = 0,
        correct = 0;

    oApp.showNewQuestion = function () {

        $('body').removeClass('answer-given');
        $('.jsAnswerTab').removeClass('user-answer correct-answer');
        $('.btnContinue').addClass('inactive').removeClass('active');

        var daysDiff = Math.floor(Math.random() * (144000 * 2)) - 144000,
            targetDT = phpJs.strtotime(daysDiff + ' days'),
            targetDateDisplay = phpJs.date('jS F Y', targetDT),
            targetDateWeekDay = phpJs.date('w', targetDT);

        $('h1').html(targetDateDisplay);
        $('.jsAnswerTab').eq(targetDateWeekDay).addClass('correct-answer');

        dates++;

    };

    oApp.setUpClickHandlers = (function () {

        $('.jsAnswerTab').click(function () {
            if (!$('body').hasClass('answer-given')) {
                $(this).addClass('user-answer');
                $('body').addClass('answer-given');
                $('.btnContinue').removeClass('inactive').addClass('active');
                if ($(this).hasClass('correct-answer')) {
                    correct++;
                }
                $('.jsScores').html(correct + '/' + dates);
            }
        });


        $('.btnContinue').click(function () {
            oApp.showNewQuestion();
        });

    }());

    oApp.showNewQuestion();

}());
