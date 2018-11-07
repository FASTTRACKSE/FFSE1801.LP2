$(document).ready(function(){
    $("#search-button").click(function(){
        $("#search-bar").slideDown(300)
        $("#search-bar").fadeIn(300);
    });
    $("#search-close").click(function(){
        $("#search-bar").slideUp(300)
        $("#search-bar").fadeOut(300);
    });
    $("a[href*='#']:not([href='#])").click(function () {
        let target = $(this).attr("href");
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
    $('.product-slide').carousel({interval: 4000})
    $('.zoom').zoom();
})