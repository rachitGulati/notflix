import updateCentralContainer from "./updateCentralContainer.js";
import { levelUp, levelDown } from "./levelChange.js";
import fillBottomBoxes from "./fillBottomBoxes.js";
import loadingScreen from "./loadingScreen.js";
import { openNav, closeNav } from "./nav.js";

let leftContainer = document.querySelector(".left-container");
let centralContainer = document.querySelector(".central-container");
let rightContainer = document.querySelector(".right-container");
let categories = document.querySelector(".categories");
export let up = document.querySelectorAll(".up");
export let down = document.querySelectorAll(".down");
let chillLevel = document.querySelector(".chill-level");
export let chillLevelWord = document.querySelectorAll(".chill-level-amount");
export let emptyBoxBottom = document.querySelectorAll(".empty-box-bottom");
let refresh = document.querySelectorAll(".refresh");
let tagLine = document.querySelector(".tag-line");
let activityInfo = document.querySelector(".activity-info");
let body = document.getElementsByTagName("BODY")[0];
let closeBtn = document.querySelector(".closebtn");
let openBtn = document.querySelector(".learn-more-btn");

// on page load execute the loading screen, fill the activities container with an activity and fill up the bottom boxes.
body.addEventListener("load", updateCentralContainer());
body.addEventListener("load", fillBottomBoxes());
body.addEventListener("load", loadingScreen());
openBtn.addEventListener("click", () => openNav());
closeBtn.addEventListener("click", () => closeNav());
    
refresh.forEach(refresh => refresh.addEventListener("click", updateCentralContainer));
up.forEach(up => up.addEventListener("click", levelUp));
down.forEach(down => down.addEventListener("click", levelDown));