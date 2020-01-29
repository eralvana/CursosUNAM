// --------------efecto menu------------
$(document).ready(function() {
    // $('ul li').click(function() {
    //     $(this).siblings().removeClass('active');
    //     $(this).toggleClass('active');
    // });
    $('.barras').click(function() {
        $('nav').toggleClass('active');
    });
    if ($(window).width() > 900) {
        // var a = 79;
        var Header = $('#Header').offset().top - 70,
            Noticias = $('#Noticias').offset().top - 76,
            Descripcion = $('#Descripcion').offset().top - 76,
            Historial = $('#Historial').offset().top - 76,
            Temario = $('#Temario').offset().top - 76,
            Metodologia = $('#Metodologia').offset().top - 76,
            Evaluacion = $('#Evaluacion').offset().top - 76,
            Bibliografia = $('#Bibliografia').offset().top - 76,
            Contacto = $('#Contacto').offset().top - 76;
    }
    if ($(window).width() < 400) {
        // var a = 28;
        var Header = $('#Header').offset().top - 70,
            Noticias = $('#Noticias').offset().top - 28,
            Descripcion = $('#Descripcion').offset().top - 28,
            Historial = $('#Historial').offset().top - 28,
            Temario = $('#Temario').offset().top - 28,
            Metodologia = $('#Metodologia').offset().top - 28,
            Evaluacion = $('#Evaluacion').offset().top - 28,
            Bibliografia = $('#Bibliografia').offset().top - 28,
            Contacto = $('#Contacto').offset().top - 28;
    }
    if ($(window).width() < 353) {
        // var a = 50;
        var Header = $('#Header').offset().top - 70,
            Noticias = $('#Noticias').offset().top - 45,
            Descripcion = $('#Descripcion').offset().top - 45,
            Historial = $('#Historial').offset().top - 45,
            Temario = $('#Temario').offset().top - 45,
            Metodologia = $('#Metodologia').offset().top - 45,
            Evaluacion = $('#Evaluacion').offset().top - 45,
            Bibliografia = $('#Bibliografia').offset().top - 45,
            Contacto = $('#Contacto').offset().top - 45;
    }


    // Cumpleaños = $('#Cumple')
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 0 && $(this).scrollTop() < Descripcion) {
            $('#btn-header').addClass('active');
        } else {
            $('#btn-header').removeClass('active');
        }
        if ($(this).scrollTop() >= Descripcion && $(this).scrollTop() < Temario) {
            $('#btn-descripcion').addClass('active');
        } else {
            $('#btn-descripcion').removeClass('active');
        }
        if ($(this).scrollTop() >= Temario && $(this).scrollTop() < Metodologia) {
            $('#btn-temario').addClass('active');
        } else {
            $('#btn-temario').removeClass('active');
        }
        if ($(this).scrollTop() >= Metodologia && $(this).scrollTop() < Evaluacion) {
            $('#btn-metodologia').addClass('active');
        } else {
            $('#btn-metodologia').removeClass('active');
        }
        if ($(this).scrollTop() >= Evaluacion && $(this).scrollTop() < Bibliografia) {
            $('#btn-evaluacion').addClass('active');
        } else {
            $('#btn-evaluacion').removeClass('active');
        }
        if ($(this).scrollTop() >= Bibliografia && $(this).scrollTop() < Contacto) {
            $('#btn-bibliografia').addClass('active');
        } else {
            $('#btn-bibliografia').removeClass('active');
        }
        if ($(this).scrollTop() >= Contacto && $(this).scrollTop() < Noticias) {
            $('#btn-contacto').addClass('active');
        } else {
            $('#btn-contacto').removeClass('active');
        }
        if ($(this).scrollTop() >= Noticias && $(this).scrollTop() < Historial) {
            $('#btn-noticias').addClass('active');
        } else {
            $('#btn-noticias').removeClass('active');
        }
        if ($(this).scrollTop() >= Historial) {
            $('#btn-historial').addClass('active');
        } else {
            $('#btn-historial').removeClass('active');
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
            scrollTop: Noticias + 1
        }, 1000);
    });
    $('#btn-descripcion').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Descripcion + 1
        }, 1000);
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
            scrollTop: Temario + 1
        }, 1000);

    });
    $('#btn-metodologia').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Metodologia + 1
        }, 1000);

    });
    $('#btn-evaluacion').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Evaluacion + 1
        }, 1000);

    });
    $('#btn-bibliografia').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Bibliografia + 1
        }, 1000);

    });
    $('#btn-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Contacto + 1
        }, 1000);

    });
    // $('#btn-Noticias').on('click', function(e) {
    //     e.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: Noticias+1
    //     }, 1000);

    // });


});