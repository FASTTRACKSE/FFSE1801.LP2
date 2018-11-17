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

