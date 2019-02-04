var $ = window.jQuery = require('jquery');
const mustache = require('Mustache');

$( document ).ready(function() {
    $('.choose').on('click', function (){
        $(this).addClass('play');

        //$(this).parent().parent().find(".shipping-mode-title").css("background-color", "blue");
        $(this).closest('.shipping-mode').find(".shipping-mode-title").css("background-color", "#0061af");//cambia colore al titolo

        $(this).parent().css("display", "none"); //fa scomparire la scelta del tipo di ritiro

        if($(this).hasClass('choose1')){
            let temp = $('#temp-mustache').html();
            let html = mustache.render(temp);
            $('.shipping-address-form').html(html);
            $(this).closest('.shipping-mode').find('.shipping-store-confirm').css("display", "none");
            $(this).closest('.shipping-mode').find('.shipping-mode-confirm').css("display", "block");

            $(this).find(".check1").find('input').prop("checked", true);//dà la proprietà checked alla checkbox

            $(this).closest('.shipping').find('.shipping-address').find('.shipping-address-form').css("display", "block");
            $(this).closest('.shipping').find('.shipping-address').find('.choose-country').css('display', 'none');

            /*---------------------------------*/
            $(this).closest('.container').find('.step-one').css('width', '33.33%');
            $(this).closest('.container').find('.step-second').css('width', '33.33%');
            $(this).closest('.container').find('.step-second').addClass('change');
            $(this).closest('.container').find('.step-three').css('display', 'block');
            /*------------------------------------*/

            /*Set text span*/
            $(this).closest('.content').find('.cont-right').find('.product-container').find('.service-price').find('.internal-left').text('Spese di spedizione');
            $(this).closest('.content').find('.cont-right').find('.product-container').find('.service-price').find('.internal-right').text('€ 4,99');
            /*--------------------*/

            if($(this).parent().find('.choose2').find('input').is(':checked')){
                $(this).parent().find('.choose2').find('input').prop('checked', false);
                $(this).parent().find('.choose2').removeClass('play');
            }

            let temp2 = $('#temp-choose-confirm').html();
            let html2 = mustache.render(temp2);
            $('.shipping-mode-confirm').html(html2);

        }else{
            if($(this).hasClass('choose2')){
                let temp3 = $('#temp-choose-store').html();
                let render = mustache.render(temp3);
                $('.shipping-store-confirm').html(render);

                $(this).closest('.shipping-mode').find('.shipping-store-confirm').css("display", "block");
                $(this).closest('.shipping-mode').find('.shipping-mode-confirm').css("display", "none");

                $(this).closest('.shipping').find('.shipping-address').find('.shipping-address-form').css("display", "none");
                $(this).closest('.shipping').find('.shipping-address').find('.choose-country').css("display", "block");

                $(this).find(".check1").find('input').prop("checked", true);//dà la proprietà checked alla checkbox

                if($(this).parent().find('.choose1').find('input').is(':checked')){
                    $(this).parent().find('.choose1').find('input').prop('checked', false);
                    $(this).parent().find('.choose1').removeClass('play');
                }
                /*---------------------------------*/
                $(this).closest('.container').find('.step-one').css('width', '50%');
                $(this).closest('.container').find('.step-second').css('width', '50%');
                $(this).closest('.container').find('.step-second').removeClass('change');
                $(this).closest('.container').find('.step-three').css('display', 'none');
                /*------------------------------------*/

                /*Set text span*/
                $(this).closest('.content').find('.cont-right').find('.product-container').find('.service-price').find('.internal-left').text('Spese ritiro in negozio');
                $(this).closest('.content').find('.cont-right').find('.product-container').find('.service-price').find('.internal-right').text('€ 0,00');
                /*--------------------*/

                let temp4 = $('#temp-store-country').html();
                let render2 = mustache.render(temp4);
                $('.choose-country').html(render2);
            }
        }


        $('.right').on('click', function(){
            $(this).parent().css("display", "none").parent().find('.shipping-mode-choose').css("display", "block");
            $(this).closest('.shipping-mode').find('.shipping-mode-title').css('background-color', '#57a2ec');
        });

    });


    $('.count-product-right').on('click', function(){

        /*let temp5 = $('#temp-show-products').html();
        let render3 = mustache.render(temp5);
        $('.show-product').html(render3);*/

        if($(this).closest('.summary-product').find('.show-product').css('display')==='none'){
            let temp5 = $('#temp-show-products').html();
            let render3 = mustache.render(temp5);
            $('.show-product').html(render3);
            $(this).closest('.summary-product').find('.show-product').css('display', 'block');
        }else{
            $(this).closest('.summary-product').find('.show-product').css('display', 'none');
        }

    });


});
