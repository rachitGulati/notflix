import { TimelineMax } from "gsap";

export default function loadingScreen() {
	console.log('loading screen');
	let tl = new TimelineMax();

	tl.set("#preloader", {
			css: {zIndex:1, opacity:1}
		})
	.set(".notflix", {
		css: {zIndex: 1, opacity:1}
	})
	.from(".notflix", 1.5, {
		y: "100%",
		opacity: 1
	})
		.to(".notflix", 1, {
			scale: 1.2, 
			ease: Power2.easeInOut, 
			transformOrigin:"center",
			repeat:3, 
			yoyo:true
		})
		.to(".notflix", 1.5, {
			y: "100%",
			opacity: 0
		})
		.to("#preloader", 1.5, {
			y:"110%",
			ease: Power2.easeInOut,
			opacity: 0,
		}, "-=1.5")
		.set("#preloader", {
			css: {zIndex:-1}
		})

		.set("#preloader", {clearProps:"transform"})
		// .set(".notflix", {clearProps:"y"});

}
