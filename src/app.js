const textNode = document.querySelector(".header");
const texts = ["I Love Programming", "I' m Developer", "I' m Designer"];

let index = 1;
let counter = 0;
const speed = 250;

function writeText(){
    textNode.innerText = texts[counter % 3].slice(0, index);
    index++;

    if (index > texts[counter % 3].length){
        index = 1;
        counter++;
    }

    setTimeout(writeText, speed);
}

writeText();