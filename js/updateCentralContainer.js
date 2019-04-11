import Activity from "./Activity.js";
import * as activities from "./activities.js";
import * as fontsStyling from "./fonts-styling.js";
import shuffle from "./shuffle.js";

let img = document.querySelector(".img");
let arr1 = [activities.lvl1activity1, activities.lvl1activity2, activities.lvl1activity3, activities.lvl1activity4, activities.lvl1activity5, activities.lvl1activity6];
let x = 0;
let currentArr = arr1;
let name = document.querySelector(".name");
let activityInfoA = document.querySelector(".activity-info-a");
let categories = document.querySelector(".categories");

export default function updateCentralContainer() {

	// if we have reached the end of the array, shuffle the array and start again
	if (x == currentArr.length) {
		shuffle(currentArr);
		x = 0;
	}

	img.style.background = `url('${currentArr[x].media}')`;
	img.style.backgroundSize = "cover";
	name.innerHTML = currentArr[x].name;
	console.log(img.style);
  
	let str = name.innerHTML;
	str = str.replace(/ /g, "+");
	activityInfoA.setAttribute("href", `https://www.google.com/search?q=${str}+near+me`);



	// var rand = myArray[Math.floor(Math.random() * myArray.length)];

	// Choose a random font from the fonts array
	name.style.fontFamily = fontsStyling.fonts[Math.floor(Math.random() * fontsStyling.fonts.length)];
	name.style.fontSize = fontsStyling.vws[Math.floor(Math.random() * fontsStyling.vws.length)];
	name.style.fontWeight = fontsStyling.fontWeight[Math.floor(Math.random() * fontsStyling.fontWeight.length)];
	name.style.fontStyle = fontsStyling.fontStyle[Math.floor(Math.random() * fontsStyling.fontStyle.length)];
	name.style.fontVariant = fontsStyling.fontVariant[Math.floor(Math.random() * fontsStyling.fontVariant.length)];
	name.style.color = fontsStyling.colours[Math.floor(Math.random() * fontsStyling.colours.length)];
	name.style.letterSpacing = fontsStyling.letterSpacing[Math.floor(Math.random() * fontsStyling.letterSpacing.length)];
	name.style.lineHeight = fontsStyling.lineHeight[Math.floor(Math.random() * fontsStyling.lineHeight.length)];
	name.style.justifySelf = fontsStyling.justifyAlignSelf[Math.floor(Math.random() * fontsStyling.justifyAlignSelf.length)];
	name.style.alignSelf = fontsStyling.justifyAlignSelf[Math.floor(Math.random() * fontsStyling.justifyAlignSelf.length)];

	categories.innerHTML = currentArr[x].categories.toString().replace(/,/g, " ⸰ ");
	x++;

}