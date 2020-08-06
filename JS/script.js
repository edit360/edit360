$(document).ready(function() {

    //Titulo Cortado
    left();
    window.addEventListener('resize', left);

    function left() {
        let offset = $( ".hero .wrapper" ).offset();

        if (window.innerWidth >= 1409) {
            let left = offset.left + 10;
            document.querySelector(".left").style.left =  "-" + left + "px";
        }
        else {
            let left = offset.left + 70;
            document.querySelector(".left").style.left =  "-" + left + "px";
        }
    }

    //Scroll Down
    $("#scroll").click(function() {
        let height = $('.hero .wrapper article').outerHeight() - 76;
        $('html, body').animate({scrollTop: height}, 800);
    });


    //Progress Bar
    // $(window).scroll(function() {

    //     let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     let scrolled = (winScroll / height) * 100;
    
    //     document.querySelector("#bar").style.height = scrolled + "%";
    // });
});