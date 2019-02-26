let fillBottomBoxes = () => {
    emptyBoxBottom.forEach( (box) => {
        num = Math.floor(Math.random() * bottomImgs.length);
        box.style.background = `url(${bottomImgs[num]})`;
        bottomImgs.splice(num, 1);
    })
}