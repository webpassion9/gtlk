export function checkFilling() {
	const formRequestInputs = document.querySelectorAll('.form-request__input');

	formRequestInputs.forEach(input => {
		input.addEventListener('input', () => {
			if (input.value.length >= 1) {
				input.classList.add('is-filled');
			} else {
				input.classList.remove('is-filled');
			}
		});
	});

}
