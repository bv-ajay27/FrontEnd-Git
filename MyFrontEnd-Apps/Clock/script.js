const secHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");


function time(){

    const time = new Date();

    const sec = time.getSeconds();
    const secDeg = ((sec / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    const min = time.getMinutes();
    const minDeg = ((min / 60) * 360) + ((sec/60)*6) + 270;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hour = time.getHours();
    const hourDeg = ((hour / 12) * 360) + ((min/60)*30) + 270;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    console.log(sec,min,hour);
}
setInterval(time,1000);

time();