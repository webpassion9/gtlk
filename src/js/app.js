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

import { initializeTooltip } from './modules/applications/index.js';

initializeTooltip();

//

import { initializeFancybox } from './modules/common/index.js';

initializeFancybox();