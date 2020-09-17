$(document).ready(function () {
	//burger behaviour on scroll
	window.onscroll = function () { scrollFunction() };
	function scrollFunction() {
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
	//scroll to beginnig by click
	$("#callme").click(function() { // ID откуда кликаем
		$('html, body').animate({
			scrollTop: $(".general__main").offset().top  // класс объекта к которому приезжаем
		}, 1000); // Скорость прокрутки
	});
});