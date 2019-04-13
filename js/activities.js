import Activity from "./Activity.js";
import loadingScreen from "./loadingScreen.js";

// high chill
import meditatingImage from "../imgs/meditate.jpg";
import sleepingImage from "../imgs/sleep.jpg";
import readingImage from "../imgs/read.jpg";
import theatreImage from "../imgs/theatre.jpg";
import stargazingImage from "../imgs/stargazing.jpg";
import libraryImage from "../imgs/library.jpg";
import paintingImage from "../imgs/painting.jpg";
import drawingImage from "../imgs/drawing.jpg";

// medium chill
import outdoorConcertImage from "../imgs/outdoor-concert.jpg";
import planATripImage from "../imgs/plan-a-trip.jpg";
import golfImage from "../imgs/golf.jpg";
import botanicalGardenImage from "../imgs/botanical-garden.jpg";
import exhibitionOpeningImage from "../imgs/exhibition-opening.jpg";
import artFairImage from "../imgs/art-fair.jpg";
import artClassImage from "../imgs/art-class.jpg";
import museumLateImage from "../imgs/museum-late.jpg";
import museumImage from "../imgs/museum.jpg";
import campingImage from "../imgs/camping.jpg";

// low chill
import boxingImage from "../imgs/boxing.jpg";
import surfingImage from "../imgs/beach.jpg";
import tableTennisImage from "../imgs/tabletennis.jpg";
import gymImage from "../imgs/gym.jpg";
import hikingImage from "../imgs/hiking.jpg";
import basketballImage from "../imgs/basketball.jpg";
import runningImage from "../imgs/running.jpg";
import rockClimbingImage from "../imgs/rock-climbing.jpg";
import roadTripImage from "../imgs/road-trip.jpg";
import canoeingImage from "../imgs/canoeing.jpg";
import indoorClimbingImage from "../imgs/indoor-climbing.jpg";
import boulderingImage from "../imgs/bouldering.jpg";
import tennisImage from "../imgs/tennis.jpg";

// kids high chill
import boringImage from "../imgs/boring.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";

// // kids medium chill
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";

// // kids low chill
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";
// import Image from "../imgs/.jpg";

// kids bg
import kidsBgImage from "../imgs/kidsImgs/kids-bg.jpg"

import updateCentralContainer from "./updateCentralContainer.js";
import { refresh } from "./levelChange.js";

// background image
import astronomyImage from "../imgs/astronomy.jpg";

// high chill
export let lvl3activity1 = new Activity("meditating", meditatingImage, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl3activity2 = new Activity("sleeping", sleepingImage, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
export let lvl3activity3 = new Activity("reading", readingImage, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl3activity4 = new Activity("theatre", theatreImage, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
export let lvl3activity5 = new Activity("stargazing", stargazingImage, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl3activity6 = new Activity("library", libraryImage, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
export let lvl3activity7 = new Activity("painting", paintingImage, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
export let lvl3activity8 = new Activity("drawing", drawingImage, "google.co.uk/related", 5, ["pillow sports", "indoors"]);

// medium chill
export let lvl2activity1 = new Activity("outdoor concert", outdoorConcertImage, "google.co.uk/related", 1, []);
export let lvl2activity2 = new Activity("plan a trip", planATripImage, "google.co.uk/related", 1, []);
export let lvl2activity3 = new Activity("golf", golfImage, "google.co.uk/related", 1, []);
export let lvl2activity4 = new Activity("botanical garden", botanicalGardenImage, "google.co.uk/related", 1, []);
export let lvl2activity5 = new Activity("exhibition opening", exhibitionOpeningImage, "google.co.uk/related", 1, []);
export let lvl2activity6 = new Activity("art fair", artFairImage, "google.co.uk/related", 1, []);
export let lvl2activity7 = new Activity("art class", artClassImage, "google.co.uk/related", 1, []);
export let lvl2activity8 = new Activity("museum late", museumLateImage, "google.co.uk/related", 1, []);
export let lvl2activity9 = new Activity("museum", museumImage, "google.co.uk/related", 1, []);
export let lvl2activity10 = new Activity("camping", campingImage, "google.co.uk/related", 1, []);

// low chill
export let lvl1activity1 = new Activity("boxing", boxingImage, "google.co.uk/related", 1, []);
export let lvl1activity2 = new Activity("surfing", surfingImage, "google.co.uk/related", 1, []);
export let lvl1activity3 = new Activity("table tennis", tableTennisImage, "google.co.uk/related", 1, []);
export let lvl1activity4 = new Activity("gym", gymImage, "google.co.uk/related", 1, []);
export let lvl1activity5 = new Activity("hiking", hikingImage, "google.co.uk/related", 1, []);
export let lvl1activity6 = new Activity("basketball", basketballImage, "google.co.uk/related", 1, []);
export let lvl1activity7 = new Activity("running", runningImage, "google.co.uk/related", 1, []);
export let lvl1activity8 = new Activity("rock climbing", rockClimbingImage, "google.co.uk/related", 1, []);
export let lvl1activity9 = new Activity("road trip", roadTripImage, "google.co.uk/related", 1, []);
export let lvl1activity10 = new Activity("canoeing", canoeingImage, "google.co.uk/related", 1, []);
export let lvl1activity11 = new Activity("indoor climbing", indoorClimbingImage, "google.co.uk/related", 1, []);
export let lvl1activity12 = new Activity("bouldering", boulderingImage, "google.co.uk/related", 1, []);
export let lvl1activity13 = new Activity("tennis", tennisImage, "google.co.uk/related", 1, []);

// kids high chill
export let kidsLvl3activity1 = new Activity("hboring1", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl3activity2 = new Activity("hboring2", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl3activity3 = new Activity("hboring3", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl3activity4 = new Activity("hboring1", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl3activity5 = new Activity("hboring2", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl3activity6 = new Activity("hboring3", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl3activity7 = new Activity("hboring1", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl3activity8 = new Activity("hboring2", boringImage, "google.co.uk/related", 1, []);

// kids medium chill
export let kidsLvl2activity1 = new Activity("mboring1", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl2activity2 = new Activity("mboring2", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl2activity3 = new Activity("mboring3", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl2activity4 = new Activity("mboring1", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl2activity5 = new Activity("mboring2", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl2activity6 = new Activity("mboring3", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl2activity7 = new Activity("mboring1", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl2activity8 = new Activity("mboring2", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl2activity9 = new Activity("mboring3", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl2activity10 = new Activity("mboring3", boringImage, "google.co.uk/related", 1, []);

// kids low chill
export let kidsLvl1activity1 = new Activity("lboring1", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity2 = new Activity("lboring2", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity3 = new Activity("lboring3", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity4 = new Activity("lboring1", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity5 = new Activity("lboring2", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity6 = new Activity("lboring3", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity7 = new Activity("lboring1", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity8 = new Activity("lboring2", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity9 = new Activity("lboring3", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity10 = new Activity("lboring1", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity11 = new Activity("lboring2", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity12 = new Activity("lboring3", boringImage, "google.co.uk/related", 1, []);
export let kidsLvl1activity13 = new Activity("lboring3", boringImage, "google.co.uk/related", 1, []);



export let arr1 = [lvl1activity1, lvl1activity2, lvl1activity3, lvl1activity4, lvl1activity5, lvl1activity6, 
    lvl1activity7, lvl1activity8, lvl1activity9, lvl1activity10, lvl1activity11, lvl1activity12, lvl1activity13];
export let arr2 = [lvl2activity1, lvl2activity2, lvl2activity3, lvl2activity4, lvl2activity5, lvl2activity6, 
    lvl2activity7, lvl2activity8, lvl2activity9, lvl2activity10];
export let arr3 = [lvl3activity1, lvl3activity2, lvl3activity3, lvl3activity4, lvl3activity5, lvl3activity6, lvl3activity7, lvl3activity8];
export let chillLevelArr = ["LOW", "MEDIUM", "HIGH"];
export let allArrs = [arr1, arr2, arr3];

export let kidsArr1 = [kidsLvl1activity1, kidsLvl1activity2, kidsLvl1activity3, kidsLvl1activity4, kidsLvl1activity5,
     kidsLvl1activity6, kidsLvl1activity7, kidsLvl1activity8, kidsLvl1activity9, kidsLvl1activity10, kidsLvl1activity11, kidsLvl1activity12, kidsLvl1activity13];
export let kidsArr2 = [kidsLvl2activity1, kidsLvl2activity2, kidsLvl2activity3, kidsLvl2activity4, kidsLvl2activity5, kidsLvl2activity6,
    kidsLvl2activity7, kidsLvl2activity8, kidsLvl2activity9, kidsLvl2activity10];
export let kidsArr3 = [kidsLvl3activity1, kidsLvl3activity2, kidsLvl3activity3, kidsLvl3activity4, kidsLvl3activity5, kidsLvl3activity6,
     kidsLvl3activity7, kidsLvl3activity8];
export let allKidsArrs = [kidsArr1, kidsArr2, kidsArr3];


function kidsToggle() {
    if(allArrs !== allKidsArrs) {
        allArrs = allKidsArrs;
        backgroundImg.style.backgroundImage = `url(${kidsBgImage})`;
        kidsButton.innerHTML = "main";
    }
    else {
        allArrs = [arr1, arr2, arr3];
        backgroundImg.style.backgroundImage = `url(${astronomyImage})`
    }
    refresh();

    updateCentralContainer();
}
let backgroundImg = document.querySelector(".background-image");

let kidsButton = document.querySelector(".kids");
kidsButton.addEventListener("click", () => kidsToggle());
kidsButton.addEventListener("click", () => loadingScreen());
