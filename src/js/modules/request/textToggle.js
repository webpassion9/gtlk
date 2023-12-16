export function textToggle() {
  var requestElements = document.querySelectorAll('.request');

  requestElements.forEach(function (requestElement) {
    var textElement = requestElement.querySelector('.request__text');
    var toggleButton = requestElement.querySelector('.btn-text-toggle');
    var answerButton = requestElement.querySelector('.btn-request-answer');

    if (textElement && toggleButton && answerButton) {
      toggleButton.addEventListener('click', function () {
        if (textElement.classList.contains('expanded')) {
          textElement.style.webkitLineClamp = '3';
          toggleButton.textContent = 'Подробнее';
          answerButton.style.display = 'none';
        } else {
          textElement.style.webkitLineClamp = '10000';
          toggleButton.textContent = 'Скрыть';
          answerButton.style.display = 'inline';
        }

        textElement.classList.toggle('expanded');
      });
    }
  });
}
