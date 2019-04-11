import Activity from "./Activity.js";
import boxingImage from "../imgs/boxing.jpg";
import surfingImage from "../imgs/beach.jpg";
import tableTennisImage from "../imgs/tabletennis.jpg";
import gymImage from "../imgs/gym.jpg";
import hikingImage from "../imgs/hiking.jpg";
import basketballImage from "../imgs/basketball.jpg";

export let arr1 = [lvl1activity1, lvl1activity2, lvl1activity3, lvl1activity4, lvl1activity5, lvl1activity6];
export let arr2 = [lvl2activity1, lvl2activity2, lvl2activity3, lvl2activity4, lvl2activity5, lvl2activity6];
export let arr3 = [lvl3activity1, lvl3activity2, lvl3activity3, lvl3activity4, lvl3activity5, lvl3activity6];
export let chillLevelArr = ["LOW", "MEDIUM", "HIGH"];
export let allArrs = [arr1, arr2, arr3];


// Level 1
export let lvl1activity1 = new Activity("surfing", surfingImage, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl1activity2 = new Activity("table tennis", tableTennisImage, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
export let lvl1activity3 = new Activity("boxing", boxingImage, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl1activity4 = new Activity("gym", gymImage, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
export let lvl1activity5 = new Activity("hiking", hikingImage, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl1activity6 = new Activity("basketball", basketballImage, "google.co.uk/related", 5, ["pillow sports", "indoors"]);

// Level 2
export let lvl2activity1 = new Activity("meditating", "imgs/meditate.jpg", "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl2activity2 = new Activity("sleeping", "imgs/sleep.jpg", "google.co.uk/related", 5, ["pillow sports", "indoors"]);
export let lvl2activity3 = new Activity("reading", "imgs/read.jpg", "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl2activity4 = new Activity("theatre", "imgs/theatre.jpg", "google.co.uk/related", 5, ["pillow sports", "indoors"]);
export let lvl2activity5 = new Activity("stargazing", "imgs/stargazing.jpg", "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl2activity6 = new Activity("library", "imgs/library.jpg", "google.co.uk/related", 5, ["pillow sports", "indoors"]);

// Level 3 
export let lvl3activity1 = new Activity("meditating", "imgs/meditate.jpg", "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl3activity2 = new Activity("sleeping", "imgs/sleep.jpg", "google.co.uk/related", 5, ["pillow sports", "indoors"]);
export let lvl3activity3 = new Activity("reading", "imgs/read.jpg", "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl3activity4 = new Activity("theatre", "imgs/theatre.jpg", "google.co.uk/related", 5, ["pillow sports", "indoors"]);
export let lvl3activity5 = new Activity("stargazing", "imgs/stargazing.jpg", "google.co.uk/related", 1, ["extreme sports", "water sports"]);
export let lvl3activity6 = new Activity("library", "imgs/library.jpg", "google.co.uk/related", 5, ["pillow sports", "indoors"]);

