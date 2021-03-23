// ibg
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();

// Main menu burger
let logoHeader = document.querySelector('.header__logo');
let menuBurger = document.querySelector('.icon-menu');
let menuBody = document.querySelector('.menu__body');
menuBurger.addEventListener('click', function (e) {
	menuBurger.classList.toggle('active');
	menuBody.classList.toggle('active');
	logoHeader.classList.toggle('active');
});



var swiper = new Swiper('.swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.slider-header__arrow_next',
		prevEl: '.slider-header__arrow_prev',
	},
});