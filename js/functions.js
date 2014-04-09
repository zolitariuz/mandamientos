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
			$(this).find('i').css('line-height', anchoCirculo + 'px');
		});

		var $window = $(window),
        previousDimensions = {
            width: $window.width(),
            height: $window.height()
        };

	    $('.card').each( function(){
			var altoCard = $(this).height();
			$(this).height(altoCard);
		});

	    $( window ).resize(function() {

	    	$('.circulo').each( function(){
				var anchoCirculo = $(this).width();
				$(this).height(anchoCirculo);
				$(this).find('p').css('line-height', anchoCirculo + 'px');
				$(this).find('i').css('line-height', anchoCirculo + 'px');
			});

			var newDimensions = {
	            width: $window.width(),
	            height: $window.height()
	        };

	        if (newDimensions.width > previousDimensions.width) { // scaling up

				$('.card').each( function(){
					var altoCard = $(this).height();
					$(this).height(altoCard);
				});

	        } else { // scaling down

	        }

			previousDimensions = newDimensions;

	    });


	});

})(jQuery);