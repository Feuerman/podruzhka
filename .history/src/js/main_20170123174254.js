$(document).ready(function () {
	var topSlider = $('.js-slider-top');
	topSlider.owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 800,
		responsive:{
			0: {
				dots: false
			},
			520: {
				dots: true
			}
		}
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
		onChanged: customPager,
		responsive:{
			0: {
				items: 2
			},
			480: {
				items: 3
			},
			850: {
				items: 4
			},
			1024: {
				items: 4
			},
			1200: {
				items: 6
			},
			1366:{
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
		margin: 25,
		onChanged: customPager,
		responsive:{
			0: {
				items: 1
			},
			480: {
				items: 2,
				margin: 15
			},
			767: {
				loop: false,
				items: 2
			},
			991:{
				items:3
			},
			1550:{
				items:4
			},
			1750:{
				loop: true,
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
		dots: false,
		onChanged: customPager,
		responsive:{
			0: {
				items: 2
			},
			480: {
				items: 3
			},
			767: {
				loop: false,
			},
			991: {
				loop: true,
				items: 4
			}
		}
	});
	$('.exclusive-slider-nav__left').click(function() {
		exclusiveSlider.trigger('prev.owl.carousel');
	})
	$('.exclusive-slider-nav__right').click(function() {
		exclusiveSlider.trigger('next.owl.carousel');
	})


	var discountSlider = $('.js-slider-discount');
	discountSlider.owlCarousel({
		dots: false,
		nav: true,
		margin: 10,
		navElement: 'button',
		responsive:{
			0: {
				items:1
			},
			480: {
				items: 2
			},
			767: {
				items:5
			}
		}
	});


	var instagramSlider = $('.js-slider-instagram');
	instagramSlider.owlCarousel({
		dots: false,
		margin: 15,
		onChanged: customPager,
		responsive:{
			0: {
				items:1
			},
			480: {
				items:2
			},
			767: {
				loop: false,
				items:3
			},
			991: {
				items:4
			},
			1550:{
				items:5
			},
			1750:{
				loop: true,
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
		dots: false,
		nav: true,
		navElement: 'button',
		mouseDrag: false,
		touchDrag: false,
		margin: 25,
		responsive:{
			0: {
				items: 1
			},
			480:{
				items:2
			},
			767:{
				items:3
			},
			1600: {
				items:4
			}
		},
		onChange: function () {
			setTimeout(function() {
				handlerActiveSlides();
			}, 0);
		}
	});

	var actionCategorySlider = $('.js-action-category-slider');
	actionCategorySlider.owlCarousel({
		dots: false,
		nav: false,
		margin: 25,
		responsive:{
			0: {
				items: 1
			},
			400:{
				items:2
			},
			800:{
				items:3
			},
			1600:{
				items:4
			},
			1750: {
				items:5
			}
		},
	});	
	actionCategorySlider.each(function(index, item) {
		$(item).siblings('.slider-nav').on('click', function(e) {
			if ($(e.target).hasClass('left')) {
				$(item).trigger('prev.owl.carousel');
			};
			if ($(e.target).hasClass('right')) {
				$(item).trigger('next.owl.carousel');
			};
		});
	});

	function customPager(event) {
		var items  = event.item.count;
		var item = event.item.index;
		var size = event.page.size;
		$(this.$element[0]).parents('section').find('.custom-dots__current').text(item + size);
		$(this.$element[0]).parents('section').find('.custom-dots__count').text(items);
	}

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


	var topNavBtn = $('.js-top-nav-toggle');
	topNavBtn.on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('open-menu-panel');
	});
	$('.overlay-block--open-nav').on('click', function () {
		$('body').toggleClass('open-menu-panel');
	});


	var footerMenuContainer = $('.footer-menu-section__item');
	var footerMenuBtn = $('.footer-menu-section__item .title');
	footerMenuBtn.on('click', function () {
		$(this).parents(footerMenuContainer).toggleClass('active');
	});

	$('.left-menu__link').on('click', function () {
		$(this).parents('.left-menu__item').toggleClass('active');
	});
	$('.left-menu-sub__link').on('click', function (e) {
		if ($(e.target).closest(".left-menu-sub--level-2").length) {
			return false;
		}
		$(this).parents('.left-menu-sub__item').toggleClass('active');
	});

	$('.js-link-children').on('click', function (e) {
		e.preventDefault();
		var container = $(this).parents('.mobile-menu-blocks');
		var currentMenuIndex = container.attr('menu-level');
		$('.mobile-menu-blocks').each(function (index, el) {
			var menuIndex = $(this).attr('menu-level');
			if (menuIndex == currentMenuIndex) {
				$(this).removeClass('active');
			} else if (menuIndex == (+currentMenuIndex + 1)) {
				$(this).addClass('active');
			}
		});

		$('.mobile-menu-header__item--auth').hide();
		$('.mobile-menu-header__item--back-to').show();

		if(currentMenuIndex == 1) {
			$('.mobile-menu-container').addClass('color-pink');
		}
	});

	$('.mobile-menu-header__item--back-to button').on('click', function (e) {
		var activeIndex = $('.mobile-menu-blocks.active').attr('menu-level');
		$('.mobile-menu-blocks').each(function (index, el) {
			var menuIndex = $(this).attr('menu-level');
			if (menuIndex == (activeIndex - 1)) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
		if((activeIndex - 1) == 1) {
			$('.mobile-menu-header__item--auth').show();
			$('.mobile-menu-header__item--back-to').hide();
			$('.mobile-menu-container').removeClass('color-pink');
		};
	});

	var container = $('.filter-list--mobile');

	$(window).load(function(){
		var windowWidth = $(window).width();
		if(windowWidth > 992) {
			$(container).addClass("dropdown");
		} else {
			$(container).removeClass("dropdown");
		};
		filterListDropdown();
	});

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth > 992) {
			$(container).addClass("dropdown");
		} else {
			$(container).removeClass("dropdown");
		};
	});

	function filterListDropdown() {
		$('.filter-list').on('click', function (e) {
			var droped = $(this).hasClass('dropdown');
			if (!droped) return false;

			if ($(e.target).closest(".filter-list__title").length) {
				var opened = $(this).hasClass('open');
				if(opened) {
					$(this).toggleClass('open');
					return false;
				}
				$('.filter-list.dropdown').removeClass('open');
				$(this).toggleClass('open');
			}

			if ($(e.target).closest(".filter-list-item").length) {
				var currentItem = $(e.target).closest(".filter-list-item");
				var data = currentItem.find('label').html();

				$(this).find('.filter-list__title span').html(data);
				$(this).find('.filter-list-item').removeClass('active');
				$(this).find('input').attr('checked', false);
				$(this).find('.jq-checkbox').removeClass('checked');

				currentItem.addClass('active');
				currentItem.find('input').attr('checked', true);
				currentItem.find('.jq-checkbox').addClass('checked');

				$(this).removeClass('open');
			}
		});

		$(document).on('click', function(e) {
			if (!$(e.target).closest(".filter-list").length) {
				$(".filter-list").removeClass('open');
			}
			e.stopPropagation();
		});
	}

	$('.filter-list--mobile input').styler();
	$('.js-select').styler();

	$('.filter-list__mobile-title').on('click', function(e) {
		$(this).parents('.catalog-filter__item').toggleClass('active');
	});

	$('.filter-list__show-all').on('click', function(e) {
		$(this).siblings('.filter-list-items').addClass('active');
		$(this).hide();
	});

	$('.js-toggle-filters').on('click', function(e) {
		$('.catalog-filter').toggleClass('active');
	});

});
