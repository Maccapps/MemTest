/*globals $*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.loadJsonAndGetNewItem = function () {
        $.getJSON(oApp.jsonFeedUrlBase + 'italian-verbs/verbs', function (json) {
            oApp.ls.data = json.data;
            console.log(json.data);
            oApp.setLs(oApp.ls);
            oApp.getNewItem();
        });
    };

    oApp.getNewItem = function () {

        oApp.clearData();
        oApp.verb = oApp.getRandomVerb();
        oApp.tense = oApp.getRandomTense();
        oApp.type = oApp.getRandomTestType();

        if (oApp.verb === undefined) {
            alert('Select types of verbs');
            window.location = 'verb-conjugation.php';
            return false;
        }

        if (oApp.tense === undefined) {
            alert('Select types of tenses');
            window.location = 'verb-conjugation.php';
            return false;
        }

        if (oApp.type === undefined) {
            alert('Select types of test');
            window.location = 'verb-conjugation.php';
            return false;
        }

        switch (oApp.type) {

        case 'write':
            oApp.updateScreenForWriteTest();
            break;

        case 'read':
            oApp.updateScreenForReadTest();
            break;
        }

    };

    oApp.clearData = function () {
        $('.correct').removeClass('correct');
        $('input').val('');

    };

    oApp.getRandomVerb = function () {

        var list = oApp.getVerbList(),
            iddx = oApp.rand(0, list.length - 1),
            verb = list[iddx];

        return verb;
    };

    oApp.getVerbList = function () {

        var list = [],
            item,
            i,
            j;

        for (i in oApp.ls.options.verbs) {
            if (oApp.ls.options.verbs.hasOwnProperty(i)) {
                for (j in oApp.ls.data.verbs.regular[i]) {
                    if (oApp.ls.data.verbs.regular[i].hasOwnProperty(j)) {
                        item = oApp.ls.data.verbs.regular[i][j];
                        item.type = 'regular';
                        item.conjugation = i;
                        list.push(item);
                    }
                }
                if (i === 'irregular') {
                    for (j in oApp.ls.data.verbs.irregular) {
                        if (oApp.ls.data.verbs.irregular.hasOwnProperty(j)) {
                            item = oApp.ls.data.verbs.irregular[j];
                            item.type = 'irregular';
                            list.push(item);
                        }
                    }
                }

            }
        }

        return list;
    };

    oApp.getRandomTense = function () {

        var list = Object.keys(oApp.ls.options.tenses),
            iddx = oApp.rand(0, list.length - 1),
            tense = list[iddx];

        return oApp.tenseTypes[tense];
    };

    oApp.getRandomTestType = function () {

        var list = Object.keys(oApp.ls.options.test),
            iddx = oApp.rand(0, list.length - 1),
            type = list[iddx];

        return type;
    };

    oApp.updateScreenForWriteTest = function () {

        $('#test-read').addClass('hide');
        $('#test-write').removeClass('hide');

        $('.verb label').html(oApp.verb.it);
        oApp.currentVerbTense = oApp.verb;
        oApp.currentVerbTense.translation = [];
        oApp.currentVerbTense.translation[0] = oApp.verb.en;

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

        oApp.currentVerbTense.stem = oApp.verb.it.substr(0, oApp.verb.it.length - 3);
        oApp.currentVerbTense.ending = oApp.verb.it.slice(-3);

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

        switch (oApp.currentVerbTense.type) {

        case 'regular':

            switch (oApp.currentVerbTense.conjugation) {

            case 'are':
                oApp.setConjugationsPresentRegularAre();
                break;

            case 'ere':
                oApp.setConjugationsPresentRegularEre();
                break;

            case 'ire':
                oApp.setConjugationsPresentRegularIre();
                break;

            }

            break;

        case 'irregular':
            oApp.currentVerbTense.items = []
            oApp.currentVerbTense.items[0] = oApp.currentVerbTense.presentIndicative;
            break;

        }

    };

    oApp.setConjugationsPresentRegularAre = function () {  //  I speak / I am speaking

        var items = [];

        items[0] = [
            oApp.currentVerbTense.stem + 'o',
            oApp.currentVerbTense.stem + 'i',
            oApp.currentVerbTense.stem + 'a',
            oApp.currentVerbTense.stem + 'iamo',
            oApp.currentVerbTense.stem + 'ate',
            oApp.currentVerbTense.stem + 'ano'
        ];

        if (oApp.verb.it.slice(-4) === 'iare') {
            items[0][1] = oApp.currentVerbTense.stem;  //  + ''
            items[0][3] = oApp.currentVerbTense.stem + 'amo';
        }
        if (oApp.verb.it.slice(-4) === 'care' || oApp.verb.it.slice(-4) === 'gare') {
            items[0][1] = oApp.currentVerbTense.stem + 'hi';
            items[0][3] = oApp.currentVerbTense.stem + 'hiamo';
        }

        oApp.currentVerbTense.items = items;

    };

    oApp.setConjugationsPresentRegularEre = function () {

        var items = [];

        items[0] = [
            oApp.currentVerbTense.stem + 'o',
            oApp.currentVerbTense.stem + 'i',
            oApp.currentVerbTense.stem + 'e',
            oApp.currentVerbTense.stem + 'iamo',
            oApp.currentVerbTense.stem + 'ete',
            oApp.currentVerbTense.stem + 'ono'
        ];

        oApp.currentVerbTense.items = items;

    };

    oApp.setConjugationsPresentRegularIre = function () {

        var items = [];

        items[0] = [
            oApp.currentVerbTense.stem + 'o',
            oApp.currentVerbTense.stem + 'i',
            oApp.currentVerbTense.stem + 'e',
            oApp.currentVerbTense.stem + 'iamo',
            oApp.currentVerbTense.stem + 'ite',
            oApp.currentVerbTense.stem + 'ono'
        ];

        if (oApp.currentVerbTense.isc !== false) {
            items[0][0] = oApp.currentVerbTense.stem + 'isco';
            items[0][1] = oApp.currentVerbTense.stem + 'isci';
            items[0][2] = oApp.currentVerbTense.stem + 'isce';
            items[0][5] = oApp.currentVerbTense.stem + 'iscono';
        }

        oApp.currentVerbTense.items = items;

    };

    oApp.getPastParticipleOfCurrentVerb = function () {

        if (oApp.currentVerbTense.pastParticiple !== undefined) {
            return oApp.currentVerbTense.pastParticiple;
        }

        switch (oApp.currentVerbTense.conjugation) {

        case 'are':
            return oApp.currentVerbTense.stem + 'ato';

        case 'ere':
            if (oApp.verb.it.slice(-4) === 'cere') {
                return oApp.currentVerbTense.stem + 'iuto';
            }
            return oApp.currentVerbTense.stem + 'uto';

        case 'ire':
            return oApp.currentVerbTense.stem + 'ito';

        }

    };


    //  I have spoken / I spoke
    oApp.setConjugationsPresentPerfect = function () {

        var items = [],
            pastParticiple = oApp.getPastParticipleOfCurrentVerb(),
            auxVerb = oApp.currentVerbTense.aux || 'avere';

        items[0] = oApp.getPresentIndicativeOfAuxillaryVerb(auxVerb);
        items[1] = [pastParticiple, pastParticiple, pastParticiple, pastParticiple, pastParticiple, pastParticiple];

        oApp.currentVerbTense.items = items;

    };

    //  I used to speak
    oApp.setConjugationsImperfect = function () {

        var items = [],
            endingFirstLetter = oApp.currentVerbTense.conjugation[0];

        items[0] = [
            oApp.currentVerbTense.stem + endingFirstLetter + 'vo',
            oApp.currentVerbTense.stem + endingFirstLetter + 'vi',
            oApp.currentVerbTense.stem + endingFirstLetter + 'va',
            oApp.currentVerbTense.stem + endingFirstLetter + 'vamo',
            oApp.currentVerbTense.stem + endingFirstLetter + 'vate',
            oApp.currentVerbTense.stem + endingFirstLetter + 'vano'
        ];

        oApp.currentVerbTense.items = items;
    };

    //  I will speak
    oApp.setConjugationsFutureIndicative = function () {

        var items = [],
            endingFirstLetter = oApp.currentVerbTense.conjugation[0];

        endingFirstLetter = endingFirstLetter == 'a' ? 'e' : endingFirstLetter;

        if (oApp.verb.it.slice(-4) === 'care' || oApp.verb.it.slice(-4) === 'gare') {
            oApp.currentVerbTense.stem += 'h';
        }

        if (oApp.verb.it.slice(-5) === 'ciare' || oApp.verb.it.slice(-5) === 'giare') {
            oApp.currentVerbTense.stem = oApp.currentVerbTense.stem.substring(0, oApp.currentVerbTense.stem.length - 1);
        }

        items[0] = [
            oApp.currentVerbTense.stem + endingFirstLetter + 'ro',
            oApp.currentVerbTense.stem + endingFirstLetter + 'rai',
            oApp.currentVerbTense.stem + endingFirstLetter + 'ra',
            oApp.currentVerbTense.stem + endingFirstLetter + 'remo',
            oApp.currentVerbTense.stem + endingFirstLetter + 'rete',
            oApp.currentVerbTense.stem + endingFirstLetter + 'ranno'
        ];

        oApp.currentVerbTense.items = items;

    };

    //  I had spoken
    oApp.setConjugationsPastPerfect = function () {

        var items = [],
            pastParticiple = oApp.currentVerbTense.stem + 'ato',
            auxVerb = oApp.currentVerbTense.aux || 'avere';

        items[0] = oApp.getImperfectIndicativeOfAuxillaryVerb(auxVerb);
        items[1] = [pastParticiple, pastParticiple, pastParticiple, pastParticiple, pastParticiple, pastParticiple];

        oApp.currentVerbTense.items = items;

    };

    //  I would speak
    oApp.setConjugationsPresentConditional = function () {

        var items = [],
            endingFirstLetter = oApp.currentVerbTense.conjugation[0];

        endingFirstLetter = endingFirstLetter == 'a' ? 'e' : endingFirstLetter;

        if (oApp.verb.it.slice(-4) === 'care' || oApp.verb.it.slice(-4) === 'gare') {
            oApp.currentVerbTense.stem += 'h';
        }

        if (oApp.verb.it.slice(-5) === 'ciare' || oApp.verb.it.slice(-5) === 'giare') {
            oApp.currentVerbTense.stem = oApp.currentVerbTense.stem.substring(0, oApp.currentVerbTense.stem.length - 1);
        }

        items[0] = [
            oApp.currentVerbTense.stem + endingFirstLetter + 'rei',
            oApp.currentVerbTense.stem + endingFirstLetter + 'resti',
            oApp.currentVerbTense.stem + endingFirstLetter + 'rebbe',
            oApp.currentVerbTense.stem + endingFirstLetter + 'remmo',
            oApp.currentVerbTense.stem + endingFirstLetter + 'reste',
            oApp.currentVerbTense.stem + endingFirstLetter + 'rebbero'
        ];

        oApp.currentVerbTense.items = items;

    };


    oApp.updateScreenForReadTest = function () {

        $('#test-write').addClass('hide');
        $('#test-read').removeClass('hide');

        oApp.currentVerbTense = oApp.verb;

        oApp.setConjugations();
        console.log(oApp.currentVerbTense);

        var personList = ['s1', 's2', 's3', 'p1', 'p2', 'p3'],
            personId = oApp.rand(0, personList.length - 1),
            person = personList[personId];

        if (oApp.currentVerbTense.items.length > 1) {
            $('.verb h1').html(oApp.currentVerbTense.items[0][personId] + ' ' + oApp.currentVerbTense.items[1][personId]);
        } else {
            $('.verb h1').html(oApp.currentVerbTense.items[0][personId]);
        }

        $('.verb h2').html(oApp.currentVerbTense.en);

        $('.jsPersonList .jsBtn[data-person="' + person + '"]').addClass('correct-answer');
        $('.jsPersonTensesList .jsBtn[data-name="' + oApp.tense.name + '"]').addClass('correct-answer');

    };

    $('#test-read').on('click', '.jsPersonList .jsBtn', function () {

        if ($('#test-read').hasClass('answer-given')) {
            return false;
        }

        var el = $(this),
            person = el.data('person');

        $('.jsPersonList .jsBtn').removeClass('active');
        el.addClass('active');
        $('.jsPersonTensesList').addClass('hide');
        $('.jsPersonTensesHeader').removeClass('hide');
        $('.jsPersonTensesList[data-person="' + person + '"]').removeClass('hide');
    });

    $('#test-read').on('click', '.jsPersonTensesList .jsBtn', function () {

        if ($('#test-read').hasClass('answer-given')) {
            return false;
        }

        var el = $(this),
            tense = el.data('name');
        $('.jsPersonTensesList .jsBtn').removeClass('active');
        el.addClass('active');
        $('#test-read .btnCheck').addClass('active');
    });

    $('#test-read').on('click', '.btnCheck.active', function () {
        $(this).addClass('hide');
        $('#test-read .btnContinueRead').removeClass('hide');
        $('#test-read .jsPersonList .active').addClass('user-answer');
        $('#test-read .jsPersonTensesList .active').addClass('user-answer');
        $('#test-read .jsPersonTensesList .jsBtn').removeClass('active');
        $('#test-read .jsPersonList .jsBtn').removeClass('active');
        $('#test-read').addClass('answer-given');
    });

    $('#test-read').on('click', '.btnContinueRead', function () {
        $('#test-read').removeClass('answer-given');
        $('#test-read .btnCheck').removeClass('active hide');
        $('#test-read .btnContinueRead').addClass('hide');
        $('#test-read .jsBtn').removeClass('active user-answer correct-answer');
        $('.jsPersonTensesList').addClass('hide');
        $('.jsPersonTensesHeader').addClass('hide');
        oApp.getNewItem();
    });


}());
