export default function levelUp() {
  if (currentArrLevel < 2) {
    currentArrLevel++;
    currentArr = allArrs[currentArrLevel];
    chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);
  } else {
    console.log('no higher level');
  }
}

// let updateLevel = () => {
//   chillLevelWord.innerHTML = `${chillLevelArr[currentArrLevel]}`;
// }