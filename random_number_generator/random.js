const rolling =document.getElementById("rolling");
const ran1 =document.getElementById("ran1");
const ran2 =document.getElementById("ran2");
const ran3 =document.getElementById("ran3");
let randomNumber1
let randomNumber2
let randomNumber3
const min=1
const max=6
rolling.onclick=function(){
    randomNumber1=Math.floor(Math.random()*max)+min;
    randomNumber2=Math.floor(Math.random()*max)+min;
    randomNumber3=Math.floor(Math.random()*max)+min;
    ran1.textContent=randomNumber1;
    ran2.textContent=randomNumber2;
    ran3.textContent=randomNumber3;
}
