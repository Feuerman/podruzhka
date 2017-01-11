$(document).ready(function () {
	var topSlider = $('.js-slider-top');
	topSlider.owlCarousel({
		items: 1,
		margin: 20,
		loop: true,
		dots: true,
		smartSpeed: 800
	});
	$('.top-slider-nav__left').click(function() {
		topSlider.trigger('prev.owl.carousel');
	})
	$('.top-slider-nav__right').click(function() {
		topSlider.trigger('next.owl.carousel');
	})


	var actionSlider = $('.js-slider-action');
	actionSlider.owlCarousel({
		items: 9,
		dots: false,
		loop: true,
		responsive:{
			0: {
				items: 6
			},
			1360:{
				items:7
			},
			1550:{
				items:8
			},
			1700:{
				items:9
			}
		}
	});
	$('.action-slider-nav__left').click(function() {
		actionSlider.trigger('prev.owl.carousel');
	})
	$('.action-slider-nav__right').click(function() {
		actionSlider.trigger('next.owl.carousel');
	})


	var novetlySlider = $('.js-slider-novetly');
	novetlySlider.owlCarousel({
		items: 5,
		dots: false,
		loop: true,
		margin: 25,
		responsive:{
			0: {
				items: 3
			},
			1360:{
				items:3
			},
			1550:{
				items:4
			},
			1750:{
				items:5
			}
		}
	});
	$('.novetly-slider-nav__left').click(function() {
		novetlySlider.trigger('prev.owl.carousel');
	})
	$('.novetly-slider-nav__right').click(function() {
		novetlySlider.trigger('next.owl.carousel');
	})


	var exclusiveSlider = $('.js-slider-exclusive');
	exclusiveSlider.owlCarousel({
		items: 4,
		dots: false,
		loop: true
	});
	$('.exclusive-slider-nav__left').click(function() {
		exclusiveSlider.trigger('prev.owl.carousel');
	})
	$('.exclusive-slider-nav__right').click(function() {
		exclusiveSlider.trigger('next.owl.carousel');
	})


	var instagramSlider = $('.js-slider-instagram');
	instagramSlider.owlCarousel({
		dots: false,
		loop: true,
		margin: 15,
		responsive:{
			0: {
				items: 3
			},
			1360:{
				items:4
			},
			1550:{
				items:5
			},
			1750:{
				items:6
			}
		}
	});
	$('.instagram-slider-nav__left').click(function() {
		instagramSlider.trigger('prev.owl.carousel');
	})
	$('.instagram-slider-nav__right').click(function() {
		instagramSlider.trigger('next.owl.carousel');
	})


	var journalSlider = $('.js-slider-journal');
	journalSlider.owlCarousel({
		items: 4,
		dots: false,
		nav: true,
		navElement: 'button',
		mouseDrag: false,
		touchDrag: false,
		margin: 25,
		onChange: function () {
			setTimeout(function() {
				handlerActiveSlides();
			}, 0);
		}
	});

	function handlerActiveSlides(initIndex, count) {
		var slides = journalSlider.find('.owl-item');
		var classIndex = 1;
		slides.removeClass (function (index, className) {
			return (className.match (/(^|\s)journal-active-\S+/g) || []).join(' ');
		});
		slides.each(function (index, item) {
			if ($(item).hasClass('active')) {
				$(item).addClass('journal-active-' + classIndex);
				classIndex++;
			}
		});
	}
});
