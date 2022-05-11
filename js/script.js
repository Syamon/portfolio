$(function() {
    $(window).scroll(function() {
        $('.offer__headding').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 150) {
                $(this).addClass("animate__jello");
            }
        });
    });
    $(window).scroll(function() {
        $('.form__input').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.input__right').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
});