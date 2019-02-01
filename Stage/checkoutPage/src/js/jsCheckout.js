var $ = window.jQuery = require('jquery');
const mustache = require('Mustache');

$( document ).ready(function() {
    $('.choose').on('click', function (){
        $(this).addClass('play');

        //$(this).parent().parent().find(".shipping-mode-title").css("background-color", "blue");
        $(this).closest('.shipping-mode').find(".shipping-mode-title").css("background-color", "#0061af");//cambia colore al titolo


        if($(this).find('.check1').find('input').is(':checked')){
            $(this).find('.check1').find('input').prop('checked', false);
        }else{
            $(this).find('.check1').find('input').prop('checked', true);
        }

        //$(this).find(".check1").find('input').prop("checked", true);//dà la proprietà checked alla checkbox
        $(this).closest('.shipping').find('.shipping-address').find('.shipping-address-form').css("display", "block");//display block al div contenitore della form

        $(this).parent().css("display", "none"); //fa scomparire la scelta del tipo di ritiro


        $(this).closest('.shipping-mode').find('.shipping-mode-confirm').css("display", "block");//mi fa comparire il tipo di spedizione scelto



        let temp = $('#temp-mustache').html();
        let html = mustache.render(temp);
        $('.shipping-address-form').html(html); //rendering form spedizione


        let temp2 = $('#temp-choose-confirm').html();
        let html2 = mustache.render(temp2);
        $('.shipping-mode-confirm').html(html2);//rendering tipo di spedizione scelta

        $('.right').on('click', function(){
            $(this).parent().css("display", "none").parent().find('.shipping-mode-choose').css("display", "block");

        });

    });

    



});
