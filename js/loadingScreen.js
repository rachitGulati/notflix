import { TimelineMax } from "gsap";

// on application load
// loading screen fades in
// notflix sign pulsates
// notflix slides down and fades out
// same time, loading screen slides down + application appears

export default function loadingScreen() {
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
