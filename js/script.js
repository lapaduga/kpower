$(document).ready(function () {
	//burger behaviour on scroll
	window.onscroll = function () { scrollFunction() };
	function scrollFunction() {
		if (document.documentElement.clientWidth > 992) {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("header__body").style.height = "80px";
				document.getElementById("header").style.background = "#33aaffe7";
			} else {
				document.getElementById("header__body").style.height = "161px";
				document.getElementById("header").style.background = "transparent";
			}
		}
	}
	//burger behaviour on click
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});