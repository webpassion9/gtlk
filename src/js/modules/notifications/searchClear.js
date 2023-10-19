export function searchClear() {
  const removeButton = document.querySelector('.form-search__btn-remove');
  const inputElement = document.querySelector('.form-search__input');

  if (removeButton && inputElement) {
    removeButton.addEventListener('click', function () {
      inputElement.value = '';
      inputElement.focus();
    });
  }
}