$(document).ready(function () {
	//burger behaviour
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	window.onscroll = function () { scrollFunction() };
	function scrollFunction() {
		if (document.documentElement.clientWidth > 992) {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("header__body").style.height = "80px";
			} else {
				document.getElementById("header__body").style.height = "161px";
			}
		} else {
			document.getElementById("header__body").style.height = "80px";
		}
	}
});