/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.loadJsonAndGetNewItem = function () {
        $.getJSON('http://isig.co.uk/json/italian-verb-test', function (json) {
            oApp.ls.data = json.data;
            oApp.setLs(oApp.ls);
            oApp.getNewItem();
        });
    };

    oApp.getNewItem = function () {

        oApp.clearData();
        oApp.verb = oApp.getRandomVerb();
        oApp.tense = oApp.getRandomTense();

        oApp.updateScreenWithVerbAndTense();
    };

    oApp.clearData = function () {
        $('.correct').removeClass('correct');
        $('input').val('');

    };

    oApp.getRandomVerb = function () {

        var list = oApp.ls.data.verbs.are,
            iddx = oApp.rand(0, list.length - 1),
            verb = list[iddx];

        return verb;
    };

    oApp.getRandomTense = function () {

        var list = Object.keys(oApp.ls.options.tenses),
            iddx = oApp.rand(0, list.length - 1),
            tense = list[iddx];

        return oApp.tenseTypes[tense];
    };

    oApp.updateScreenWithVerbAndTense = function () {

        $('.verb label').html(oApp.verb.it);
        oApp.currentVerb.translation = [];
        oApp.currentVerb.translation[0] = oApp.verb.en;

        $('h1').html(oApp.tense.displayName);
        $('h2').html('( ' + oApp.tense.example + ' )');

        if (oApp.tense.compound) {
            $('.verb-questions-holder').addClass('compound');
        } else {
            $('.verb-questions-holder').removeClass('compound');
        }

        oApp.setConjugations();
    };


    oApp.setConjugations = function () {

        oApp.stem = oApp.verb.it.substr(0, oApp.verb.it.length - 3);
        oApp.ending = oApp.verb.it.slice(-3);

        switch (oApp.tense.name) {

        case 'present':
            oApp.setConjugationsPresent();
            break;

        case 'present_perfect':
            oApp.setConjugationsPresentPerfect();
            break;

        case 'imperfect':
            oApp.setConjugationsImperfect();
            break;

        case 'future_indicative':
            oApp.setConjugationsFutureIndicative();
            break;

        case 'past_perfect':
            oApp.setConjugationsPastPerfect();
            break;

        case 'present_conditional':
            oApp.setConjugationsPresentConditional();
            break;
        }

    };

    //  I speak / I am speaking
    oApp.setConjugationsPresent = function () {

        var items = [];

        items[0] = [
            oApp.stem + 'o',
            oApp.stem + 'i',
            oApp.stem + 'a',
            oApp.stem + 'iamo',
            oApp.stem + 'ate',
            oApp.stem + 'ano'
        ];

        if (oApp.verb.it.slice(-4) === 'iare') {
            items[0][1] = oApp.stem;  //  + ''
            items[0][3] = oApp.stem + 'amo';
        }
        if (oApp.verb.it.slice(-4) === 'care' || oApp.verb.it.slice(-4) === 'gare') {
            items[0][1] = oApp.stem + 'hi';
            items[0][3] = oApp.stem + 'hiamo';
        }

        oApp.currentVerb.items = items;

    };

    //  I have spoken / I spoke
    oApp.setConjugationsPresentPerfect = function () {

        var items = [],
            pastParticiple = oApp.stem + 'ato';

        items[0] = oApp.getPresentIndicativeOfAuxillaryVerb();
        items[1] = [pastParticiple, pastParticiple, pastParticiple, pastParticiple, pastParticiple, pastParticiple];

        oApp.currentVerb.items = items;

    };

    //  I used to speak
    oApp.setConjugationsImperfect = function () {

        var items = [];

        items[0] = [
            oApp.stem + 'avo',
            oApp.stem + 'avi',
            oApp.stem + 'ava',
            oApp.stem + 'avamo',
            oApp.stem + 'avate',
            oApp.stem + 'avano'
        ];

        oApp.currentVerb.items = items;
    };

    //  I will speak
    oApp.setConjugationsFutureIndicative = function () {

        var items = [];

        if (oApp.verb.it.slice(-4) === 'care' || oApp.verb.it.slice(-4) === 'gare') {
            oApp.stem += 'h';
        }

        if (oApp.verb.it.slice(-5) === 'ciare' || oApp.verb.it.slice(-5) === 'giare') {
            oApp.stem = oApp.stem.substring(0, oApp.stem.length - 1);
        }

        items[0] = [
            oApp.stem + 'ero',
            oApp.stem + 'erai',
            oApp.stem + 'era',
            oApp.stem + 'eremo',
            oApp.stem + 'erete',
            oApp.stem + 'eranno'
        ];

        oApp.currentVerb.items = items;

    };

    //  I had spoken
    oApp.setConjugationsPastPerfect = function () {

        var items = [],
            pastParticiple = oApp.stem + 'ato';

        items[0] = oApp.getImperfectIndicativeOfAuxillaryVerb();
        items[1] = [pastParticiple, pastParticiple, pastParticiple, pastParticiple, pastParticiple, pastParticiple];

        oApp.currentVerb.items = items;

    };

    //  I would speak
    oApp.setConjugationsPresentConditional = function () {

        var items = [];

        if (oApp.verb.it.slice(-4) === 'care' || oApp.verb.it.slice(-4) === 'gare') {
            oApp.stem += 'h';
        }

        if (oApp.verb.it.slice(-5) === 'ciare' || oApp.verb.it.slice(-5) === 'giare') {
            oApp.stem = oApp.stem.substring(0, oApp.stem.length - 1);
        }

        items[0] = [
            oApp.stem + 'erei',
            oApp.stem + 'eresti',
            oApp.stem + 'erebbe',
            oApp.stem + 'eremmo',
            oApp.stem + 'ereste',
            oApp.stem + 'erebbero'
        ];

        oApp.currentVerb.items = items;

    };

}());
