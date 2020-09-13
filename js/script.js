$(document).ready(function () {
	//burger behaviour on scroll
	window.onscroll = function () { scrollFunction() };
	function scrollFunction() {
		if (document.documentElement.clientWidth > 1830) {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				$("#logo").attr("src", "img/icons/header/blacklogo.svg");
				document.getElementById("header").style.background = " #ffffff";
			} else {
				$("#logo").attr("src", "img/icons/header/whitelogo.svg");
				document.getElementById("header").style.background = "transparent";
			}
		} else{
			document.getElementById("header").style.background = " #ffffff";
			$("#logo").attr("src", "img/icons/header/blacklogo.svg");
		}
		if (document.documentElement.clientWidth > 992) {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("header__body").style.height = "80px";
			} else {
				document.getElementById("header__body").style.height = "161px";
			}
		}
		if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 992) {
			document.getElementById("header__body").style.height = "80px";
		}
		if (document.documentElement.clientWidth < 768) {
			document.getElementById("header__body").style.height = "50px";
		}
	}
	//burger behaviour on click
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//click on mouse teaser
	$("#mainscreen__scrolldown").click(function (event) {
		$('html, body').animate({ scrollTop: '+=500px' }, 800);
	});
	//slick slider
	$('.main__slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'ease',
		infinite: false,
		touchThreshold: 20,
		centerMode: false,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {

				}
			}
		],
		appendArrows: $('.bottom-arrows'),
		appendDots: $('.bottom-left')
	});
	$('.main__slider').on('afterChange', function (event, slick, currentSlide) {
		$('#change-num').text('0' + (currentSlide + 1));
	});
	//video adaptation
});