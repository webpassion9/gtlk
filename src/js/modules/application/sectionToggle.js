export function sectionToggle() {
  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 1199) {
      const toggleButtons = document.querySelectorAll("[data-toggle-btn]");

      toggleButtons.forEach((toggleButton) => {
        const container = toggleButton.closest("[data-toggle-container]");
        const content = container.querySelector("[data-toggle-content]");
        const isExpanded = toggleButton.classList.contains("opened");

        if (isExpanded) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0";
        }
        
        toggleButton.addEventListener("click", function () {
          const isExpanded = toggleButton.classList.contains("opened");

          if (isExpanded) {
            content.style.maxHeight = "0";
            toggleButton.classList.remove("opened");
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
            toggleButton.classList.add("opened");
          }

          content.classList.toggle("opened");
        });
      });
    }
  });
}
