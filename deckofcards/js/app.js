/*globals $, phpJs*/
/*jslint eqeq:true plusplus:true*/

var oApp = window.oApp || {};

(function () {

    'use strict';

    var suits = ['C', 'D', 'H', 'S'],
        ranks = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        suitIdx,
        rankIdx,
        card;

    $.getJSON( "pao.json", function(json) {
        oApp.JSON = json;
        console.log(oApp.JSON);
        oApp.init();
    });


    oApp.init = function () {
        oApp.newCard();
    };


    oApp.newCard = function () {
        oApp.resetPage();
        suitIdx = oApp.rand(0, 3);
        rankIdx = oApp.rand(0, 12);
        $('.card').addClass('s' + suits[suitIdx]).addClass('r' + (rankIdx + 1));
        card = oApp.JSON[suits[suitIdx]][ranks[rankIdx]];
    };

    $('.btnReveal').click(function(){
        $('.pao-holder .p').html(card.P);
        $('.pao-holder .a').html(card.A);
        $('.pao-holder .o').html(card.O);
        $('.btnReveal').addClass('inactive').removeClass('active');
        $('.btnContinue').addClass('active').removeClass('inactive');
    });

    $('.btnContinue').click(function(){
        oApp.newCard();
    });



    oApp.resetPage = function () {

        var i;

        $('.pao-holder .p').html('?');
        $('.pao-holder .a').html('?');
        $('.pao-holder .o').html('?');
        $('.btnReveal').addClass('active').removeClass('inactive');
        $('.btnContinue').addClass('inactive').removeClass('active');

        for(i = 0; i < suits.length; i++) {
            $('.card').removeClass('s' + suits[i]);
        }

        for(i = 1; i <= ranks.length; i++) {
            $('.card').removeClass('r' + i);
        }

    }


}());
