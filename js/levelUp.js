let levelUp = () => {
  if (currentArrLevel < 2) {
    currentArrLevel++;
    currentArr = allArrs[currentArrLevel];
    chillLevelWord.innerHTML = `${chillLevelArr[currentArrLevel]}`;
  } else {
    console.log('no higher level');
  }
}