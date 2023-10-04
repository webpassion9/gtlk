export function progressCircle() {

	function createProgressBar(element) {
		const svgNamespace = "http://www.w3.org/2000/svg";

		const progressBar = document.createElementNS(svgNamespace, "svg");
		progressBar.setAttribute("class", "progress-bar-svg");
		progressBar.setAttribute("width", "35");
		progressBar.setAttribute("height", "35");
		progressBar.setAttribute("viewBox", "0 0 72 72");

		const filter = document.createElementNS(svgNamespace, "filter");
		filter.setAttribute("id", "progressShadow");
		filter.setAttribute("filterUnits", "userSpaceOnUse");
		filter.setAttribute("x", "-12");
		filter.setAttribute("y", "-12");
		filter.setAttribute("width", "96");
		filter.setAttribute("height", "96");
		const feDropShadow = document.createElementNS(svgNamespace, "feDropShadow");
		feDropShadow.setAttribute("dx", "0");
		feDropShadow.setAttribute("dy", "0");
		feDropShadow.setAttribute("stdDeviation", "6");
		feDropShadow.setAttribute("flood-color", "#abff44");
		filter.appendChild(feDropShadow);
		progressBar.appendChild(filter);

		const backgroundCircle = document.createElementNS(svgNamespace, "circle");
		backgroundCircle.setAttribute("cx", "36");
		backgroundCircle.setAttribute("cy", "36");
		backgroundCircle.setAttribute("r", "23");
		backgroundCircle.setAttribute("stroke", "#CDCDCD");
		backgroundCircle.setAttribute("stroke-width", "8");
		backgroundCircle.setAttribute("fill", "none");

		const progressCircle = document.createElementNS(svgNamespace, "circle");
		progressCircle.setAttribute("class", "progress-bar-progress");
		progressCircle.setAttribute("cx", "36");
		progressCircle.setAttribute("cy", "36");
		progressCircle.setAttribute("r", "23");
		progressCircle.setAttribute("stroke", "#469607");
		progressCircle.setAttribute("stroke-width", "8");
		progressCircle.setAttribute("fill", "none");
		progressCircle.setAttribute("transform", "rotate(-90 36 36)");

		const progressValue = parseFloat(element.getAttribute("data-progress"));

		const circumference = 144.4;
		const progressOffset = (100 - progressValue) / 100 * circumference;

		backgroundCircle.style.strokeDasharray = circumference;
		backgroundCircle.style.strokeDashoffset = 0;

		progressCircle.style.strokeDasharray = circumference;
		progressCircle.style.strokeDashoffset = progressOffset;

		progressBar.appendChild(backgroundCircle);
		progressBar.appendChild(progressCircle);

		element.appendChild(progressBar);
	}
	const progressBars = document.querySelectorAll(".progress-bar");
	progressBars.forEach(createProgressBar);

}