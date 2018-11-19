$(function search() {
    $("#search").click(function() {
        $("#nav-search").css("display", "none");
        $("#form-search").css("display", "block");
    });
    $("#dong").click(function() {
        $("#nav-search").css("display", "flex");
        $("#form-search").css("display", "none");
    });
    $("#df").click(function seth() {
        document.getElementById("sidenav").style.height = "60%";
        $("#bt").click(function sethsd() {
            document.getElementById("sidenav").style.height = "0";
        });
    });
    $("#df1").click(function seth1() {
        document.getElementById("sidenav").style.height = "60%";
        $("#bt1").click(function sethsd1() {
            document.getElementById("sidenav").style.height = "0";
        });
    });
    $("#df2").click(function seth1() {
        document.getElementById("sidenav").style.height = "60%";
        $("#bt2").click(function sethsd1() {
            document.getElementById("sidenav").style.height = "0";
        });
    });
    $("#df3").click(function seth1() {
        document.getElementById("sidenav").style.height = "60%";
        $("#bt3").click(function sethsd1() {
            document.getElementById("sidenav").style.height = "0";
        });
    });
    $("#df4").click(function seth1() {
        document.getElementById("sidenav").style.height = "60%";
        $("#bt4").click(function sethsd1() {
            document.getElementById("sidenav").style.height = "0";
        });
    });
    $("#df5").click(function seth1() {
        document.getElementById("sidenav").style.height = "60%";
        $("#bt5").click(function sethsd1() {
            document.getElementById("sidenav").style.height = "0";
        });
    });
    $("#df6").click(function seth1() {
        document.getElementById("sidenav").style.height = "60%";
        $("#bt6").click(function sethsd1() {
            document.getElementById("sidenav").style.height = "0";
        });
    });
    $("#df7").click(function seth1() {
        document.getElementById("sidenav").style.height = "60%";
        $("#bt7").click(function sethsd1() {
            document.getElementById("sidenav").style.height = "0";
        });
    });
    $("#df8").click(function seth2() {
        document.getElementById("sidenav").style.height = "60%";
        $("#bt8").click(function sethsd2() {
            document.getElementById("sidenav").style.height = "0";
        });
    });
    // 
    $("#df8").click(function seth2() {
        document.getElementById("sidenav").style.height = "60%";
        $("#bt8").click(function sethsd2() {
            document.getElementById("sidenav").style.height = "0";
        });
    });
    // 
    $("input[value='Hoàn tất']").attr("data-dismiss", "modal");
});
window.onscroll = function() {
    scrollFunction();
    scrollFunction1()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar-1").style.background = "black"; //thay đổi màu của thanh điều hướng khi lướt trang
        document.getElementById("body").code = ssss3();
    } else {
        document.getElementById("navbar-1").style.background = "none"; //thay đổi màu của thanh điều hướng khi lướt trang nhưng là về trạng thái ban đầu

    };
};

function ssss3() {
    $('#watcha').animate({
        paddingTop: '1rem',
    }, 1000);
};
$(document).ready(function() {
    var cont = "1";
    $("#trynow10").click(function() {

        $("#countUp").html(cont);
        cont++;
    });
});