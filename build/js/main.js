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
		loop: true
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
		margin: 25
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
});
