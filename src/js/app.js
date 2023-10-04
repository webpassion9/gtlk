import * as flsFunctions from "./modules/functions.js";
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css/bundle';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

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

import { initializeFancybox, initializeSelect, initializeTooltip } from './modules/common/index.js';

initializeFancybox();
initializeSelect();
initializeTooltip();

//

// import { inputFillCheck } from './modules/create-application/index.js';

// inputFillCheck();

//






import { progressCircle } from './modules/common/progressCircle.js';

progressCircle();


import { docsToggle } from './modules/application/index.js';

docsToggle();