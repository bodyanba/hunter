$(document).ready(function() {

  $('.owl-1').owlCarousel({
  	responsive: {
  		0: {
  			items: 1
  		},
  		992: {
  			items: 2
  		},
  		1200: {
  			items: 2,
		    nav: true,
		    dots: false,
  		},
  		1500: {
  			items: 3,
		    nav: true,
		    dots: false,
  		},
  	},
    items: 3,
    margin: 18,
    smartSpeed: 1000,
    navText: ['', ''],
    autoHeight: true,
  });

  $('.owl-2').owlCarousel({
  	responsive: {
  		1200: {
		    nav: true,
		    dots: false,
  		},
  	},
    items: 1,
    margin: 15,
    smartSpeed: 1000,
    navText: ['', ''],
    autoHeight: true,
  });

  $('.owl-3').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    margin: 15,
    smartSpeed: 1000,
    navText: ['', ''],
    autoHeight: true,
  });

  $('.owl-4').owlCarousel({
  	responsive: {
	  	0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
		},
    nav: true,
    dots: false,
    margin: 40,
    smartSpeed: 1000,
    navText: ['', ''],
    autoHeight: true,
  });

  $('.owl-5').owlCarousel({
  	responsive: {
	  	0: {
				items: 1
			},
			992: {
				items: 2
			},
		},
    nav: true,
    dots: false,
    margin: 53,
    smartSpeed: 1000,
    navText: ['', ''],
    autoHeight: true,
  });

  $('.owl-6').owlCarousel({
  	responsive: {
	  	0: {
				items: 1
			},
			768: {
				items: 2
			},
		},
    nav: true,
    dots: false,
    margin: 45,
    smartSpeed: 1000,
    navText: ['', ''],
    autoHeight: true,
  });

  $('.video-modal').on('show.bs.modal', function() {
    var src = 'https://www.youtube.com/embed/OKW018foQmg?autoplay=1&amp;mute=0';
    $(this).find('iframe').attr('src', src);
  }).on('hidden.bs.modal', function() {
    $(this).find('iframe').removeAttr('src');
	});

  $('.video-cover img').on('click', function() {
    var src = 'https://www.youtube.com/embed/OKW018foQmg?autoplay=1&amp;mute=0';
    $(this).parent().hide();
    $(this).parent().siblings('iframe').attr('src', src);
  });

	$('input[name="options"]').on('change', function() {
		if ($(this).val() == '1')
			$('#row').removeClass('active')
		else 
			$('#row').addClass('active')
	});

	$("a[href^='#']:not([href^='#!'])").mPageScroll2id();

});









