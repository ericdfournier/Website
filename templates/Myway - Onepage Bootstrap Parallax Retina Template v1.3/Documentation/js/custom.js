//sliders autoplay
	//intro slider
	$('#carousel_fade_intro').carousel({
		interval: 2500,
		pause: "false"
	})
	//works sliders
	$('#carousel_horizontal_slide, #carousel_vertical_slide, #carousel_fade_1, #carousel_fade_2').carousel({
		interval: false
	})

//make section height of window
	$(function(){
		$('#intro').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#intro').css({'height':($(window).height())+'px'});
		});
	});

//custom scrollbar
	$(document).ready(
	function() {  
		$("html").niceScroll();
		}
	);

//smooth scroll on page
	$(function() {
		$('#more a, .nav a, .nav li a, .alert a, .brand, #footer li a').bind('click',function(event){
		var $anchor = $(this);

		$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
		});

		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -61
		}, 1500,'easeInOutExpo');

		event.preventDefault();
		});
	});

//gallery image hover tooltip trigger
	$("[data-thumb=tooltip]").tooltip();

//twitter
	jQuery(function($){
		$(".tweet").tweet({
		username: "awerest",
		join_text: "auto",
		avatar_size: 32,
		count: 1
		});
	});