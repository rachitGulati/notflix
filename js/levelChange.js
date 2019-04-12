import { chillLevelArr, arr2, allArrs, kidsToggleCheck } from "./activities.js";
import { chillLevelWord } from "./index.js";

export let currentArrLevel = 1;
export let currentArr = allArrs[1];

export function refresh() {
	console.log('refresh for kids');
	currentArrLevel = 1;
	currentArr = allArrs[1];
	console.log(currentArr);
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);
}

export function levelUp() {
	if (currentArrLevel < 2) {
		currentArrLevel++;
		console.log(currentArr);
		currentArr = allArrs[currentArrLevel];
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);
    	}
}

export function levelDown() {
	if (currentArrLevel > 0) {
		currentArrLevel--;
		console.log(currentArr);
		currentArr = allArrs[currentArrLevel];
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);
	}
}

