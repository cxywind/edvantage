$(document).ready(function($){
	// Global variable

	// Sticky header
	$(document).scroll(function(){
		var navScrollTop=$(document).scrollTop();
		if (navScrollTop > 100){
			$("#nav-wrapper .navbar").addClass("navbar-fixed-top");
		}
		else {
			$("#nav-wrapper .navbar").removeClass("navbar-fixed-top");
		}
	}); 
	// Sticky header end

	// Image fade 

	$("#service-wrapper .row .col-md-4>img").css("opacity","1")
	.mouseover(function(){
		$(this).css("opacity",".5").fadeIn("slow");

		var adSpan= $(this).parent().find("span");
		var imgadTop=($(this).height() - adSpan.height())/2;
		var imgadLeft=($(this).width() - adSpan.width())/2;
		adSpan.css({"top":imgadTop+"px","left":imgadLeft+"px"}).fadeIn("slow");
	})
	.mouseleave(function(){
		$(this).css("opacity","1").fadeIn("slow");
		$(this).parent().find("span").fadeOut("slow");

	}); 
	// image fade end

	// Scroll facebook link
	var fbWidth=$("#fb__news").width();
	var leftWidth=fbWidth - $("#fb__news>i").width();
	$("#fb__news").css("left", -fbWidth + "px");

	var fbShow=window.setTimeout(function(){
		$("#fb__news").animate({left : -leftWidth },1000);
	},1000);
	fbShow=null;

	$(window).scroll(function(){
    	$("#fb__news").animate({top : ($(window).height()/4 + $(window).scrollTop())+"px"},50);

  	});

  	$("#fb__news>i").mouseover(function(){
  		$("#fb__news").animate({left:"0px"});
  	});

  	$("#fb__news").mouseleave(function(){
  		$("#fb__news").animate({left:-leftWidth + "px"});
  	});

	// Scroll facebook link end


}); //Document end

