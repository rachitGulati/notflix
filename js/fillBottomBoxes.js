let fillBottomBoxes = () => {
    emptyBoxBottom.forEach( (box) => {
        // get random number from the length of the array
        num = Math.floor(Math.random() * bottomImgs.length);
        // add image to background of box
        box.style.background = `url(${bottomImgs[num]})`;
        // when img is added to box, remove from array so doesn't get used again on another box (no duplicates)
        bottomImgs.splice(num, 1);
    })
}