export function faq() {
	document.addEventListener('DOMContentLoaded', function () {
		const faqItems = document.querySelectorAll('.faq__item');
	
		faqItems.forEach((item) => {
			const top = item.querySelector('.faq__item-top');
			const content = item.querySelector('.faq__item-content');
	
			top.addEventListener('click', () => {
				item.classList.toggle('opened');
				if (item.classList.contains('opened')) {
					content.style.maxHeight = content.scrollHeight + 'px';
				} else {
					content.style.maxHeight = '0';
				}
			});
		});
	});
	
}
