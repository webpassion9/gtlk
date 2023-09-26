import * as flsFunctions from "./modules/functions.js";
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css/bundle';

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

