let updateCentralContainer = () => {

  // if we have reached the end of the array, shuffle the array and start again
  if (x == currentArr.length) {
    shuffle(currentArr);
    x = 0;
    console.log(currentArr);
  }

  img.style.background = `url('${currentArr[x].media}')`;
  img.style.backgroundSize = "cover";
  name.innerHTML = currentArr[x].name;
  
  let str = name.innerHTML;
  str = str.replace(/ /g, '+');
  activityInfoA.setAttribute('href', `https://www.google.com/search?q=${str}+near+me`);



  // var rand = myArray[Math.floor(Math.random() * myArray.length)];

  // Choose a random font from the fonts array
  name.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  name.style.fontSize = vws[Math.floor(Math.random() * vws.length)];
  name.style.fontWeight = fontWeight[Math.floor(Math.random() * fontWeight.length)];
  name.style.fontStyle = fontStyle[Math.floor(Math.random() * fontStyle.length)];
  name.style.fontVariant = fontVariant[Math.floor(Math.random() * fontVariant.length)];
  name.style.color = colours[Math.floor(Math.random() * colours.length)];
  name.style.letterSpacing = letterSpacing[Math.floor(Math.random() * letterSpacing.length)];
  name.style.lineHeight = lineHeight[Math.floor(Math.random() * lineHeight.length)];
  name.style.justifySelf = justifyAlignSelf[Math.floor(Math.random() * justifyAlignSelf.length)];
  name.style.alignSelf = justifyAlignSelf[Math.floor(Math.random() * justifyAlignSelf.length)];

  categories.innerHTML = currentArr[x].categories.toString().replace(/,/g, ' ⸰ ');
  x++;

}