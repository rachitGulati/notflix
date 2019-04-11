export default function levelDown() {
	if (currentArrLevel > 0) {
		currentArrLevel--;
		currentArr = allArrs[currentArrLevel];
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);

	} else {
		console.log("no lower level");
	}
}