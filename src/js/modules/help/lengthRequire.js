export function lengthRequire() {
  document.addEventListener('DOMContentLoaded', function () {

    const inputElement = document.getElementById('length-require');
    const countElement = document.querySelector('.input-length-info__count');

    if (inputElement && countElement) {
      inputElement.addEventListener('input', function () {
        const inputValue = inputElement.value;
        const charCount = inputValue.length;

        countElement.textContent = `${charCount}/1000`;

        if (charCount > 1000) {
          countElement.classList.add('over-limit');
        } else {
          countElement.classList.remove('over-limit');
        }
      });
    }
  });
}
