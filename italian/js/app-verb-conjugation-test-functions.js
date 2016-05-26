/*globals $, phpJs*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.getNewItem = function() {

        oApp.clearData();
        oApp.verb = oApp.getRandomVerb();
        oApp.tense = oApp.getRandomTense();

        oApp.updateScreenWithVerbAndTense();
    }

    oApp.clearData = function() {

        $('.correct').removeClass('correct');
        $('.verb input').val('').attr('data-correct', '');
        $('.item.s1 .input-1').add('.item.s1 .input-2').val('').attr('data-correct', '');
        $('.item.s2 .input-1').add('.item.s2 .input-2').val('').attr('data-correct', '');
        $('.item.s3 .input-1').add('.item.s3 .input-2').val('').attr('data-correct', '');
        $('.item.p1 .input-1').add('.item.p1 .input-2').val('').attr('data-correct', '');
        $('.item.p2 .input-1').add('.item.p2 .input-2').val('').attr('data-correct', '');
        $('.item.p3 .input-1').add('.item.p3 .input-2').val('').attr('data-correct', '');

    }

    oApp.getRandomVerb = function() {

        var list = data.verbs.are,
            iddx = oApp.rand(0, list.length - 1),
            verb = list[iddx];

        return verb;
    }

    oApp.getRandomTense = function() {

        var list = Object.keys(oApp.ls.options.tenses),
            iddx = oApp.rand(0, list.length - 1),
            tense = list[iddx];

        return oApp.tenseTypes[tense];
    }

    oApp.updateScreenWithVerbAndTense = function() {

        $('.verb label').html(oApp.verb.it);
        $('.verb input').attr('data-correct', oApp.verb.en);

        $('h1').html(oApp.tense.displayName);

        if (oApp.tense.compound) {
            $('.verb-questions-holder').addClass('compound');
        } else {
            $('.verb-questions-holder').removeClass('compound');
        }

        oApp.setConjugations();
    }


    oApp.setConjugations = function() {

        oApp.stem = oApp.verb.it.substr(0, oApp.verb.it.length - 3);
        oApp.ending = oApp.verb.it.slice(-3);

        switch(oApp.tense.name) {

            case 'future_indicative':
                oApp.setConjugationsFutureIndicative();
                break;

            case 'present':
                oApp.setConjugationsPresent();
                break;

            case 'present_conditional':
                oApp.setConjugationsPresentConditional();
                break;

        }

    }

    oApp.setConjugationsFutureIndicative = function() {

        var s1 = oApp.stem + 'erei';
        var s2 = oApp.stem + 'eresti';
        var s3 = oApp.stem + 'erebbe';
        var p1 = oApp.stem + 'eremmo';
        var p2 = oApp.stem + 'ereste';
        var p3 = oApp.stem + 'erebbero';

        $('.item.s1 .input-1').attr('data-correct', s1);
        $('.item.s2 .input-1').attr('data-correct', s2);
        $('.item.s3 .input-1').attr('data-correct', s3);
        $('.item.p1 .input-1').attr('data-correct', p1);
        $('.item.p2 .input-1').attr('data-correct', p2);
        $('.item.p3 .input-1').attr('data-correct', p3);

    }

    oApp.setConjugationsPresent = function() {

        var s1 = oApp.stem + 'o';
        var s2 = oApp.stem + 'i';
        var s3 = oApp.stem + 'a';
        var p1 = oApp.stem + 'eremo';
        var p2 = oApp.stem + 'ete';
        var p3 = oApp.stem + 'ano';


        if (oApp.verb.it.slice(-4) === 'iare') {
            s2 = oApp.stem + '';
            p1 = oApp.stem + 'amo';
        }
        if (oApp.verb.it.slice(-4) === 'care' || oApp.verb.it.slice(-4) === 'gare') {
            s2 = oApp.stem + 'hi';
            p1 = oApp.stem + 'hiamo';
        }

        $('.item.s1 .input-2').attr('data-correct', s1);
        $('.item.s2 .input-2').attr('data-correct', s2);
        $('.item.s3 .input-2').attr('data-correct', s3);
        $('.item.p1 .input-2').attr('data-correct', p1);
        $('.item.p2 .input-2').attr('data-correct', p2);
        $('.item.p3 .input-2').attr('data-correct', p3);

        oApp.setPresentIndicativeOfAuxillaryVerb();

    }

    oApp.setConjugationsPresentConditional = function() {

        var s1 = oApp.stem + 'ero';
        var s2 = oApp.stem + 'erai';
        var s3 = oApp.stem + 'era';
        var p1 = oApp.stem + 'eremo';
        var p2 = oApp.stem + 'erete';
        var p3 = oApp.stem + 'eranno';

        $('.item.s1 .input-1').attr('data-correct', s1);
        $('.item.s2 .input-1').attr('data-correct', s2);
        $('.item.s3 .input-1').attr('data-correct', s3);
        $('.item.p1 .input-1').attr('data-correct', p1);
        $('.item.p2 .input-1').attr('data-correct', p2);
        $('.item.p3 .input-1').attr('data-correct', p3);

    }

    oApp.setPresentIndicativeOfAuxillaryVerb = function() {

        var aux = oApp.getPresentIndicativeOfAuxillaryVerb();

        $('.item.s1 .input-1').attr('data-correct', aux[0]);
        $('.item.s2 .input-1').attr('data-correct', aux[1]);
        $('.item.s3 .input-1').attr('data-correct', aux[2]);
        $('.item.p1 .input-1').attr('data-correct', aux[3]);
        $('.item.p2 .input-1').attr('data-correct', aux[4]);
        $('.item.p3 .input-1').attr('data-correct', aux[5]);


    }

}());
