// popupCookies.js

export function popupCookies() {

	const btnPopupCookies = document.querySelector('.popup-cookies__btn');

	if (btnPopupCookies) {
			btnPopupCookies.addEventListener('click', () => {
					const popupCookies = document.querySelector('.popup-cookies');
					if (popupCookies) {
							popupCookies.style.opacity = '0';
							popupCookies.style.visibility = 'hidden';
					}
			});
	}

}