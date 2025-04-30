const timerDisplay= document.querySelector(".timerDisplay");
const startBtn= document.querySelector("#startBtn");
const stopBtn= document.querySelector("#stopBtn");
const resetBtn= document.querySelector("#resetBtn");
const lap=document.querySelector(".lap")
const lapBtn=document.querySelector("#lapBtn");
const lapListBtn=document.querySelector("#lapListBtn");


function toggleBtn(){
    if(lap.style.display==="none"){
        lap.style.display="block";
    }
    else{
        lap.style.display="none";
    }
}


let milliSec=0;
let sec=0;
let min=0;

let timerId=null;

startBtn.addEventListener("click",()=>{
    console.log("clicked")
    if(timerId!=null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer,10);
})

stopBtn.addEventListener("click",()=>{
    clearInterval(timerId);

})

resetBtn.addEventListener("click",()=>{
     clearInterval(timerId);
    timerDisplay.innerHTML=`00:00:00`;
    milliSec=sec=min= 0;
})


 function startTimer(){
   milliSec++;
   if(milliSec==100){
    milliSec=0;
    sec++;
      if(sec==60){
        sec=0;
        min++;
      }
   }

let milliSecString=milliSec<10 ? `0${milliSec}`:milliSec;
let secString=sec<10 ? `0${sec}`:sec;
let minString=min<10 ? `0${min}`:min;

timerDisplay.innerHTML=`${minString}:${secString}:${milliSecString}`;

}



lapBtn.addEventListener("click",()=>{
    lapListBtn.style.display="block";
    let li=document.createElement("li");
    let milliSecString=milliSec<10 ? `0${milliSec}`:milliSec;
    let secString=sec<10 ? `0${sec}`:sec;
    let minString=min<10 ? `0${min}`:min;
    li.innerHTML=`${minString}:${secString}:${milliSecString}`;
    document.querySelector("#lapList").appendChild(li);
})




lapListBtn.addEventListener("onClick",()=>{

});
