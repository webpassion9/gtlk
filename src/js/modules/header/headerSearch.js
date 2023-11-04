export function headerSearch() {
  const searchContainers = document.querySelectorAll('.header-search');

  searchContainers.forEach(searchContainer => {
    const searchInput = searchContainer.querySelector('.header-search__input');

    if (searchInput) {
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
  });
}
