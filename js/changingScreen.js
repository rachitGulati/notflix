import { TimelineMax } from "gsap";

// when kids/main button clicked
// loading screen fades in
// notflix sign pulsates
// notflix slides down and fades out
// same time, loading screen slides down + application appears

export default function changingScreen() {
	let tlChanging = new TimelineMax();

	tlChanging.set(".changing", { zIndex: 10 });
	tlChanging.from(".changing", 0.3, {
		opacity:0
	}).to(".changing", 0.3
, {
		opacity:1
	});
	tlChanging.from(".notflixCha", 1.5, {
		y: "100%",
	}, "-0.5")
		.to(".notflixCha", 1, {
			scale: 1.2, 
			ease: Power2.easeInOut, 
			transformOrigin:"center",
			repeat:3, 
			yoyo:true,
		})
		.to(".notflixCha", 1.5, {
			y: "100%",
			opacity: 0
		})
		.to(".changing", 1.5, {
			y:"110%",
			ease: Power2.easeInOut,
		}, "-=1.5");

	// resets all properties so we can reuse the animation
	tlChanging.set(".changing", { clearProps: "all"});
	tlChanging.set(".notflixCha", { clearProps: "all"});
}
