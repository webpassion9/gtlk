import * as flsFunctions from "./modules/functions.js";
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css/bundle';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
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

import { initializeSelect, initializeTooltip } from './modules/common/index.js';

initializeSelect();
initializeTooltip();

//

// import { inputFillCheck } from './modules/create-application/index.js';

// inputFillCheck();

//


import { progressCircle } from './modules/common/progressCircle.js';

progressCircle();

//

import { docsToggle } from './modules/application/index.js';

docsToggle();

//

const tableWrapper = document.querySelector('.table-wrapper');

if (tableWrapper) {
  const ps = new PerfectScrollbar(tableWrapper, {});
  ps.update();
}

const popupNotificationsList = document.querySelector('.popup-notifications__scroll-wrapper');

if (popupNotificationsList) {
  const psPopup = new PerfectScrollbar(popupNotificationsList, {});
  psPopup.update();
}

//

import { targetPopup } from './modules/header/index.js';

targetPopup();

//

import { checkboxCheckAll } from './modules/event-log/index.js';

checkboxCheckAll();