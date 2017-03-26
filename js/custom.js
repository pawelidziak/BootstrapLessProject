/**
 * Created by pawel.idziak on 25.03.2017.
 */

$(document).ready(function () {

    // top slider
    $('#top-slider').carousel({
        interval: 4000
    });

    // promo slider
    $('#promo-slider').carousel({
        interval: 3000
    });

    //menu mobilne
    mobileMenu();

});


// zmiana wysokosci headera (scroll dla naglowka)
$(window).bind('scroll', function (event) {
    if($(window).scrollTop() > 20){
        $('.main-header').addClass('header-short');
        $('.main-logo img').css('max-height', 28);
    }else{
        $('.main-header').removeClass('header-short');
        $('.main-logo img').css('max-height', 42);
    }
});

// Menu mobilne
function mobileMenu() {
    $('#mobile-icon').bind('click', function (event) {
        event.preventDefault(); // wylaczam akcje przekirowania do jakiejs strony
        $('#main-nav-mobile').show(); // pokazuje menu mobilne
    });
    // przycisk X
    $('#mobile-close').bind('click', function (event) {
        event.preventDefault(); // wylaczam akcje przekirowania do jakiejs strony
        $('#main-nav-mobile').hide(); // ukrywam menu mobilne
    });
}