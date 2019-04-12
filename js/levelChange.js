import { chillLevelArr, arr2, allArrs } from "./activities.js";
import { chillLevelWord } from "./index.js";

export let currentArrLevel = 1;
export let currentArr = arr2;

export function levelUp() {
	if (currentArrLevel < 2) {
		currentArrLevel++;
		currentArr = allArrs[currentArrLevel];
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);
    	}
}

export function levelDown() {
	if (currentArrLevel > 0) {
		currentArrLevel--;
		currentArr = allArrs[currentArrLevel];
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);
	}
}