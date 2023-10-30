export function tabs() {
  document.addEventListener('DOMContentLoaded', function () {
    const tabsList = document.querySelectorAll('[data-tab-btn]');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabsLine = document.querySelector('[data-tab-line]');
    
    if (tabsList.length === 0) {
      return;
    }

    let activeTab = document.querySelector('[data-tab-btn].current');

    if (!activeTab) {
      activeTab = tabsList[0];
      activeTab.classList.add('current');
    }

    const tabId = activeTab.querySelector('a').getAttribute('href').substring(1);

    tabContents.forEach(content => {
      if (content.id === tabId) {
        content.classList.add('current');
      } else {
        content.classList.remove('current');
      }
    });

    tabsList.forEach(item => {
      if (item !== activeTab) {
        item.classList.remove('current');
      }
    });

    if (tabsLine) {
      tabsLine.style.width = activeTab.offsetWidth + 'px';
      tabsLine.style.transform = `translateX(${activeTab.offsetLeft}px)`;
    }

    tabsList.forEach(tab => {
      tab.addEventListener('click', (event) => {
        event.preventDefault();
        const tabId = tab.querySelector('a').getAttribute('href').substring(1);

        tabContents.forEach(content => {
          if (content.id === tabId) {
            content.classList.add('current');
          } else {
            content.classList.remove('current');
          }
        });

        tabsList.forEach(item => item.classList.remove('current'));
        tab.classList.add('current');
        
        // if (tab.querySelector('a').hasAttribute('data-tab-docs')) {
        //   document.body.classList.add('tab-docs-active');
        // } else {
        //   document.body.classList.remove('tab-docs-active');
        // }
        
        if (tabsLine) {
          tabsLine.style.width = tab.offsetWidth + 'px';
          tabsLine.style.transform = `translateX(${tab.offsetLeft}px)`;
        }
      });
    });
  });
}
