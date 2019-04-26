import updateCentralContainer from "./updateCentralContainer.js";
import { levelUp, levelDown } from "./levelChange.js";
import fillBottomBoxes from "./fillBottomBoxes.js";
import loadingScreen from "./loadingScreen.js";
import { openNav, closeNav } from "./nav.js";

export let up = document.querySelectorAll(".up");
export let down = document.querySelectorAll(".down");
export let chillLevelWord = document.querySelectorAll(".chill-level-amount");
export let emptyBoxBottom = document.querySelectorAll(".empty-box-bottom");

let refresh = document.querySelectorAll(".refresh");
let body = document.getElementsByTagName("BODY")[0];
let closeBtn = document.querySelector(".closebtn");
let openBtn = document.querySelector(".learn-more-btn");

// on page load execute the loading screen, 
// fill the activities container with an activity and fill up the bottom boxes.
body.addEventListener("load", updateCentralContainer());
body.addEventListener("load", fillBottomBoxes());
body.addEventListener("load", loadingScreen());

// navigation bar open and close
openBtn.addEventListener("click", () => openNav());
closeBtn.addEventListener("click", () => closeNav());

// clicking refresh button updates the activity
// clicking up arrow increases the chill level
// clicking down arrow decreases the chill level
refresh.forEach(refresh => refresh.addEventListener("click", updateCentralContainer));
up.forEach(up => up.addEventListener("click", levelUp));
down.forEach(down => down.addEventListener("click", levelDown));