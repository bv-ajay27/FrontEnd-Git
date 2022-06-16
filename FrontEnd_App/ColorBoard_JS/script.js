const container = document.getElementById("container")

const SQUARES = 800

for(let i=0;i<SQUARES;i++){
    const blocks = document.createElement("div")
    // blocks.classList.add("blocks")

    blocks.addEventListener("mouseover",()=>setColor(blocks))
    blocks.addEventListener("mouseout",()=>removeColor(blocks))

    container.appendChild(blocks)
}

function setColor(element){
    const color = randomColor()

    element.style.background = color
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}


function removeColor(element){
    element.style.background = "#1d1d1d"
    element.style.boxShadow="0 0 2px #000"
}

function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min+1)) +min;
}


function randomColor(){
    return `rgb(${getRandomInteger(0,255)},${getRandomInteger(0,255)},${getRandomInteger(0,255)})`
}