export function maxHeightInit() {

  if (window.innerWidth > 992) {
    const wrapper = document.querySelector('.wrapper.page-request');

    if (wrapper) {
      const header = wrapper.querySelector('.header');
      const mainRow = wrapper.querySelector('.main-row');

      if (header && mainRow) {
        const setMainRowHeight = () => {
          const headerHeight = header.offsetHeight;
          const windowHeight = window.innerHeight;

          mainRow.style.height = windowHeight - headerHeight + 'px';
        };

        setMainRowHeight();

        window.addEventListener('resize', setMainRowHeight);
      }
    }
  }
}
