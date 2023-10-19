export function checkboxCheckAll() {
	const checkAllCheckbox = document.querySelector('.check-all');
	const checkboxes = document.querySelectorAll('.checkbox-tr');

	if (checkAllCheckbox) {
		checkAllCheckbox.addEventListener('change', function() {
			checkboxes.forEach(checkbox => {
				checkbox.checked = checkAllCheckbox.checked;
			});
		});
	}

	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', function() {
			if (!checkbox.checked && checkAllCheckbox) {
				checkAllCheckbox.checked = false;
			}
		});
	});
}
