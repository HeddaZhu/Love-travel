$(window).load(function(){
	$('.slider')._TMS({
		preset:'diagonalFade',
		easing:'easeOutQuad',
		duration:800,
		pagination:true,
		slideshow:2000
	})
	$("#testimonials").jCarouselLite({
		btnNext: ".down",
		btnPrev: ".up",
		visible: 1,
		speed: 600,
		vertical: true,
        circular: true,
		easing: 'easeOutCirc'
	});
})

/* jquery鼠标悬停上下显示遮罩标题与内容*/
$(document).ready(function () {
	style = 'easeOutQuart';
	$('.photo').hover(
		function() {
			$(this).children('div:first').stop(false,true).animate({top:0},{duration:200, easing: style});
			$(this).children('div:last').stop(false,true).animate({bottom:0},{duration:200, easing: style});
		},
		function() {
			$(this).children('div:first').stop(false,true).animate({top:-50},{duration:200, easing: style});
			$(this).children('div:last').stop(false,true).animate({bottom:-50},{duration:200, easing: style});
		}
	);
});
/*jquery点击各大洲显示详细信息*/
$(window).load(function(){
	$(".wordMap a").click(function(){
		$(".sph1").css("display","none");
		var a = "." ;
		a += $(this).data("d");
		$(a).css("display","block");
	})
})
/*心形图品组合*/
$(function(){
	$(".heartPic li").hover(function(){
		$(this).addClass("on");
		$(this).find("img").animate({"width":"210px","height":"250px"});
		$(this).find("div").animate({"width":"210px","height":"270px"});
		$(this).find(".pTxt").animate({"width":"210px","height":"60px"});
		$(this).find(".pTxt").css("display","block");
		$(this).find("p").addClass("showDiv");
	},function(){
		$(this).animate({height:"100px"},100).removeClass("on");
		$(this).find("img").stop(true,true).animate({"width":"100px","height":"100px"});
		$(this).find("div").stop(true,true).animate({"width":"100px","height":"100px"});
		$(this).find(".pTxt").stop(true,true).animate({"width":"0px","height":"0px"});
		$(this).find(".pTxt").css("display","none");
	});
})