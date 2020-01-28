// --------------efecto menu------------
$(document).ready(function() {
    $('ul li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
    $('.barras').click(function() {
        $('nav').toggleClass('active');
    });

    var Header = $('#Header').offset().top - 67,
        Noticias = $('#Noticias').offset().top,
        Descripcion = $('#Descripcion').offset().top,
        Historial = $('#Historial').offset().top,
        Temario = $('#Temario').offset().top,
        Metodologia = $('#Metodologia').offset().top,
        Evaluacion = $('#Evaluacion').offset().top,
        Bibliografia = $('#Bibliografia').offset().top,
        Contacto = $('#Contacto').offset().top;
    // Cumpleaños = $('#Cumple')
    $(window).scroll(function() {
        console.log($(this).scrollTop());
        console.log($('#Header').offset().top);
        if ($(this).scrollTop() > Header) {
            $('#btn-header').css('background', '1269F7');
        } else {
            $('#btn-header').css('background', 'none');
        }
    });

    $('#btn-header').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Header
        }, 1000);
    });
    $('#btn-noticias').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Noticias
        }, 1000);


    });
    $('#btn-descripcion').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: Descripcion }, 1000);
    });
    $('#btn-historial').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Historial
        }, 1000);

    });
    $('#btn-temario').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Temario
        }, 1000);

    });
    $('#btn-metodologia').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Metodologia
        }, 1000);

    });
    $('#btn-evaluacion').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: Evaluacion }, 1000);

    });
    $('#btn-bibliografia').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Bibliografia
        }, 1000);

    });
    $('#btn-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Contacto
        }, 1000);

    });
    $('#btn-Noticias').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Noticias
        }, 1000);

    });


});

// var reproductor = videojs('s-video', {
//     fluid: true,
//     autoplay: 'muted',
//     loop: true
// });