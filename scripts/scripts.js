$(document).ready(function(){
	//  
	$('.about').click(function(){
		event.preventDefault();
		$('html, body').animate({scrollTop: $(".about-section").offset().top}, 1500);
		
	});
	$('.projects').click(function(){
		event.preventDefault();
		$('html, body').animate({scrollTop: $(".project-section").offset().top}, 1500);
		
	});
	$('.skills').click(function(){
		event.preventDefault();
		$('html, body').animate({scrollTop: $(".skills-section").offset().top}, 1500);
		
	});
	// $('.contact').click(function(){
	// 	event.preventDefault();
	// 	$('html, body').animate({scrollTop: $(".contact-section").offset().top}, 1500);
		
	// });

	$('.opening').typeIt({
     strings: 'My name is Stephen Ward...I am a full stack web developer!  Please feel free to stay awhile and look around!'
	});

	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});


	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  arrows: true,
	  centerMode: true,
	  focusOnSelect: true
	});

	$('.contact').click(function(){
		$('#myModal').modal();
	});
            
});