
const elcalmdown=document.querySelector("#countdown");

setInterval(updateCalmDown,1000);
let time=prompt("Enter number in second")


 


function updateCalmDown(){
    const minutes=Math.floor(time/60);
    let seconds=time%60;
    seconds=String(seconds).padStart(2,0)
    elcalmdown.innerHTML=`${minutes}:${seconds}`;
    time--;
}
















