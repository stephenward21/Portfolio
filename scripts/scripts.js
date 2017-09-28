$(document).ready(function(){
	// $('.about-section').hide();
 //    var d = $('.about-section');
 //    var dPosTop = d.offset().top;
 //    var win = $(window);
 //    win.scroll(function(e){
 //        var scrollTop = win.scrollTop();
 //        if(scrollTop >= dPosTop){
 //          d.show(3000);
 //        }
 //      else{
 //        d.hide(3000);
 //      }
 //    });
    // $('.proj-skills').hide();
    // var d = $('.proj-skills');
    // var dPosTop = d.offset().top;
    // var win = $(window);
    // win.scroll(function(e){
    //     var scrollTop = win.scrollTop();
    //     if(scrollTop >= dPosTop){
    //       d.show(3000);
    //     }
    //   else{
    //     d.hide(3000);
    //   }
    // });


	//  
	$('.about').click(function(){
		event.preventDefault();
		$('html, body').animate({scrollTop: $(".about-section").offset().top}, 1500);
		// setTimeout(function(){
		// 	$('.about-section').show();
		// }, 2000);
		
		
		// $('.about-section').css('display', 'unset');

		
	
		
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

	setTimeout(function(){
		$('.scroll-down-section').fadeIn();
	}, 12500);

	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  infinite: true,
	  autoplaySpeed: 3000,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1690,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true
	      }
	    },
	    {
	      breakpoint: 1280,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true
	      }
	    },
	    {
	      breakpoint: 980,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true
	      }
	    },
	    {
	      breakpoint: 736,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true
	      }
	    }
	  // fade: true,
	  // asNavFor: '.slider-nav',
	  // initialSlide: 1
	  ]
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