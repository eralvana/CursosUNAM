// --------------efecto menu------------
$(document).ready(function() {
    $('.barras').click(function() {
        $('nav').toggleClass('active');
    });

    var Header = $('#Header').offset().top,
        Noticias = $('#Noticias').offset().top,
        Descripcion = $('#Descripcion').offset().top,
        Historial = $('#Historial').offset().top,
        Temario = $('#Temario').offset().top,
        Metodologia = $('#Metodologia').offset().top,
        Evaluacion = $('#Evaluacion').offset().top,
        Bibliografia = $('#Bibliografia').offset().top,
        Contacto = $('#Contacto').offset().top;
    // Cumpleaños = $('#Cumple')



    $('#btn-header').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Header
        }, 1000);
        // $('#btn-header2').css("background"), "#1269F7";
        // $('#btn-noticias2').css("background"), "none";
        // $('#btn-historial2').css("background"), "none";
        // $('#btn-descripcion2').css("background"), "none";
        // $('#btn-temario2').css("background"), "none";
        // $('#btn-metodologia2').css("background"), "none";
        // $('#btn-evaluacion2').css("background"), "none";
        // $('#btn-bibliografia2').css("background"), "none";
        // $('#btn-contacto2').css("background"), "none";
    });
    $('#btn-noticias').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Noticias
        }, 1000);

        // $('#btn-header2').css("background"), "none";
        // $('#btn-noticias2').css("background"), "#1269F7";
        // $('#btn-historial2').css("background"), "none";
        // $('#btn-descripcion2').css("background"), "none";
        // $('#btn-temario2').css("background"), "none";
        // $('#btn-metodologia2').css("background"), "none";
        // $('#btn-evaluacion2').css("background"), "none";
        // $('#btn-bibliografia2').css("background"), "none";
        // $('#btn-contacto2').css("background"), "none";

    });
    $('#btn-descripcion').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: Descripcion }, 1000);
        // $('#btn-header').css("background"), "#1269F7";
    });
    $('#btn-historial').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Historial
        }, 1000);
        // $('#btn-header').css("background"), "#1269F7";
    });
    $('#btn-temario').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Temario
        }, 1000);
        // $('#btn-header').css("background"), "#1269F7";
    });
    $('#btn-metodologia').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Metodologia
        }, 1000);
        // $('#btn-header').css("background"), "#1269F7";
    });
    $('#btn-evaluacion').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: Evaluacion }, 1000);
        // $('#btn-header').css("background"), "#1269F7";
    });
    $('#btn-bibliografia').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Bibliografia
        }, 1000);
        // $('#btn-header').css("background"), "#1269F7";
    });
    $('#btn-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Contacto
        }, 1000);
        // $('#btn-header').css("background"), "#1269F7";
    });
    $('#btn-Noticias').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Noticias
        }, 1000);
        // $('#btn-header').css("background"), "#1269F7";
    });


});

var reproductor = videojs('s-video', {
    fluid: true,
    autoplay: 'muted',
    loop: true
});