/* Set the width of the side navigation to 250px */
let openNav = () => {
	if(window.matchMedia("(max-width: 700px)").matches) {
		document.getElementById("side-nav").style.width = "100%";
	} else {
		document.getElementById("side-nav").style.width = "400px";
	}
};


/* Set the width of the side navigation to 0 */
let closeNav = () => {
	document.getElementById("side-nav").style.width = "0";
};

