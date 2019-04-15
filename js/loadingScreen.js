import { TimelineMax } from "gsap";

export default function loadingScreen() {
	console.log('changing screen');
	let tl = new TimelineMax();
	tl.from(".notflix", 1.5, {
		y: "100%",
		opacity: 1
	})
		.to(".notflix", 1, {
			scale: 1.2, 
			ease: Power2.easeInOut, 
			transformOrigin:"center",
			repeat:3, 
			yoyo:true,

		})
		.to(".notflix", 1.5, {
			y: "100%",
			opacity: 0
		})
		.to(".preloader", 1.5, {
			y:"110%",
			ease: Power2.easeInOut,
		}, "-=1.5");
		
}
