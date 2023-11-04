export function statusToggle() {
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-app-steps");
    const container = document.querySelector(".container-app-steps");
    const toggleText = document.querySelector(".toggle-app-steps__text");

    if (toggleButton && container && toggleText) {
      let isExpanded = true;

      if (isExpanded) {
        container.style.maxHeight = container.scrollHeight + "px";
        toggleButton.classList.add("opened");
      }

      toggleButton.addEventListener("click", function () {
        if (isExpanded) {
          container.style.maxHeight = "0";
          toggleText.textContent = "Показать историю статусов";
          toggleButton.classList.remove("opened");
        } else {
          container.style.maxHeight = container.scrollHeight + "px";
          toggleText.textContent = "Скрыть историю статусов";
          toggleButton.classList.add("opened");
        }

        isExpanded = !isExpanded;
      });
    }
  });
}
