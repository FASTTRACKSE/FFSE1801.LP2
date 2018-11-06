function go(obj){
	$('html,body').animate({
		scrollTop: $(obj).offset().top
	});
}
$(document).ready(function(){
	$('#menu1').click(function(){
		go('#about');
	});
	$('#menu1-1').click(function(){
		go('#about');
	});
	$('#menu2').click(function(){
		go('#skills');
	});
	$('#menu2-1').click(function(){
		go('#skills');
	});
	$('#menu3').click(function(){
		go('#experience');
	});
	$('#menu3-1').click(function(){
		go('#experience');
	});
	$('#menu4').click(function(){
		go('#projects');
	});
	$('#menu4-1').click(function(){
		go('#projects');
	});
	$('#menu5').click(function(){
		go('#education');
	});
	$('#menu5-1').click(function(){
		go('#education');
	});
	$('#menu6').click(function(){
		go('#contact');
	});
	$('#menu6-1').click(function(){
		go('#contact');
	});
	$(window).bind('scroll', function(){
		var pos = $(window).scrollTop();
		console.log($(window).scrollTop());
		if(pos>=760.7999877929688){
			$('#menu').show();
			$('#nav9').show();
		}else{
			$('#menu').hide();
			$('#nav9').hide();
		}
		if(pos>=760.7999877929688){
			$('#menu-2').hide(600);
		}else{
			$('#menu-2').show();
		}
		clearAll();
		if(pos>=760.7999877929688 && pos<1497.5999755859375){
			$('#menu1').css("background","#cccccc");
		}
		if(pos>=1497.5999755859375 && pos<2073.60009765625){
			$('#menu2').css("background","#cccccc");
			$('#sk1').css("width","493.5px");
			$('#sk2').css("width","675px");
			$('#sk3').css("width","375px");
			$('#sk4').css("width","75px");
			$('#sk5').css("width","750px");
		}
		if(pos>=2073.60009765625 && pos<2924.800048828125){
			$('#menu3').css("background","#cccccc");
		}
		if(pos>=2924.800048828125 && pos<3612.800048828125){
			$('#menu4').css("background","#cccccc");
		}
		if(pos>=3612.800048828125 && pos<4380){
			$('#menu5').css("background","#cccccc");
		}
		if(pos>=4380){
			$('#menu6').css("background","#cccccc");
		}
	});
});
function clearAll(){
	list= $('a');
	for(i=0;i<=list.length;i++){
		list.eq(i).css("background","none");
	}
}
$(document).ready(function () {
            $("a[href*='#']:not([href='#])").click(function () {
                let target = $(this).attr("href");
                $('html,body').stop().animate({
                    scrollTop: $(target).offset().top
                },1000);
            });
        });