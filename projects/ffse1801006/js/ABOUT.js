$(document).ready(function(){
    $(window).scroll(function() {
        let scroll = $("html").scrollTop()
        console.log($("html").scrollTop())

        if(scroll>0){
            $(".menu").addClass("menu-scroll") 
            $(".mini-menu").addClass("mini-menu-scroll")
            
         }else{
             $(".menu").removeClass("menu-scroll")
             $(".mini-menu").removeClass("mini-menu-scroll")
         }
    })
    $("#search-button").click(function(){
        $("#search-bar").slideDown(300)
        $("#search-bar").fadeIn(300)
    })
    $("#search-close").click(function(){
        $("#search-bar").slideUp(300)
        $("#search-bar").fadeOut(300)
    })
})