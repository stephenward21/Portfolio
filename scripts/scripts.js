$(document).ready(function(){
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
	$('.contact').click(function(){
		event.preventDefault();
		$('html, body').animate({scrollTop: $(".contact-section").offset().top}, 1500);
		
	});

	$('.opening').typeIt({
     strings: 'My name is Stephen Ward...I love to code!',
     speed: 60,
     autoStart: false
	});
            
});