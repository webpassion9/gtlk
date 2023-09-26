// scaleModule.js

export function forcedOriginalScale(containerClass) {
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	
	if (!isMobile) {
		var App = document.querySelector(containerClass);
		App.style.zoom = 1 / devicePixelRatio;
	}
}

