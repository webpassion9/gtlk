import * as flsFunctions from "./modules/functions.js";
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css/bundle';
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox.css";
import PerfectScrollbar from 'perfect-scrollbar';

flsFunctions.isWebp();

//

import { forcedOriginalScale } from './modules/scale.js';

document.addEventListener("DOMContentLoaded",	function() {
	forcedOriginalScale('.wrapper');
});

//

import { initializePreloader, initializeAuthFields, popupCookies  } from './modules/authorization/index.js';

initializePreloader();
popupCookies();
document.addEventListener("DOMContentLoaded", function() {
    initializeAuthFields();
});

//

import { initializeSelect, initializeTooltip, modalInit, tabs } from './modules/common/index.js';

initializeSelect();
initializeTooltip();
tabs();
modalInit();

//

// import { inputFillCheck } from './modules/create-application/index.js';

// inputFillCheck();

//


import { progressCircle } from './modules/common/progressCircle.js';

progressCircle();

//

import { docsToggle, statusToggle, sectionToggle } from './modules/application/index.js';

docsToggle();
statusToggle();
sectionToggle();

//

document.querySelectorAll('.scroll-wrapper').forEach(tableWrapper => {
  const ps = new PerfectScrollbar(tableWrapper, {});
  ps.update();
});

document.querySelectorAll('.popup-notifications__scroll-wrapper').forEach(popupNotificationsList => {
  const psPopup = new PerfectScrollbar(popupNotificationsList, {});
  psPopup.update();
});

document.querySelectorAll('.select__list').forEach(selectList => {
  const psSelect = new PerfectScrollbar(selectList, {});
  psSelect.update();
});


//

import { targetPopup, headerSearch } from './modules/header/index.js';

targetPopup();
headerSearch();

//

import { checkboxCheckAll } from './modules/event-log/index.js';

checkboxCheckAll();

//

import { searchClear } from './modules/notifications/index.js';

searchClear();

//

import { faq, lengthRequire, checkFilling, uploadFile } from './modules/help/index.js';

faq();
lengthRequire();
checkFilling();
uploadFile();