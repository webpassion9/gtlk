export function targetPopup() {
	document.addEventListener('DOMContentLoaded', function () {
		const buttons = document.querySelectorAll('[data-target]');
		const popups = document.querySelectorAll('[data-popup]');
		const closeButtons = document.querySelectorAll('[data-popup-close]');
		let openedPopup = null;
	
		buttons.forEach(function (button) {
			button.addEventListener('click', function () {
				const target = button.getAttribute('data-target');
				const popup = document.querySelector(`[data-popup="${target}"]`);
	
				if (popup) {
					if (openedPopup) {
						openedPopup.classList.remove('opened');
					}
					openedPopup = popup;
					popup.classList.add('opened');
				}
			});
		});
	
		closeButtons.forEach(function (closeButton) {
			closeButton.addEventListener('click', function () {
				const popup = closeButton.closest('[data-popup]');
	
				if (popup) {
					popup.classList.remove('opened');
					openedPopup = null;
				}
			});
		});
	
		document.addEventListener('mousedown', function (event) {
			const isOutsidePopup = !event.target.closest('[data-popup]');
	
			if (isOutsidePopup && openedPopup) {
				openedPopup.classList.remove('opened');
				openedPopup = null;
			}
		});
	});
	
	
}

