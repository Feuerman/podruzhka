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
		loop: true,			
		onChanged: customPager,
		responsive:{
			0: {
				items: 2,
				loop: false	
			},
			480: {
				items: 3,				
				loop: false,	
			},
			768: {
				items: 3,
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
		loop: true,
		margin: 25,
		onChanged: customPager,
		responsive:{
			0: {
				items: 1,
				loop: false
			},
			480: {
				items: 2,
				margin: 15,
				loop: false
			},
			767: {
				
				items: 2
			},
			991:{
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
		dots: false,
		loop: true,
		onChanged: customPager,
		responsive:{
			0: {
				items: 2
			},
			480: {
				items: 3,
				loop: false
			},
			767: {
				items: 3
			},
			991: {
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
		loop: true,
		margin: 15,
		onChanged: customPager,
		responsive:{
			0: {
				items:1,
				loop: false,
			},
			480: {
				items:2,
				loop: false,
			},
			767: {
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
	actionCategorySlider.each(function(index, item) {
		$(item).owlCarousel({
			dots: false,
			loop: true,
			onChanged: customPager,
			nav: false,
			margin: 25,
			responsive:{
				0: {
					items: 1,
					loop: false
				},
				480:{
					items:2,
					loop: false
				},
				680:{
					items:3,
					loop: false
				},
				767:{
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

	var productSlider = $('.js-product-image-slider');
	$(productSlider).owlCarousel({
		thumbsPrerendered: true,
		items: 1,
		dots: false,
		nav: false,
		margin: 5,
		responsive:{
			0: {
				autoWidth:true,
			},
			767: {
				autoWidth:false
			}
		}
	});

	var productSliderThumbs = $('.owl-thumbs');
	$(productSliderThumbs).owlCarousel({
		thumbItemClass: 'owl-item',
		thumbsPrerendered: true,
		items: 3,
		dots: false,
		nav: false,
		margin: 5
	});

	var shadesSlider = $('.js-slider-shades');
	$(shadesSlider).owlCarousel({
		dots: false,
		nav: true,
		margin: 7,
		responsive:{
			0: {
				items: 4
			},
			767:{
				items:4
			},
			1100:{
				items:6
			},
			1350: {
				items:8
			},
			1500:{
				items:10
			},
			1650: {
				items:12
			}
		},
	});

	var productsSlider = $('.js-slider-products');
	productsSlider.each(function(index, item) {
		$(item).owlCarousel({
			dots: false,
			loop: true,
			onChanged: customPager,
			margin: 20,
			nav: false,
			responsive:{
				0: {
					items: 1,
					loop: false,
				},
				480:{
					items:2,
					loop: false,
				},
				767:{
					items:3
				},
				850:{
					items:3
				},
				1300:{
					items:4
				},
				1500:{
					items:5
				},
				1750: {
					items:6
				}
			},
		});
	});	
	
	
	productsSlider.each(function(index, item) {
		$(item).siblings('.slider-nav').on('click', function(e) {
			if ($(e.target).hasClass('owl-prev')) {
				$(item).trigger('prev.owl.carousel');
			};
			if ($(e.target).hasClass('owl-next')) {
				$(item).trigger('next.owl.carousel');
			};
		});
	});

	var productsSliderInContent = $('.js-slider-products-in-content');
	productsSliderInContent.each(function(index, item) {
		$(item).owlCarousel({
			dots: false,
			loop: true,
			margin: 20,
			nav: false,
			responsive:{
				0: {
					items: 1,
				},
				520:{
					items:2
				},
				800:{
					items:3,
					margin: 10
				},
				1600:{
					items:4
				},
				1800: {
					items:5
				}
			},
		});
	});	
	productsSliderInContent.each(function(index, item) {
		$(item).siblings('.slider-nav').on('click', function(e) {
			if ($(e.target).hasClass('owl-prev')) {
				$(item).trigger('prev.owl.carousel');
			};
			if ($(e.target).hasClass('owl-next')) {
				$(item).trigger('next.owl.carousel');
			};
		});
	});	


	var winnerSlider = $('.js-slider-winner');
	winnerSlider.each(function(index, item) {
		$(item).owlCarousel({
			dots: false,
			nav: true,
			responsive:{
				0: {
					items: 1
				},
				768:{
					items: 3
				},				
				1601:{
					items: 2
				}
			},
		});
	});	

	var shopSlider = $('.js-slider-shop');
	shopSlider.each(function(index, item) {
		$(item).owlCarousel({
			items: 1,
			dots: false,
			nav: true,
			loop: true,
			responsive:{
				0: {
					items: 1
				}
			},
		});
	});

	var tourSlider = $('.js-slider-tour');
	tourSlider.slick({
		slidesToShow: 3,
		arrows: true,
		vertical: true,
		responsive: [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 3,
					vertical: false
					}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					vertical: false
					}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					vertical: false
					}
			}
		]
	});

	function customPager(event) {
		var items  = event.item.count;
		var item = event.item.index;
		var size = event.page.size;
		$(this.$element[0]).parents('section').eq(0).find('.custom-dots__current').text(item + size);
		$(this.$element[0]).parents('section').eq(0).find('.custom-dots__count').text(items);
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
		$('body').removeClass('open-menu-panel');
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
			if (!$(e.target).closest(".dropdown").length) {
				$(".dropdown").removeClass('open');
			}			
			e.stopPropagation();
		});
	}

	$('.filter-list--mobile input, .input-checkbox, .input-radio, .input-file, .js-select').styler();

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

	$('.js-dropdown-actions').on('click', function(e) {
		var clicked = e.target;

		if($(clicked).closest('.dropdown__title')) {
			$(this).toggleClass('open');

			return true;
		};

		if($(clicked).closest('.dropdown-list__item')) {
			$(this).toggleClass('open');

			return true;
		};		
	});

	var dropdownArticle = $('.js-dropdown-article');
	dropdownArticle.on('click', function(e) {
		if ($(e.target).closest(".articul-select__title").length) {
			$(this).toggleClass('open');
		}
	});	

	var countBlock = $('.js-input-count');
	countBlock.on('click', function(e) {
		var currentValue = $(this).find('input').val();
		if ($(e.target).closest(".count-minus").length) {
			if (currentValue == 1) return false;
			$(this).find('input').val(+currentValue - 1);
		}
		if ($(e.target).closest(".count-plus").length) {
			$(this).find('input').val(+currentValue + 1);
		}
	});

	var modalShadesBtn = $('.js-modal-shades');
	var modalShadesBtnClose = $('.shades-modal__close');
	modalShadesBtn.on('click', function() {
		$('.shades-modal').toggleClass('open');		
	});
	modalShadesBtnClose.on('click', function() {
		$('.shades-modal').removeClass('open');		
	});

	$(".shades-modal-items, .shops-list__scroll-block, .filter-list-items--scroll, .left-menu-sub--scroll").mCustomScrollbar();

	$('.shades-slider__item').on('click', function() {
		$('.shades-slider__item').removeClass('active');
		$(this).addClass('active');
	});

	$('.shades-modal .item').on('click', function() {
		$('.shades-modal .item').removeClass('active');
		$(this).addClass('active');
	});

	$('.js-search-panel').on('click', function() {
		$('.header-search').toggleClass('active');
	});

	$(document).on('click', function(e) {		
		if (!$(e.target).closest(".shades-modal, .js-modal-shades").length) {
			$(".shades-modal").removeClass('open');
		}
		if (!$(e.target).closest(".js-dropdown-article").length) {
			$(".js-dropdown-article").removeClass('open');
		}			
		e.stopPropagation();
	});

	var tabsSelector = $('.js-tabs');
	tabsInit(tabsSelector);

	function tabsInit(tabs) {
		$(tabs).each(function(index, el) {
			var tabsLink = $(el).find('.tabs__item');
			var tabsLinkMobile = $(el).find('.tabs__item--mobile');
			var tabsContent = $(el).find('.tabs-content__item');

			tabsLink.eq(0).addClass('active');
			tabsContent.eq(0).addClass('active');

			tabsLink.on('click', function() {
				var currentIndex = $(this).index();

				tabsLink.removeClass('active');
				$(this).addClass('active');

				tabsContent.removeClass('active');
				tabsContent.eq(currentIndex).addClass('active');
			});

			tabsLinkMobile.on('click', function() {
				$(this).parents('.tabs-content__item').toggleClass('active');
			});
		});
	}

	var shopsTabsLink = $('.shops-tabs__item');
	var shopsTabsContent = $('.shops-tabs__content');

	shopsTabsLink.eq(0).addClass('active');
	shopsTabsContent.eq(0).addClass('active');

	shopsTabsLink.on('click', function() {
		var currentIndex = $(this).index();

		shopsTabsLink.removeClass('active');
		$(this).addClass('active');

		shopsTabsContent.removeClass('active');
		shopsTabsContent.eq(currentIndex).addClass('active');
	});

	var shopsTabsDropdown = $('.shops-tabs--inPage .shops-tabs__item');
	shopsTabsDropdown.on('click', function() {
		shopsTabsDropdown.removeClass('active');
		$(this).addClass('active');
		$('.shops-tabs--inPage').toggleClass('active');
	});

	var shopsItemBtn = $('.js-shops-item-toggle, .shops-list-item__name');
	shopsItemBtn.on('click', function() {
		$(this).parents('.shops-list-item').toggleClass('active');
	});

	
	var contactsCategoryBtn = $('.workers-list__category-title');
	contactsCategoryBtn.on('click', function() {
		$(this).parents('.workers-list__category').toggleClass('active');
	});

	var reviewsBlockBtn = $('.js-reviews-toggle');
	reviewsBlockBtn.on('click', function() {
		$(this).toggleClass('active');
		$('.js-reviews-block').toggleClass('active');
		$('.js-reviews-add').toggleClass('active');
	});

	var shopSearchBtn = $('.js-toggle-shop-search');
	shopSearchBtn.on('click', function() {
		$(this).toggleClass('active');
		$('.search-shop').toggleClass('active');
	});

	

	var topMenuLink = $('.top-menu__link'),
		topMenuSub = $('.header-menu-sub'),
		subMenuFadeIn,
		subMenuFadeOut;
	

	$(topMenuLink).on({
		mouseleave: function (e) {
			clearTimeout(subMenuFadeIn);
			var hoverSubCategories = e.relatedTarget.closest('.header-menu-sub');
			console.log(hoverSubCategories);
			if (!hoverSubCategories) {
				subMenuFadeOut = setTimeout(function() {
					$(topMenuSub).removeClass('active');
				}, 300);
			}			
		},
		mouseenter: function (e) {			
			clearTimeout(subMenuFadeOut);
			var existSub = $(e.target).data('sub-menu');
			subMenuFadeIn = setTimeout(function() {
				if (existSub) {
					$(topMenuSub).addClass('active');
				} else {
					$(topMenuSub).removeClass('active');
				}
			}, 300);
			
		}
	});

	$('.gallery-item, .shop-tour-slider__item').fancybox({
		padding: 0
	});

	$(".video-item").fancybox({
		padding: 0,
        type : "iframe",
        onComplete : function () {
            $("#fancybox-frame").attr("allowfullscreen", "allowfullscreen")
        }
    });
	
	$('.page-wrapper').on('click', '.js-modal', function(event) {
		event.preventDefault();

		var timeout = 0;
		if ($(event.target).hasClass('js-modal-inMenu')) {
			$('.overlay-block').trigger('click');
			timeout = 500;
		}

		var self = $(this)
		setTimeout(function() {
			$.fancybox.open([
				{
					href: self.data('fancybox-href'),
					type: 'inline',
					padding: 0,
					afterShow: function() {
						$('.modal-close, .button').click(function(event) {
							$.fancybox.close();
						});
						var href = this.href;
						if(href === "#js-modal-journal") {
							var journalpopupSlider = $(href).find('.js-slider-journalpopup');
							journalpopupSlider.slick({
								slidesToShow: 1,
								arrows: true,
								asNavFor: journalpopupThumbsSlider,
								infinite: false
							});

							var journalpopupThumbsSlider = $(href).find('.js-slider-journalpopup-thumbs');
							journalpopupThumbsSlider.slick({
								slidesToShow: 7,
								asNavFor: journalpopupSlider,
								dots: false,
								focusOnSelect: true,
								centerMode: true,
								arrows: false,
								infinite: false,
								responsive: [
									{
										breakpoint: 1600,
										settings: {
											slidesToShow: 6
										}
									},
									{
										breakpoint: 1199,
										settings: {
											slidesToShow: 5
										}
									},
									{
										breakpoint: 767,
										settings: {
											slidesToShow: 3
										}
									}
								]
							});

							journalpopupSlider.on('beforeChange', function(slick, currentSlide, nextSlide) {
								setTimeout(function () {
									var currentSlideIndex;

									currentSlideIndex = currentSlide.currentSlide;
									journalpopupThumbsSlider.slick('slickGoTo', currentSlideIndex);
									// $('.range-journal').attr('value', currentSlideIndex);
								}, 100);

							});							
							// var range = $('<input />', {
							// 	type: 'range',
							// 	class: 'range-journal',
							// 	min: '1',
							// 	max: journalpopupSlider.slick("getSlick").slideCount,
							// 	value: '1'
							// });
							// range.appendTo($(href));
						}
					}
				}
			]);
		}, timeout);
	});

	var oldAction = $('#js-modal-old-action');
	if(oldAction.length) {
		$.fancybox.open({
			href: '#js-modal-old-action',
			type: 'inline',
			padding: 0,
			afterShow: function() {
				$('.modal-close, .button').click(function(event) {
					$.fancybox.close();
				});
			}
		});
	}


	var popupBtn = $('.js-popup');
	popupBtn.on('click', function() {
		var target = $(this).data('popup-href'),
			offsetTarget = $(target).offset().top,
			offsetDoc = $(document).scrollTop();
		$('.overlay-block').addClass('active');
		$('.popup-block.active, .popup-discount.active').removeClass('active');
		$(target).addClass('active');
		if(offsetTarget < offsetDoc) {
			$(target).css('top', offsetDoc + 30);
		}	
	});

	$('.popup-close, .overlay-block').on('click', function() {		
		$('.popup-block.active, .popup-discount.active').removeAttr('style');
		$('.popup-block.active, .popup-discount.active').removeClass('active');
		$('.overlay-block').removeClass('active');
	});

	var floatBlock = $('.left-block-float');
	floatSidebar(floatBlock);

	function floatSidebar(floatEl) {
		if(!floatEl.length) return false;
		
		var topPos = floatEl.offset().top,
			leftPos = floatEl.offset().left,
			floatWidth = floatEl.width(),
			leftSideH = $('.page-content__left').outerHeight();
		$(window).on('resize', function() {
				floatEl.removeClass('fixed').removeAttr('style');
				topPos = floatEl.offset().top;
				leftPos = floatEl.offset().left;
				floatWidth = floatEl.width();
		});
		$(window).scroll(function() { 
			var top = $(document).scrollTop(),
				bottom = $('.section-journal').offset().top,
				heightHeader = $('header').outerHeight();
				height = floatEl.outerHeight(),
				windowHeight = $(window).height();

			if ((windowHeight - heightHeader - height) <= 0) {
				floatEl.removeClass('fixed').removeAttr('style');
				return false;
			}			


			if ((top + heightHeader) > topPos  && (top + heightHeader) < bottom - height) {
				floatEl.addClass('fixed').css({
					width: floatWidth + 4,
					left: leftPos - 10,
					padding: '10px 2px 10px 2px',
				});
				$('.page-content__left').css('height', leftSideH);
			} else if (top > bottom - height) {
				floatEl.removeClass('fixed').removeAttr('style');
				$('.page-content__left').removeAttr('style');
			} else {
				floatEl.removeClass('fixed').removeAttr('style');
				$('.page-content__left').removeAttr('style');
			}
		});
	}

	$(".product-detail__gallery .image:not([class*='video']) img").imagezoomsl({				
        zoomrange: [1, 3],
        magnifiereffectanimate: "fadeIn",
        magnifierborder: "none",
		innerzoom: true	
	});

	//test scripts
	var reviewsForm = $('.form-reviews');
	reviewsForm.on('submit', function(e) {
		e.preventDefault();
		
		var requiredField = $('[data-input-required]');

		if(requiredField.length > 0) {
			checkRequiredField(requiredField);
			requiredField.on('change', function() {
				var value = $(this).val();
				if(value) {
					$(this).siblings('.error').remove();
				}
			});
		}

		if ($(this).find('.error').length) {
			return false;
		};

		$.fancybox.open({
			href: '#js-modal-reviews',
			wrapCSS: 'reviews-modal',
			padding: 0
		});
	});

	function checkRequiredField(items) {
		items.each(function(index, item) {
			var value = item.value;
			if(!value) {
				var container = $(item).parent();
				if (container.find('.error').length) return;
				var error = $('<span/>', {
					text: 'Обязательно для заполнения',
					class: 'error'
				});
				error.appendTo(container);
			}
		});		
	}
	
	var likeBtn = $('.js-like');
	likeBtn.on('click', function(e) {

		var state = $(this).hasClass('active');

		var str = '<span>Товар добавлен в Список желаний<span/>';
		var strReg = '<span>Для того, чтобы воспользоваться сервисом "Список желаний", требуется <button data-fancybox-href="#js-modal-auth" class="js-modal">авторизоваться</button> или <button data-fancybox-href="#js-modal-reg" class="js-modal">зарегистрироваться</button><span/>';

		if(!state) {
			var tooltip = $('<div/>', {
				class: 'tooltip-custom',
				html: strReg
			});

			tooltip.appendTo($(this));
			$(this).addClass('active');

			tooltipInit();
		}
	});
	var fade;
	function tooltipInit() {
		$('.tooltip-custom').on('mouseleave', fadeTooltip);

		function fadeTooltip(e) {
			fade = setTimeout(function() {
				$(e.currentTarget).addClass('fade');
			}, 300);
		};

		$('.tooltip-custom').on('mouseenter', function(e) {
			clearTimeout(fade);
			$(e.currentTarget).removeClass('fade');
		});
	};
	var multiElement = $('.brands-list__item ul');

	var multi = new Multicolumns({
		element: multiElement,
		column: 7,
		responsive: [
			{
				breakpoint: 1600,
				column: 5,
			},
			{
				breakpoint: 1199,
				column: 4,
			},
			{
				breakpoint: 768,
				column: 3,
			},
			{
				breakpoint: 600,
				column: 2,
			}
			,
			{
				breakpoint: 400,
				column: 1,
			}
		]
	});
});

'use strict';var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Multicolumns=function(){function a(b){_classCallCheck(this,a),this.params={column:b.column},this.element=b.element,this.breakPoint=b.responsive,this.children={},this.perColumn={},this.container={},this.init(),this.getColumns(),this.responsive()}return _createClass(a,[{key:'init',value:function init(){this.element.hide()}},{key:'getColumns',value:function getColumns(b){var d=this;$('.multicolumn').remove();var c=b||this.params.column;this.element.each(function(e,f){d.children[e]=$(f).find('li'),d.perColumn[e]=Math.ceil(d.children[e].length/c);d.container[e]=$('<div/>',{class:'multicolumn'}),d.container[e].appendTo($(f).parent());for(var k,h=0;h<c;h++){k=$('<ul/>',{width:100/c+'%'}),k.appendTo(d.container[e]);for(var m,l=0;l<d.perColumn[e]&&!!d.children[e].length;l++)m=$('<li/>',{html:$(d.children[e][0]).html()}),m.appendTo(k),d.children[e]=d.children[e].splice(1)}})}},{key:'responsive',value:function responsive(){var b=this;b.width=$(document).width(),window.addEventListener('load',function(){b.calcCount(b.width)}),window.addEventListener('resize',debounce(function(){b.width=$(document).width(),b.calcCount(b.width)},300))}},{key:'calcCount',value:function calcCount(b){var c=this.params.column;this.breakPoint.forEach(function(d){var f=b-d.breakpoint;0>f&&(c=d.column)}),this.getColumns(c)}},{key:'row',value:function row(){return $('<li/>')}}]),a}();

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };        
        var callNow = immediate && !timeout;        
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);        
        if (callNow) func.apply(context, args);        
    };
}
