export function docsToggle() {
  const sectionTops = document.querySelectorAll('.application-docs__section-top');

  sectionTops.forEach(sectionTop => {
    sectionTop.addEventListener('click', (event) => {
      if (event.target.tagName === 'INPUT') {
        // Если был клик по чекбоксу, не выполняем дополнительные действия
        return;
      }
      
      const section = sectionTop.closest('.application-docs__section');
      const content = section.querySelector('.application-docs__content');
      
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
