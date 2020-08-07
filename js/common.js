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

});









