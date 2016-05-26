/*globals $, phpJs*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    var ls = oApp.getLs() || {
            options: {}
        };

    oApp.highlightOptionsFromLocalStorage = function() {
        $('.btn.half-width').removeClass('active');

        for(var i in ls.options['verbs']) {
            if (ls.options['verbs'][i] === 1) {
                $('.btn.half-width[data-name="verbs-' + i + '"]').addClass('active');
            }
        }

        for(var i in ls.options['tenses']) {
            if (ls.options['tenses'][i] === 1) {
                $('.btn.half-width[data-name="tenses-' + i + '"]').addClass('active');
            }
        }

    }

    oApp.highlightOptionsFromLocalStorage();


    $('.btn.half-width').click(function(){
        var el = $(this),
            name = el.data('name'),
            type,
            active = !el.hasClass('active');

        name = name.split('-');
        type = name.shift();
        name = name.join('-');
console.log(name, type);

        el.toggleClass('active')

        if (active) {
            ls.options[type] = ls.options[type] || {};
            ls.options[type][name] = 1;
        } else {
            ls.options[type] = ls.options[type] || {};
            delete ls.options[type][name];
        }

        oApp.setLs(ls);

    });

    $('.btnContinue').click(function(){
        window.location= 'verb-conjugation-test.php';
    });


}());
