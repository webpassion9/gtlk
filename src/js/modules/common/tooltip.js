// tooltip.js

export function initializeTooltip() {
  const tooltips = document.querySelectorAll('.tooltip');
  let openMenu = null;

  tooltips.forEach(tooltip => {
    const btn = tooltip.querySelector('.tooltip__btn');
    const menu = tooltip.querySelector('.tooltip__menu');

    btn.addEventListener('click', event => {
      event.stopPropagation();

      if (openMenu && openMenu !== menu) {
        openMenu.style.opacity = '0';
        openMenu.style.visibility = 'hidden';
      }

      menu.style.opacity = '1';
      menu.style.visibility = 'visible';
      openMenu = menu;
    });

    document.addEventListener('click', event => {
      if (!menu.contains(event.target) && !tooltip.contains(event.target)) {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        openMenu = null;
      }
    });
  });
}
