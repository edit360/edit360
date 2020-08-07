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

        $('.artista').each(function(){
            if (value == $(this).data('circle')){
                //Abrir
                $(this).addClass('open');
                //Retirar Background do header
                $("header").css("background-image", "none");
                //Impedir scroll
                document.body.style.overflow = "hidden";
            }
        });
    });
    //Fechar
    $('.artista a').click(function(){
        //Fechar
        $('.artista').removeClass('open');
        //Repor Background do header
        $("header").css("background-image", "url(../img/fundo_base.png)");
        //Permitir scroll
        document.body.style.overflow = "auto";
    });


    //Scroll Down
    $("#scroll").click(function() {
        let height = $('.hero .wrapper article').outerHeight() - 76;
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


    //Progress Bar
    $(window).scroll(function() {

        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
    
        document.querySelector("#progressBar").style.height = scrolled + "%";
    });
});