$(document).ready(function(){
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
    
    $("#search-button").click(function(){
        $("#search-bar").slideDown(300)
        $("#search-bar").fadeIn(300);
    });
    $("#search-close").click(function(){
        $("#search-bar").slideUp(300)
        $("#search-bar").fadeOut(300);
    });
    
    
    $("#login").click(function(){
        alert("Chức năng này hiện đang được phát triển !")
    })
    

});
        var arrayproduct=[];
        var listimage=$(".card-img-top");
        var listtitle=$(".card-title");
        var listprice=$(".card-text");
        for (var i = 0; i < listimage.length; i++) {
            arrayproduct[i]=
            {image:listimage[i].src,
                title:listtitle[i].innerHTML,
                price:listprice[i].innerHTML}
        }
        console.log(arrayproduct);
        var arrayproductorigin=[];
        var listimageorigin=$(".card-img-top");
        var listtitleorigin=$(".card-title");
        var listpriceorigin=$(".card-text");
        for (var i = 0; i < listimageorigin.length; i++) {
            arrayproductorigin[i]=
            {image:listimageorigin[i].src,
                title:listtitleorigin[i].innerHTML,
                price:listpriceorigin[i].innerHTML}
        }

        
        function sortpriceup(){
        arrayproduct.sort(function compare(a, b) {
            return a.price - b.price;
            });
        }
        function sortpricedown(){
        arrayproduct.sort(function compare(b, a) {
            return a.price - b.price;
            });
        }
        function sortnameAZ(){
        arrayproduct.sort(function compare(a, b) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }
        function sortnameZA(){
        arrayproduct.sort(function compare(b, a) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }

        
        function sapxep(index){
            if(index == 0){
                for (var i = 0; i < arrayproductorigin.length; i++) {
                    $(".card-img-top")[i].src=arrayproductorigin[i].image;
                    $(".card-title")[i].innerHTML=arrayproductorigin[i].title;
                    $(".card-text")[i].innerHTML=arrayproductorigin[i].price;
                }
            }
            if(index == 1){sortpriceup();changePosition();}
            if(index == 2){sortpricedown();changePosition();}

            
            console.log(arrayproduct)
        }
        function changePosition(){
            for (var i = 0; i < arrayproduct.length; i++) {
                    $(".card-img-top")[i].src=arrayproduct[i].image;
                    $(".card-title")[i].innerHTML=arrayproduct[i].title;
                    $(".card-text")[i].innerHTML=arrayproduct[i].price;
            }
        }

        
        