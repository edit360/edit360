$(document).ready(function() {

    //Progress Bar
    $(window).scroll(function() {

        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
    
        document.querySelector("#bar").style.height = scrolled + "%";
    });

    
});