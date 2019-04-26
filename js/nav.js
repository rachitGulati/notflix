// Navigation media queries
export function openNav() {
	if (window.matchMedia("(max-width: 500px)").matches) {
		document.getElementById("side-nav").style.width = "100%";
		document.querySelectorAll(".side-nav-p").forEach(x => x.style.width = "275px");
	
	} else if (window.matchMedia("(max-width: 850px)").matches) {
		document.getElementById("side-nav").style.width = "100%";
		document.querySelectorAll(".side-nav-p").forEach(x => x.style.width = "450px");
	} 
	
	else if (window.matchMedia("(max-width: 1100px)").matches) {
		document.getElementById("side-nav").style.width = "45%";
		document.querySelectorAll(".side-nav-p").forEach(x => x.style.width = "300px");
	}
	
	else {
		document.getElementById("side-nav").style.width = "45%";
		document.querySelectorAll(".side-nav-p").forEach(x => x.style.width = "350px");
	}
}


// Set the width of the side navigation to 0 
export function closeNav() {
	document.getElementById("side-nav").style.width = "0";
}