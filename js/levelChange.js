import { chillLevelArr, allArrs } from "./activities.js";
import { chillLevelWord } from "./index.js";

export let currentArrLevel = 1;
export let currentArr = allArrs[1];

// reset the current chill level
export function refresh() {
	currentArrLevel = 1;
	currentArr = allArrs[1];
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);
}

// increase current chill level, executed when user clicks up arrow 
export function levelUp() {
	if (currentArrLevel < 2) {
		currentArrLevel++;
		currentArr = allArrs[currentArrLevel];
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);
    	}
}

// decrease current chill level, executed when user clicks down arrow 
export function levelDown() {
	if (currentArrLevel > 0) {
		currentArrLevel--;
		currentArr = allArrs[currentArrLevel];
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);
	}
}

