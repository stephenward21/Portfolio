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

	$('.to-top').click(function(){
		event.preventDefault();
		$('html, body').animate({scrollTop: $(".nav").offset().top}, 1500);
		$('.contact').css({'background-color': '#7FFF00' , 'border-radius': '9%'})
		
	});

	$('.opening').typeIt({
     strings: 'My name is Stephen Ward...I\'m a full stack web developer!  Please feel free to stay awhile and look around!'
	});

	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  infinite: true,
	  autoplaySpeed: 3000,
	  arrows: false
	  // fade: true,
	  // asNavFor: '.slider-nav',
	  // initialSlide: 1
	});


	// $('.slider-nav').slick({
	//   slidesToShow: 3,
	//   slidesToScroll: 1,
	//   asNavFor: '.slider-for',
	//   arrows: true,
	//   centerMode: true,
	//   focusOnSelect: true
	// });

	$('.contact').click(function(){
		$('#myModal').modal();
	});
            
});