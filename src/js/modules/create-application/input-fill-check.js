export function inputFillCheck() {
	const inputItems = document.querySelectorAll('.input-base');

	inputItems.forEach(inputItem => {
		inputItem.addEventListener('input', () => {
			if (inputItem.value.trim() !== '') {
				inputItem.classList.add('complete');
			} else {
				inputItem.classList.remove('complete');
			}
		});
	});
}