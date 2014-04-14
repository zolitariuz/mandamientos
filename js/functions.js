(function($){

	"use strict";

	$(function(){

		//Windows JS
		$('.window').windows({
	        snapping: true,
	        snapSpeed: 200,
	        snapInterval: 500,
	        onScroll: function(scrollPos){
	            // scrollPos:Number
	        },
	        onSnapComplete: function($el){
	            // after window ($el) snaps into place
	        },
	        onWindowEnter: function($el){
	            // when new window ($el) enters viewport
	        }
	    });

	    //Fittext
	    $('h2').fitText(1.6);

	    $('.votos p').fitText(0.35);

		$('.circulo').each( function(){
			var anchoCirculo = $(this).width();
			$(this).height(anchoCirculo);
			$(this).find('p').css('line-height', anchoCirculo + 'px');
			$(this).find('i').css('line-height', anchoCirculo + 4 + 'px');
		});

		//RESIZE
	    $( window ).resize(function() {

	    	$('.circulo').each( function(){
				var anchoCirculo = $(this).width();
				$(this).height(anchoCirculo);
				$(this).find('p').css('line-height', anchoCirculo + 'px');
				$(this).find('i').css('line-height', anchoCirculo + 4 + 'px');
			});

	    });


	});

})(jQuery);