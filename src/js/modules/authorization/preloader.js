// preloader.js

export function initializePreloader() {
  const progressLine = document.querySelector('.preloader__progress-line');
  const preloader = document.querySelector('.preloader');

  if (!progressLine || !preloader) {
    return;
  }

  function updateProgress(progress) {
    const progressLine = document.querySelector('.preloader__progress-line');

    if (progress <= 60) {
      progressLine.style.width = progress + '%';
      const startColor = [25, 109, 126];
      const endColor = [18, 150, 86];
      const currentColor = startColor.map((start, index) => {
        const end = endColor[index];
        const current = Math.round(start + (end - start) * (progress / 60));
        return current;
      });
      progressLine.style.backgroundColor = `rgb(${currentColor.join(',')})`;
    } else {
      progressLine.style.width = progress + '%';
      progressLine.style.backgroundColor = `#129656`;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateProgress(0);
    document.body.style.overflow = 'hidden';
  });

  window.addEventListener('load', () => {
    updateProgress(100);

    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      document.body.style.overflow = 'visible';
    }, 1000);
  });
}