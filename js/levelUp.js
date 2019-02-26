let levelUp = () => {
    if (currentArrLevel < 1) {
      currentArrLevel++;
      currentArr = allArrs[currentArrLevel]; 
      chillLevel.innerHTML = `${chillLevelArr[currentArrLevel]}`;
    }
    else {
      console.log('no higher level');
    }
  }