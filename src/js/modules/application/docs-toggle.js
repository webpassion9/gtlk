export function docsToggle() {

	const sectionTops = document.querySelectorAll('.application-docs__section-top');

	sectionTops.forEach(sectionTop => {
		const checkbox = sectionTop.querySelector('.application-docs__section-top-check input[type="checkbox"]');
		const arrow = sectionTop.querySelector('.application-docs__section-top-arrow');
		const section = sectionTop.closest('.application-docs__section');
		const content = section.querySelector('.application-docs__content');

		let isCheckboxChecked = checkbox ? checkbox.checked : false;

		if (checkbox) {
			checkbox.addEventListener('change', () => {
				isCheckboxChecked = checkbox.checked;

				if (!isCheckboxChecked) {
					arrow.classList.add('hidden');
				} else {
					arrow.classList.remove('hidden');
				}
			});
		}

		sectionTop.addEventListener('click', (event) => {
			if (event.target === checkbox) {
				return;
			}

			if (checkbox && !isCheckboxChecked) {
				return;
			}

			const isHidden = content.style.display === 'none' || getComputedStyle(content).display === 'none';
			const isOpening = content.style.transition === 'height 0.3s ease-in-out';

			if (isHidden || isOpening) {
				content.style.display = 'block';
				content.style.height = 'auto';
				const contentHeight = content.clientHeight + 'px';
				content.style.height = '0';

				if (!isOpening) {
					setTimeout(() => {
						content.style.transition = 'height 0.3s ease-in-out';
						content.style.height = contentHeight;
						section.classList.add('opened');
					}, 0);
				} else {
					content.style.transition = '';
					content.style.height = contentHeight;
					section.classList.add('opened');
				}
			} else {
				content.style.transition = 'height 0.3s ease-in-out';
				content.style.height = '0';
				content.addEventListener('transitionend', () => {
					content.style.display = 'none';
					content.style.transition = '';
					section.classList.remove('opened');
				}, {
					once: true
				});
			}
		});
	});

}