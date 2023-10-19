export function headerSearch() {
  const searchInput = document.querySelector('.header-search__input');
  const searchContainer = document.querySelector('.header-search');

  if (searchInput && searchContainer) {
    searchInput.addEventListener('input', function () {
      if (searchInput.value.trim() !== '') {
        searchContainer.classList.add('is-typing');
      } else {
        searchContainer.classList.remove('is-typing');
      }
    });

    searchInput.addEventListener('blur', function () {
      searchContainer.classList.remove('is-focus');
      if (searchInput.value.trim() === '') {
        searchContainer.classList.remove('is-typing');
      }
    });

    searchInput.addEventListener('focus', function () {
      searchContainer.classList.add('is-focus');
    });
  }
}
