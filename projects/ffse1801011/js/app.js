$(document).ready(function () {
  var myScrollSpy = $("#myScrollSpy").offset().top;

  $(window).scroll(function () {

    var scrollbarLocation = $(window).scrollTop();


    // Up button
    if (scrollbarLocation > 500) {
      $("#up").show(300);
    } else {
      $("#up").hide(300);
    }

    //Fixed nav-bar
    function scrollFunction() {
      // console.log(scrollbarLocation);
      // console.log(myScrollSpy);

      if (scrollbarLocation > myScrollSpy) {
        $("#myScrollSpy").css({
          "position": "fixed",
          "top": "0",
          "z-index": "150",
          // "padding-bottom":"450px"
        });
        // $("#section1").css({
        //   "margin-top":"100px"
        // })
        $("#title").css({
          "display": "flex"
        });
        $("#title1").css({
          "font-size": "20px",
          "width": "70%"
        });
        if ($( window ).width() < 576){

          $("#myScrollSpy").css({
            "position": "fixed",
            "top": "0",
            "left": "90%",
            "z-index": "150",
          });
          $("#navbarNav").css({
            "right": "0"
          });
          var ind=($("#clear").length);
          if(ind!=1){
          $(".container__scroll").append(
         `<div id="clear" style="clear:both;"></div>`)
          }
        }
      } else {
        $("#myScrollSpy").css({
          "position": "inherit",
          "top": "inherit",
          "z-index": "inherit",
          // "width":"1140px !important"
        });
        $("#title").css({
          "display": "block"
        });
        $("#title1").css({
          "font-size": "25px",
        });
      }


    }
    scrollFunction()
  });


  $(".nav-link").click(function () {
    let target = $(this).attr("href");
    var scroll = $(target).offset().top - $("#section1").offset().top;
    // alert(scroll)
    $('.container__scroll').stop().animate({
      scrollTop: scroll
    }, 600);

    $('body,html').animate({
      scrollTop: myScrollSpy
    }, 700);
    console.log(myScrollSpy);
    event.preventDefault();

  });


  // Up button
  $('#up').click(function (elem) {
    elem.preventDefault();
    $('body,html').animate({
      scrollTop: $('#home').offset().top
    }, 700);

  });


});



window.onload = function () {
  $('body,html').scrollTop(0);


  // function getSelectedValues() {
  //   var selectedVal = $(".multiselect").val();
  //   for (var i = 0; i < selectedVal.length; i++) {
  //     var innerFunc = function innerFunc(i) {
  //       setTimeout(function () {
  //         location.href = selectedVal[i];
  //       }, i * 2000);
  //     };
  //     if (window.CP.shouldStopExecution(0)) break;
  //     innerFunc(i);
  //   }
  //   window.CP.exitedLoop(0);
  // }

  $(".btnrating").on('click', (function (e) {

    var previous_value = $("#selected_rating").val();

    var selected_value = $(this).attr("data-attr");
    $("#selected_rating").val(selected_value);

    $(".selected-rating").empty();
    $(".selected-rating").html(selected_value);

    for (i = 1; i <= selected_value; ++i) {
      $("#rating-star-" + i).toggleClass('btn-warning');
      $("#rating-star-" + i).toggleClass('btn-default');
    }

    for (ix = 1; ix <= previous_value; ++ix) {
      $("#rating-star-" + ix).toggleClass('btn-warning');
      $("#rating-star-" + ix).toggleClass('btn-default');
    }

  }));


};


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

function initialize() {
  var myLatlng = new google.maps.LatLng(16.053763, 108.201557);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  };
  var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    title: 'Hello World!'
  });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

function sanpham(name, type, price, src, src1, src2, src3, id) {
  this.name = name;
  this.type = type;
  this.price = price;
  this.src = src;
  this.src1 = src1;
  this.src2 = src2;
  this.src3 = src3;
  this.id = id;
  let obj = this;
  this.showto = function (vt, xs, sm, md) {
    $(vt).append('<div class="col-xs-' + xs + ' col-sm-' + sm + ' col-md-' + md + ' items">' +
      '<div class="thumbnail thumb">' +
      '<div  class="imgitems">' +
      '<a href="S9.html"><img src=' + obj.src + ' alt="..."> </a>' +
      '<div class="info info' + obj.id + '">' +
      '<i class="far fa-eye"></i><p> Xem nhanh</p>' +
      '</div>' +
      '</div>' +
      '<div class="cap">' +
      '<a href="S9.html"><h4>' + obj.name + '</h4></a>' +
      '<p style="color: red; font-weight:600;">' + obj.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND</p>' +
      '<p><a class="btn btn-primary buy-now ' + obj.id + '" role="button">Thêm vào giỏ hàng</a></p>' +
      '</div>' +
      '</div>' +
      '</div>')
    $('.info' + obj.id).click(function () {
      $('#zoom').fadeIn(500);
      $("body").css("overflow", "hidden");
      $('#zoom .right h4').text(obj.name).next().find('span').text(" " + obj.type);
      $('#zoom img').attr("src", obj.src);
      $(".giatien").text(obj.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'VND');
      var btninmore = $('#zoom .btninmore').removeClass().addClass("btn btn-primary buy-now btninmore " + obj.id);
      if (localStorage.getItem(obj.id) != null) {
        $("." + obj.id).text("Đã thêm vào giỏ hàng").css("background", "orange");
      } else {
        $("." + obj.id).text("Thêm vào giỏ hàng").css("background", "");
      }
      $(document).on("click", "#hide", function () {
        $(this).parent("#zoom").fadeOut(500);
        $("body").css("overflow", "visible");
      });
    });
    $(document).on("click", "." + obj.id, function () {
      Sanpham = {
        nameitem: obj.name,
        imgitem: obj.src,
        typeitem: obj.type,
        priceitem: obj.price
      }
      var stringSanpham = JSON.stringify(Sanpham);
      localStorage.setItem(obj.id, stringSanpham);
      number_item = $("#number_item").text();
      var soluong1 = 0;
      for (let i = 0; i < sp.length; i++) {
        if (localStorage.getItem(sp[i].id) != null) {
          soluong1++;
        }
      }
      localStorage.setItem("số lượng", number_item);
      setTimeout(function () {
        $("#number_item").text(soluong1);
      }, 2)
      $("." + obj.id).text("Đã thêm vào giỏ hàng").css("background", "orange");
      $("#ch .h4").remove();
      $("#ch div").remove();
      n = sp.length
      for (let i = 0; i < n; i++) {
        if (localStorage.getItem(sp[i].id) != null) {
          var objSanpham = JSON.parse(localStorage.getItem(sp[i].id));
          $("#ch").append('<div  class="col-xs-12 col-sm-12 col-md-12"><img src="' + objSanpham.imgitem + '"/>' +
            '<h4>' + objSanpham.nameitem + '</h4> </div>');
        }
      }
    })
    if (localStorage.getItem(obj.id) != null) {
      $("." + obj.id).text("Đã thêm vào giỏ hàng").css("background", "orange");
    }
    if ($(window).width() < 768) {
      $(".info").remove();
    }
  }
}
var galaxyA8 = new sanpham("Samsung Galaxy A8 (2018)", "Samsung", 10990000, "./img/S1.jpg", 4, 5, 6, "S1");
var galaxyA7 = new sanpham("Samsung Galaxy A7 (2018)", "Samsung", 7690000, "./img/S2.jpg", 4, 5, 6, "S2");
var GalaxyA6 = new sanpham("Samsung Galaxy A6 (2018)", "Samsung", 5490000, "./img/S3.jpg", 4, 5, 6, "S3");
var galaxyJ6 = new sanpham("Samsung J6+", "Samsung", 6990000, "./img/S4.jpg", 4, 5, 6, "S4");
var galaxynote8 = new sanpham("Samsung Galaxy Note 8", "Samsung", 6200000, "./img/S5.jpg", 4, 5, 6, "S5");
var GalaxyJ8 = new sanpham("Samsung Galaxy J8", "Samsung", 6290000, "./img/S6.jpg", 4, 5, 6, "S6");
var GalaxyNote9 = new sanpham("Samsung Galaxy Note 9", "Samsung", 23200000, "./img/S7.jpg", 4, 5, 6, "S7");
var GalaxyJ4 = new sanpham("Samsung Galaxy J4", "Samsung", 3490000, "./img/S8.jpg", 4, 5, 6, "S8");
var GalaxyS9 = new sanpham("Samsung Galaxy S9", "Samsung", 19990000, "./img/S9.jpg", 4, 5, 6, "S9");
var GalaxyS8plus = new sanpham("Samsung Galaxy S8 Plus", "Samsung", 17890000, "./img/S10.jpg", 4, 5, 6, "S10");
var nokia51 = new sanpham("Nokia 5.1 Plus", "Nokia", 4790000, "./img/N1.jpg", 4, 5, 6, "N1");
var nokia7plus = new sanpham("Nokia 7 plus", "Nokia", 9290000, "./img/N2.jpg", 4, 5, 6, "N2");
var nokia6plus = new sanpham("Nokia 6 plus", "Nokia", 6590000, "./img/N3.jpg", 4, 5, 6, "N3");
var nokia31 = new sanpham("Nokia 3.1", "Nokia", 2290000, "./img/N4.jpg", 4, 5, 6, "N4");
var nokia21 = new sanpham("Nokia 2.1", "Nokia", 2590000, "./img/N5.jpg", 4, 5, 6, "N5");
var nokia8110 = new sanpham("Nokia 8110", "Nokia", 1490000, "./img/N6.jpg", 4, 5, 6, "N6");
var nokia1 = new sanpham("Nokia 1", "Nokia", 1190000, "./img/N7.jpg", 4, 5, 6, "N7");
var nokia150 = new sanpham("Nokia 150", "Nokia", 650000, "./img/N8.jpg", 4, 5, 6, "N8");
var nokia105 = new sanpham("Nokia 105", "Nokia", 360000, "./img/N9.jpg", 4, 5, 6, "N9");
var nokia216 = new sanpham("Nokia 216", "Nokia", 760000, "./img/N10.jpg", 4, 5, 6, "N10");
var iphoneXsMax = new sanpham("Iphone Xs Max 256GB", "Apple", 37990000, "./img/I1.jpg", 4, 5, 6, "I1");
var iphoneXs = new sanpham("Iphone Xs 256GB", "Apple", 34990000, "./img/I2.jpg", 4, 5, 6, "I2");
var iphoneX = new sanpham("Iphone X 256GB", "Apple", 29900000, "./img/I3.jpg", 4, 5, 6, "I3");
var iphoneXr = new sanpham("Iphone Xr 256GB", "Apple", 26990000, "./img/I4.jpg", 4, 5, 6, "I4");
var iphone8plus = new sanpham("Iphone 8 Plus", "Apple", 25750000, "./img/I5.jpg", 4, 5, 6, "I5");
var iphone7plus = new sanpham("Iphone 7 Plus", "Apple", 23990000, "./img/I6.jpg", 4, 5, 6, "I6");
var iphone8 = new sanpham("Iphone 8", "Apple", 22790000, "./img/I7.jpg", 4, 5, 6, "I7");
var iphone7 = new sanpham("Iphone 7", "Apple", 13790000, "./img/I8.jpg", 4, 5, 6, "I8");
var iphone6plus = new sanpham("Iphone 6 Plus", "Apple", 11990000, "./img/I9.jpg", 4, 5, 6, "I9");
var iphone6s = new sanpham("Iphone 6s", "Apple", 11390000, "./img/I10.jpg", 4, 5, 6, "I10");
var sp = [iphoneXsMax, nokia51, galaxyA8, galaxyA7, GalaxyA6, galaxyJ6, galaxynote8, GalaxyJ8, GalaxyNote9, GalaxyJ4, GalaxyS9, GalaxyS8plus, nokia7plus, nokia6plus, nokia31, nokia21, nokia8110, nokia1, nokia150, nokia105, nokia216, iphoneXs, iphoneX, iphoneXr, iphone8plus, iphone7plus, iphone8, iphone7, iphone6plus, iphone6s]
var number_item;
$(document).ready(function () {
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if ($(this).scrollTop() > 150) {
      if (st > lastScrollTop) {
        $("#menu").css({
          "top": "-70px",
          "background": "rgba(0, 0, 0, 0.623)"
        })
      } else {
        $("#menu").css({
          "top": "0px",
        })
      }
      lastScrollTop = st;
    }
    if ($(this).scrollTop() == 0) {
      setTimeout(function () {
        $("#menu").css({
          "background": "rgba(0, 0, 0, 0.876)"
        })
      }, 500);
    }
  });
  n = sp.length
  for (let i = 0; i < n; i++) {
    if (localStorage.getItem(sp[i].id) != null) {
      var objSanpham = JSON.parse(localStorage.getItem(sp[i].id));
      $("#ch").append('<div  class="col-xs-12 col-sm-12 col-md-12"><img src="' + objSanpham.imgitem + '"/>' +
        '<h4>' + objSanpham.nameitem + '</h4> </div>');
    }
  }
  if ($("#ch div").length == 0) {
    $("#ch").append('<h4 class="h4" style="text-align: center;">Chưa có gì trong giỏ hàng</h4>')
  }
  $(".submit").click(function () {
    var search = $(".search").val();
    localStorage.setItem("search", search)
  })
  $(document).on("keyup", ".search", function () {
    $(".timkiem div").remove();
    if ($(".search").val() != '') {
      for (let i = 0; i < n; i++) {
        var o1 = [];
        var u1 = [];
        var name1 = sp[i].name.toLowerCase();
        var type1 = sp[i].type.toLowerCase();
        var a = $(".search").val().toLowerCase();
        o1[i] = name1.search(a);
        u1[i] = type1.search(a);
        if (o1[i] != -1 || u1[i] != -1) {
          $(".timkiem").append('<div  class="col-xs-12 col-sm-12 col-md-12"> <a href="S9.html"><img src="' + sp[i].src + '"/>' +
            '<h4>' + sp[i].name + '</h4> </a> </div>');
        }
      }
    }
  })
  $(window).scroll(function () {
    $(".timkiem div").remove();
  })
})
