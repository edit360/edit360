$(document).ready(function() {

    //Progress Bar
    $(window).scroll(function() {

        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
    
        document.querySelector("#bar").style.height = scrolled + "%";
    });

    
    //Titulo Cortado
    $(window).onresize(function() {
        let offset = $( ".left" ).offset();
        let left = offset.left + 10
        document.querySelector(".left").style.left =  "-" + left + "px";
    });


    //Scroll Down
    $("#scroll").click(function() {
        let height = $('.hero .wrapper article').outerHeight() - 100;
        $('html, body').animate({scrollTop: height}, 800);
    });
});