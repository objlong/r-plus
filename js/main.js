(function () {
	var menu = {
		renderBtn: function () {
			var l1 = 24,
				t1 = 70,
				w = $(window).width(),
				h = $(window).height(),
				tabWidth = $('.tab').width();
			$('.ps-info').css({
				'left': l1,
				'top': t1
			});
			$('.work-experience').css({
				'left': w - l1 - tabWidth,
				'top': t1
			});
			$('.personal-work').css({
				'left': l1,
				'top': h - t1 - tabWidth
			});
			$('.self-recommendation').css({
				'left': w - l1 - tabWidth,
				'top': h - t1 - tabWidth
			});
		},
		action: function () {
			this.renderBtn();
			$('.tab').addClass('action');

		},
		btnMoving: function () {
			$('.tab').map(function (index) {
				$(this).css({
					'top': 0,
					'left': 25 * index + '%'
				});
			});
		}
	}
	var controller = {
		homePage: {
			init: function () {
				menu.action();
				window.location.hash = '';
				$('.page').hide();
				$('#home-page').fadeIn(500);
			}
		},
		psInfo: {
			init: function () {
				window.location.hash = 'psInfo';
				$('.page').hide();
				$('#ps-info').fadeIn(500);
			}
		},
		workExperience: {
			init: function () {
				window.location.hash = 'workExperience';
				$('.page').hide();
				$('#work-experience').fadeIn(500);
			}
		},
		personalWork: {
			init: function () {
				window.location.hash = 'personalWork';
				$('.page').hide();
				$('#personal-work').fadeIn(500);
			}
		},
		selfRecommendation: {
			init: function () {
				window.location.hash = 'selfRecommendation';
				$('.page').hide();
				$('#self-recommendation').fadeIn(500);
			}
		},
		change: function () {
			var currentPage = window.location.hash,
				tab = $('.tab');
			if (currentPage !== '') {
				$('#menu').addClass('top');
				$('.tab').addClass('action');
				menu.btnMoving();
				$('.turn-home').show();
				for (var i = 0; i < tab.length; i++) {
					if ('#' + tab.eq(i).data('page') === currentPage) {
						tab.removeClass('active');
						tab.eq(i).addClass('active');
						break;
					}
				}
			} else {
				$('#menu').removeClass('top');
				$('.turn-home').hide();
			}
			switch (currentPage) {
				case '':
					this.homePage.init();
					break;
				case '#psInfo':
					this.psInfo.init();
					break;
				case '#workExperience':
					this.workExperience.init();
					break;
				case '#personalWork':
					this.personalWork.init();
					break;
				case '#selfRecommendation':
					this.selfRecommendation.init();
					break;
			}
		}
	};
	$('.tab').on('click', function () {
		var page = $(this).data('page');
		window.location.hash = page;
	});
	$('.turn-home').on('click', function () {
		menu.action();
		window.location.hash = '';
	}).on('touchstart', function () {
		$(this).addClass('touchDown');
	}).on('touchend', function () {
		$(this).removeClass('touchDown');
	});
	$(window).on('popstate', function () {
		controller.change();
	});
	controller.change();
})()
