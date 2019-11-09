$(document).ready(function(){
    $('#hamburguesa').click(function() {
       if ($('#hamburguesa').attr('class') == 'checkHamb') {
           abrir()
       }
       else {
           cerrar()
       }
    })

    $('.menu-link').click(function() {
        cerrar()
    })

    var cerrar = function() {
        $('#hamburguesa').addClass('checkHamb');
        $('.hamb').css({ 'opacity': '1' });
        $('.cross').css({ 'opacity': '0' });
        $('.menu-link').css({ 'left': '-100%' });
    }

    var abrir = function() {
        $('.hamb').css({ 'opacity': '0' });
        $('.cross').css({ 'opacity': '1' });
        $('.menu-link').css({ 'left': '0' });
        $('#hamburguesa').removeClass('checkHamb');
    }
})