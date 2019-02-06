var $ = window.jQuery = require('jquery');
const mustache = require('Mustache');

let sumProd = $('.summary-product');
let container = $('.container');
let content = $('.content');

let detailsProducts = function(){
    if(sumProd.find('.show-product').hasClass('hide')){
        let temp5 = $('#temp-show-products').html();
        $('.show-product').html(mustache.render(temp5));

        sumProd.find('.show-product').removeClass('hide');
    } else {
        sumProd.find('.show-product').addClass('hide')
    }
};

let showChoose = function (th){
    th.addClass('play');

    th.closest('.shipping-mode').find(".shipping-mode-title").toggleClass('active');

    th.parent().addClass('hide');

    if(th.hasClass('choose1')){


        let temp = $('#temp-mustache').html();
        $('.shipping-address-form').html(mustache.render(temp));

        $('.shipping-store-confirm').addClass('hide');
        $('.shipping-mode-confirm').removeClass('hide');

        //dà la proprietà checked alla checkbox
        th.find('.check1 input').prop("checked", true);

        $('.shipping-address-form').removeClass('hide');
        $('.choose-country').addClass('hide');

        /*---------------------------------*/
        container.find('.step-one').addClass('thirty-three');
        container.find('.step-second').addClass('thirty-three');
        container.find('.step-second').addClass('change');
        container.find('.step-three').removeClass('hide');
        /*------------------------------------*/

        /*Set text span*/
        content.find('.cont-right .product-container .service-price .internal-left').text('Spese di spedizione');
        content.find('.cont-right .product-container .service-price .internal-right').text('€ 4,99');
        content.find('.cont-right .product-container .total-price .internal-right').text('€ 21,98');
        $('.shipping-address').find('.shipping-address-title .title-string').text('Aggiungi un indirizzo di spedizione');
        /*--------------------*/

        if(th.parent().find('.choose2 input').is(':checked')){
            th.parent().find('.choose2 input').prop('checked', false);
            th.parent().find('.choose2').removeClass('play');
        }

        let temp2 = $('#temp-choose-confirm').html();
        $('.shipping-mode-confirm').html(mustache.render(temp2));

    } else {
        
        if(th.hasClass('choose2')){
            let temp3 = $('#temp-choose-store').html();
            $('.shipping-store-confirm').html(mustache.render(temp3));

            $('.shipping-mode').find('.shipping-store-confirm').removeClass('hide');
            $('.shipping-mode').find('.shipping-mode-confirm').addClass('hide');
            $('.shipping').find('.shipping-address .shipping-address-form').addClass('hide');
            $('.shipping').find('.shipping-address .choose-country').removeClass('hide');

            th.find(".check1 input").prop("checked", true);

            if(th.parent().find('.choose1 input').is(':checked')){
                th.parent().find('.choose1 input').prop('checked', false);
                th.parent().find('.choose1').removeClass('play');
            }
            /*---------------------------------*/
            container.find('.step-one').removeClass('thirty-three');
            container.find('.step-second').removeClass('thirty-three');
            container.find('.step-second').removeClass('change');
            container.find('.step-three').addClass('hide');
            /*------------------------------------*/

            /*Set text span*/
            content.find('.cont-right .product-container .service-price .internal-left').text('Spese ritiro in negozio');
            content.find('.cont-right .product-container .service-price .internal-right').text('€ 0,00');
            content.find('.cont-right .product-container .total-price .internal-right').text('€ 16,99');
            $('.shipping-address').find('.shipping-address-title .title-string').text('Selziona il punto vendita');
            /*--------------------*/

            let temp4 = $('#temp-store-country').html();
            $('.choose-country').html(mustache.render(temp4));
        }
    }
    $('.right').on('click', function(){
        var $this = $(this);
        pippo($this);
    });

};

var pippo = function ($this){
    $this.parent().addClass('hide');
    $('.shipping').find('.shipping-mode-choose').removeClass('hide');
    $('.shipping-mode').find('.shipping-mode-title').toggleClass('active');
};

$( document ).ready(function() {

    $('.count-product').on('click', function(){
        detailsProducts();
    });

    $('.choose').on('click',function(){
        var th = $(this);
        showChoose(th);
    });

});
