$(document).ready(function() {

    //Menu
    $('.menu-mobile').click(function(){
        if($('.menu').hasClass("open")){
            //Fechar Menu
            // Remover class Open
            $('.menu').removeClass('open');
            $('.menu-mobile').removeClass('close');
            // Permitir Scroll
            document.body.style.overflow = "auto";
        }
        else {
            //Abrir Menu
            // Adicionar class Opened
            $('.menu').addClass('open');
            $('.menu-mobile').addClass('close');
            // Impedir Scroll
            document.body.style.overflow = "hidden";
        }
    });


    //Titulo CULTURA
    left();
    window.addEventListener('resize', left);

    function left() {
        
        //Largura do H1
        let largura = document.querySelector('.left h1').offsetWidth;
        //Aplicar a largura do H1 ao pai
        document.querySelector(".left").style.width = largura + "px";

        //Offset do Wrapper 
        let offset = $( ".hero .wrapper" ).offset().left;
        //Padding do Wrapper 
        let padding = parseInt($( ".hero .wrapper" ).css('padding-left'));
        //Distancia da Esquerda
        let left = offset + padding + 10;
        //Aplicar
        document.querySelector(".left").style.left = "-" + left + "px";
    }


    //Página de Artistas
    //Abrir
    $('.circle').click(function(){
        let value = $(this).data('circle');

        //Abrir Section Artistas
        $('.artistas').addClass('show');
        //Retirar Background do header
        $("header").css("background-image", "none");
        //Impedir scroll
        document.body.style.overflow = "hidden";

        $('.artista').each(function(){
            if (value == $(this).data('circle')){
                //Mostrar Artigo Correspondente
                $(this).css("visibility", "initial");
            }
        });
    });
    //Fechar
    $('.artistas .close a').click(function(){
        //Fechar Section Artistas
        $('.artistas').removeClass('show');
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