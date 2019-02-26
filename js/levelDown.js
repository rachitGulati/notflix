let levelDown = () => {
    if (currentArrLevel > 0) {
      currentArrLevel--;
      currentArr = allArrs[currentArrLevel]; 
      chillLevel.innerHTML = `${chillLevelArr[currentArrLevel]}`;
    }
    else {
      console.log('no lower level');
    }
  }