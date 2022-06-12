const secHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");


function time(){

    const time = new Date();

    const sec = time.getSeconds();
    const secDeg = ((sec / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`; 

    const min = time.getminonds();
    const minDeg = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hour = time.getSeconds();
    const hourDeg = ((hour / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(time,1000);

time();