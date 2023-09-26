// popupCookies.js

export function popupCookies() {

	const popupCookies = document.querySelector('.popup-cookies');
	const btnPopupCookies = document.querySelector('.popup-cookies__btn');

	btnPopupCookies.addEventListener('click', () => {
		popupCookies.style.opacity = '0';
		popupCookies.style.visibility = 'hidden';
	});

}