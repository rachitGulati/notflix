// let loadingScreen = () => {

// //     let action = new TimelineMax({repeat:3, repeatDelay:1})
// // .to('.notflix',0.1,{autoAlpha:1},1)
// // .to('.notflix',0.5,{scale:2.5, ease: Power2.easeInOut, transformOrigin:"center", repeat:1, yoyo:true},1);

//     // TweenMax.to('.notflix', 1, {
//     //     scaleX: 2,
//     //     scaleY: 2
//     // });


// TweenLite.from('.central-container', 1, {
//    left: '100px',
//   });
    
// }


function loadingScreen() {

    let tl = new TimelineMax();

    tl.from(".notflix", 1.5, {
            y: "100%",
            opacity: 0
        })
        .to(".notflix", 1.2, {
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
        .to("#preloader", 1, {
            y:"100%",
            ease: Power2.easeInOut
        })

}
