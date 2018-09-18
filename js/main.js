$(document).ready(function () {
    $('.nav__min').click(function () {
        $('.nav ul').fadeToggle();
    });
    if ($(window).width() <= 774 && $(window).width() > 422) {
        $('#services').slick({
            slidesToShow: 1
            , slidesToScroll: 1
            , arrows: false
            , fade: true
            , asNavFor: '#services2'
        });
        $('#services2').slick({
            slidesToShow: 3
            , slidesToScroll: 1
            , asNavFor: '#services'
            , dots: false
            , centerMode: true
            , focusOnSelect: true
            , arrows: false
        });
    }
    if ($(window).width() <= 422) {
        $('#services').slick({
            slidesToShow: 1
            , slidesToScroll: 1
            , arrows: false
            , fade: true
            , asNavFor: '#services2'
        });
        $('#services2').slick({
            slidesToShow: 1
            , slidesToScroll: 1
            , asNavFor: '#services'
            , dots: false
            , centerMode: true
            , focusOnSelect: true
            , arrows: false
        });
    }
});