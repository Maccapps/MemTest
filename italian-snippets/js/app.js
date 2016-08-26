/*globals $, phpJs*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.localStorageName = 'verb-conjugation';

    oApp.tenseTypes = {
        present: {
            name: 'present',
            displayName: 'Present',
            example: 'I speak / I am speaking',
            compound: false
        },
        present_perfect: {
            name: 'present_perfect',
            displayName: 'Present Perfect',
            example: 'I have spoken / I spoke',
            compound: true
        },
        imperfect: {
            name: 'imperfect',
            displayName: 'Imperfect',
            example: 'I used to speak',
            compound: false
        },
        present_conditional: {
            name: 'present_conditional',
            displayName: 'Present Conditional',
            example: 'I would speak',
            compound: false
        },
        past_perfect: {
            name: 'past_perfect',
            displayName: 'Past Perfect',
            example: 'I had spoken',
            compound: true
        },
        future_indicative: {
            name: 'future_indicative',
            displayName: 'Future Indicative',
            example: 'I will speak',
            compound: false
        }
    };

    oApp.getPresentIndicativeOfAuxillaryVerb = function (verb) {

        verb = verb === 'essere' ? 'essere' : 'avere';
        var presentIndicative = [];

        switch (verb) {

        case 'avere':
            presentIndicative = [
                'ho',
                'hai',
                'ha',
                'abbiamo',
                'avete',
                'hanno'
            ];
            break;

        case 'essere':
            presentIndicative = [
                'sono',
                'sei',
                'e',
                'siamo',
                'siete',
                'sono'
            ];
            break;

        }

        return presentIndicative;
    };

    oApp.getImperfectIndicativeOfAuxillaryVerb = function (verb) {

        verb = verb === 'essere' ? 'essere' : 'avere';
        var imperfectIndicative = [];

        switch (verb) {

        case 'avere':
            imperfectIndicative = [
                'avevo',
                'avevi',
                'aveva',
                'avevamo',
                'avevate',
                'avevano'
            ];
            break;

        case 'essere':
            imperfectIndicative = [
                'ero',
                'eri',
                'era',
                'eravamo',
                'eravate',
                'erano'
            ];
            break;

        }

        return imperfectIndicative;
    };

}());
