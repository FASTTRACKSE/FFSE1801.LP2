$(document).ready(function(){
    $(window).scroll(function() {
        let scroll = $("html").scrollTop()
        // console.log($("html").scrollTop())

        if(scroll>0){
            $(".menu").addClass("menu-scroll") 
            $(".mini-menu").addClass("mini-menu-scroll");
            
         }else{
             $(".menu").removeClass("menu-scroll")
             $(".mini-menu").removeClass("mini-menu-scroll");
         };
    });
    // $(document).ready(function(){
    //     $("#inputproduct").on("keyup", function() {
    //       var value = $(this).val().toLowerCase();
    //       $("#productID *").filter(function() {
    //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //       });
    //     });
    // });
    $("#search-button").click(function(){
        $("#search-bar").slideDown(300)
        $("#search-bar").fadeIn(300);
    });
    $("#search-close").click(function(){
        $("#search-bar").slideUp(300)
        $("#search-bar").fadeOut(300);
    });
    
    // var arrayproduct =[];
    // var listimageproduct = $(".card-img-top");
    // var listtitle = $(".card-title");
    // var listprice = $(".card-text");
    // console.log(arrayproduct);
    // for ( var i = 0; i < listimageproduct.length; i++) {
    //     arrayproduct[i] =
    //     { image: listimageproduct[i].src,
    //       title: listtitle[i].innerHTML,
    //       price: listprice[i].innerHTML}
    // }

    // // console.log(arrayproduct);
    // function increasecost() {
    //     arrayproduct.sort(function compare(a, b) {
    //         return a.price - b.price;
    //     });
    //     console.log(arrayproduct);
    // }

    // function decreasecost() {
    //     arrayproduct.sort(function compare(b, a) {
    //         return a.price - b.price;
    //     })
    // }

    // function nameaz() {
    //     arrayproduct.sort(function compare(b, a) {
    //         var textA = a.title.toUpperCase();
    //         var textB = b.title.toUpperCase();
    //         return (textA < textB) ? - 1: (textA > textB) ? 1 : 0;
    //     })
    // } 
    

    // function sapxep(index){
    //     alert(sapxep());
    //     if(index== 0){
            
    //         for (var i = 0; i < arrayproduct.length; i++) {
    //             $(".card-img-top")[i].src=arrayproduct[i].image;
    //             $(".card-title")[i].innerHTML = arrayproduct[i].title;
    //             $(".card-text")[i].innerHTML = arrayproduct.price;
    //         }
    //     }
    //     console.log(arrayproduct);
    //     if(index == 1) {increasecost();changePosition();}
    //     if(index == 2) {decreasecost();changePosition();}
    //     if(index == 3) {nameaz();changePosition();}
    // }

    // function changePosition() {
    //     for ( var i = 0; i < arrayproduct.length; i++) {
    //         $(".card-img-top")[i].src = arrayproduct[i].image;
    //         $(".card-title")[i].innerHTML = arrayproduct[i].title;
    //         $(".card-text")[i].innerHTML = arrayproduct[i].price;
    //     }
    // }

  

    // $("#checkbox_1").click(function(){
    //     sapxep(1);
    //     console.log(sapxep());
    // })

    

});
        var arraybook=[];
        var listimage=$(".card-img-top");
        var listtitle=$(".card-title");
        var listprice=$(".card-text");
        for (var i = 0; i < listimage.length; i++) {
            arraybook[i]=
            {image:listimage[i].src,
                title:listtitle[i].innerHTML,
                price:listprice[i].innerHTML}
        }
        console.log(arraybook);
        var arraybookorigin=[];
        var listimageorigin=$(".card-img-top");
        var listtitleorigin=$(".card-title");
        var listpriceorigin=$(".card-text");
        for (var i = 0; i < listimageorigin.length; i++) {
            arraybookorigin[i]=
            {image:listimageorigin[i].src,
                title:listtitleorigin[i].innerHTML,
                price:listpriceorigin[i].innerHTML}
        }

        
        function sortpriceup(){
        arraybook.sort(function compare(a, b) {
            return a.price - b.price;
            });
        }
        function sortpricedown(){
        arraybook.sort(function compare(b, a) {
            return a.price - b.price;
            });
        }
        function sortnameAZ(){
        arraybook.sort(function compare(a, b) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }
        function sortnameZA(){
        arraybook.sort(function compare(b, a) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }

        
        function sapxep(index){
            if(index == 0){
                for (var i = 0; i < arraybookorigin.length; i++) {
                    $(".card-img-top")[i].src=arraybookorigin[i].image;
                    $(".card-title")[i].innerHTML=arraybookorigin[i].title;
                    $(".card-text")[i].innerHTML=arraybookorigin[i].price;
                }
            }
            if(index == 1){sortpriceup();changePosition();}
            if(index == 2){sortpricedown();changePosition();}
            if(index == 3){sortnameAZ();changePosition();}
            if(index == 4){sortnameZA();changePosition();}	
            console.log(arraybook)
        }
        function changePosition(){
            for (var i = 0; i < arraybook.length; i++) {
                    $(".card-img-top")[i].src=arraybook[i].image;
                    $(".card-title")[i].innerHTML=arraybook[i].title;
                    $(".card-text")[i].innerHTML=arraybook[i].price;
            }
        }

        
        