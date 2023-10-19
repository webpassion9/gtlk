export function initializeSelect() {
  const selectContainers = document.querySelectorAll('.select');

  selectContainers.forEach(selectContainer => {
    const selectInput = selectContainer.querySelector('.select__input');
    const selectPopup = selectContainer.querySelector('.select__list');
    const selectItems = selectContainer.querySelectorAll('.select__list-item');

    const selectedTarget = {};

    function handleItemClick(event) {
      const selectedItemMain = event.currentTarget.querySelector('.select__list-item-main');
      const selectedText = selectedItemMain.textContent;

      const dataTarget = event.currentTarget.getAttribute('data-target');

      if (selectedTarget[selectContainer.id]) {
        selectedTarget[selectContainer.id].classList.add('hidden');
      }

      if (dataTarget) {
        const targetItem = document.querySelector(`[data-item="${dataTarget}"]`);
        if (targetItem) {
          targetItem.classList.remove('hidden');
          selectedTarget[selectContainer.id] = targetItem;
        }
      }

      if (selectInput.tagName === 'DIV') {
        selectInput.textContent = selectedText;
      } else {
        selectInput.value = selectedText;
      }

      selectContainer.classList.remove('opened');
      selectContainer.classList.add('is-selected');
    }

    selectItems.forEach(item => {
      item.addEventListener('click', handleItemClick);
    });

    selectInput.addEventListener('click', () => {
      const hasVisibleItems = Array.from(selectItems).some(item => item.style.display !== 'none');

      if (hasVisibleItems) {
        selectContainer.classList.toggle('opened');
      }
    });

    selectInput.addEventListener('input', () => {
      const inputValue = selectInput.tagName === 'DIV' ? selectInput.textContent.trim() : selectInput.value.trim();

      let hasMatches = false;
      let isEmptyInput = true;

      selectItems.forEach(item => {
        const itemName = item.querySelector('.select__list-item-main');
        const itemDetails = item.querySelector('.select__list-item-details');

        const itemNameText = itemName.textContent;
        const itemDetailsText = itemDetails ? itemDetails.textContent : '';

        const regex = new RegExp(inputValue, 'ig');

        const highlightedName = itemNameText.replace(regex, match => `<mark>${match}</mark>`);
        const highlightedDetails = itemDetailsText.replace(regex, match => `<mark>${match}</mark>`);

        itemName.innerHTML = highlightedName;
        if (itemDetails) {
          itemDetails.innerHTML = highlightedDetails;
        }

        if (inputValue && (itemNameText.match(regex) || (itemDetails && itemDetailsText.match(regex)))) {
          item.style.display = 'block';
          hasMatches = true;
        } else {
          item.style.display = 'none';
        }

        if (inputValue) {
          isEmptyInput = false;
        }
      });

      if (!isEmptyInput) {
        selectContainer.classList.add('opened');
      } else {
        if (hasMatches) {
          selectContainer.classList.add('opened');
        } else {
          selectContainer.classList.remove('opened');
          selectItems.forEach(item => {
            item.style.display = 'block';
          });
        }
      }
    });

    document.addEventListener('click', event => {
      if (!selectPopup.contains(event.target) && !selectInput.contains(event.target)) {
        selectContainer.classList.remove('opened');
      }
    });
  });
}
