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
		if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 992){
			document.getElementById("header__body").style.height = "80px";
		}
		if (document.documentElement.clientWidth < 768){
			document.getElementById("header__body").style.height = "50px";
		}
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			$("#logo").attr("src","img/icons/header/blacklogo.svg");
			document.getElementById("header").style.background = "#ffffff78";
		} else {
			$("#logo").attr("src","img/icons/header/whitelogo.svg");
			document.getElementById("header").style.background = "transparent";
		}
	}
	//burger behaviour on click
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		if($('.header__menu').hasClass('active')){
			$("#logo").attr("src","img/icons/header/blacklogo.svg");
		} else{
			$("#logo").attr("src","img/icons/header/whitelogo.svg");
		}
	});
});