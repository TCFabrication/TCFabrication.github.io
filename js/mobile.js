var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
 MyWork CMS Mobile Framework - JavaScript
 Author: Martin Krestan | Bj�rn Mett
 Author URL: http://www.mywork.com.au
 Version: 1.0
*/

$(document).ready(function() {

	//resest margins for menu and search, when window is resized over set widths
	$(window).resize(function() {
		if(window.innerWidth>980){
			if($(".m-menu").hasClass("active")){
				$(".m-menu").click(); 
			}
		}
	});

	//Active States
	if(document.URL.indexOf("/index_splash.php") != -1){ 
		$(".m-home").addClass("active");
	}
	else if(document.URL.indexOf("/?view=mob") != -1){ 
		$(".m-home").addClass("active");
	}
	else if(document.URL == "http://" + location.hostname + "/index.php"){ 
		$(".m-home").addClass("active");
	}
	else if(document.URL == "http://" + location.hostname + "/"){ 
		$(".m-home").addClass("active");
	}

	//Mobile Sidebar Menu
	$(".m-menu").click(function(){
		$("#container-all").toggleClass("active");
		$(".m-menu").toggleClass("active");
		$(".mobile-menu").toggleClass("active");
		$(".mobile-menu-bg").addClass("active");
	});
	
	$(".mobile-menu").css('left','-200px');
	$(".mobile-menu-bg").css('left', '-200px');

	var isExpanded = false;
	$(".m-menu").click(function () {
	    if (!isExpanded) {
	        $('.mobile-menu').animate({ left: '0' }, { duration: 500, queue: false });
	        $('.mobile-menu-bg').animate({ left: '0' }, { duration: 500, queue: false });
	        $('#container-all').animate({ 'margin-left': '200px' }, { duration: 500, queue: false });
	        $('#container-all').animate({ 'margin-right': '-200px' }, { duration: 500, queue: false });
	    }
	    else {
	        $('.mobile-menu-bg').animate({ left: '-200' }, { duration: 500, queue: false });
	        $('.mobile-menu').animate({ left: '-200' }, { duration: 500, queue: false });
	        $('#container-all').animate({ 'margin-left': '0' }, { duration: 500, queue: false });
	        $('#container-all').animate({ 'margin-right': '0' }, { duration: 500, queue: false });
	    }
	    isExpanded = !isExpanded;
	});
});


}
/*
     FILE ARCHIVED ON 12:02:55 Feb 14, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:40:55 Aug 07, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.666
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.009
  esindex: 0.013
  cdx.remote: 8.469
  LoadShardBlock: 69.096 (3)
  PetaboxLoader3.datanode: 66.86 (5)
  PetaboxLoader3.resolve: 426.037 (3)
  load_resource: 663.961 (2)
*/