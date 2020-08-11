$(document).ready(function() {

    //Titulo Cortado
    left();
    window.addEventListener('resize', left);

    function left() {
        let offset = $( ".hero .wrapper" ).offset();
        let largura = document.querySelector('.left h1').offsetWidth;
        document.querySelector(".left").style.width = largura + "px";

        if (window.innerWidth >= 1409) {
            let left = offset.left + 10;
            document.querySelector(".left").style.left = "-" + left + "px";
        }
        else {
            let left = offset.left + 70;
            document.querySelector(".left").style.left = "-" + left + "px";
        }
    }

    //Página de artistas
    //Abrir
    $('.circle').click(function(){
        let value = $(this).data('circle');

        //Abrir Section Artistas
        $('.artistas').addClass('open');

        $('.artista').each(function(){
            if (value == $(this).data('circle')){
                //Mostrar Artigo Correspondente
                $(this).css("visibility", "initial");
                //Retirar Background do header
                $("header").css("background-image", "none");
                //Impedir scroll
                document.body.style.overflow = "hidden";
            }
        });
    });
    //Fechar
    $('.artistas .close a').click(function(){
        //Fechar Section Artistas
        $('.artistas').removeClass('open');
        //Esconder Artigo Correspondente
        $('.artista').css("visibility", "hidden");
        //Repor Background do header
        $("header").css("background-image", "url(../img/fundo_base.png)");
        //Permitir scroll
        document.body.style.overflow = "auto";
    });


    //Scroll Down
    $("#scroll").click(function() {
        let height = $('.cultura').outerHeight() - 76;
        $('html, body').animate({scrollTop: height}, 800);
    });

    
    //Form
    $(".add").click(function() {
        $("form").css("display", "block");
    });

    let formClose = document.querySelector("form a")

    $(formClose).click(function() {
        $("form").css("display", "none");
    });
    
});