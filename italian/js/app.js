/*globals $, phpJs*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    oApp.localStorageName = 'verb-conjugation';

    oApp.tenseTypes = {
        present_perfect: {
            name: 'present_perfect',
            displayName: 'Present Perfect',
            example: 'I have spoken',
            compound: false
        },
        present: {
            name: 'present',
            displayName: 'Present',
            example: 'I speak',
            compound: true
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

    oApp.getPresentIndicativeOfAuxillaryVerb = function(verb)
    {
        verb = verb === 'essere' ? 'essere' : 'avere';
        var presentIndicative = [];

        switch(verb) {

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

        }

        return presentIndicative;
    }

    oApp.getLs = function() {
        var ls = localStorage.getItem(oApp.localStorageName);
        return JSON.parse(ls);
    }

    oApp.setLs = function(data) {
        localStorage.setItem(oApp.localStorageName, JSON.stringify(data));
    }

}());
