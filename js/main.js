$(function () {
	$('.btn_menu').click(function () {
		$('.menu ul').slideToggle();
	});
	$('.slider').slick({
		arrows: false,
		fade: true,
		autoplay: 1300,
		dots: false
	});
	$('.slider_box').slick({
		prevArrow: $('.prev-news'),
		nextArrow: $('.next-news'),
	});
	// popup style
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function () {
				if ($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	// Scroll
	$("#menu, #top").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href

		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс

		$('body,html').animate({ scrollTop: top }, 1500);
	});
});