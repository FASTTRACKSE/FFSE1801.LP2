$(document).ready(function(){
    $("#search-button").click(function(){
        $("#search-bar").slideDown(300)
        $("#search-bar").fadeIn(300);
    });
    $("#search-close").click(function(){
        $("#search-bar").slideUp(300)
        $("#search-bar").fadeOut(300);
    }); 
    $(".remove-product").click(function(){
        $(this).parents(".product").remove()
    })
    $(window).scroll(function() {
        let scroll = $("html").scrollTop()
        

        if(scroll>0){
            $(".menu").addClass("menu-scroll") 
            $(".mini-menu").addClass("mini-menu-scroll");
            
         }else{
             $(".menu").removeClass("menu-scroll")
             $(".mini-menu").removeClass("mini-menu-scroll");
         };
    });
    $("#order").click(function(){
        alert("Bạn đã đặt hàng thành công !")
        scrollTop(offsetTop);

    })
    
    $("#login").click(function(){
        alert("Chức năng này hiện đang được phát triển !")
    })
    

})
    function pay() {

        var quantity = $(".text-center");

        var price = $(".price")

        var total= $(".total");

        var a=[];s=0;
        
        for (let index = 0; index < quantity.length; index++) {

            quantity[index] = parseInt(quantity.eq(index).val());

            price[index] = parseInt(price.eq(index).text());

            a[index] = quantity[index]*price[index];

            total[index].innerHTML= a[index]+"$";

            s += a[index];                      
        }
        $("#sum").html(s+"$");
        
   
    }
    pay();
    $(".text-center").keydown(function(){
        pay();
    })

    $(".text-center").change(function(){
        pay();
    })