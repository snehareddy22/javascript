// console.log(`hello`)

// window.alert(`this is an alert`)

// this is a comment

// document.getElementById(`myh1`).textContent="hellow"


//variable
//description let x;
//assignment x=100;

//numbers
// let age=122;
// let price=3;
// let gpa=3;
// console.log(age);
// console.log(gpa);
// console.log(typeof age);
// console.log(`you are ${age} years old`);
// console.log(`the price is $${price}`);
// console.log(`yor gpa is:${gpa}`);

//strings
// let firstName="Bro";
// let email="bububu123"   //can contain numbers
// console.log(typeof firstName);
// console.log(`MY NAME IS ${firstName}`);
// console.log(`your email is:${bububu123}`);

//boolean
// let online=true;
// let forSale=true;
// let isStudent=true;
// console.log(`bro is online:${online}`);
// console.log(`is this car for sale:${forSale}`);
// console.log(`enrolled:${isStudent}`);

//variables
// let fullName="Bro Code"
// let age=25;
// let isStudent=faslse;
// document.getElementById("p1").textContent=`your name is ${fullName}`;
// document.getElementById("p2").textContent=`your age is ${age}`;
// document.getElementById("p3").textContent=`Enrolled :${isStudent}`;

//Arithmatic operations =oparands(values,variables,etc),operators(+,-,*,/)
// let students=30;
// student=student+1;
// student=student-1;
// student=student*2;
// student=student/2;
// student=student**2;
// student=student%2;
//using agumented assignment operators
// students+=1;
// students-=1;
// students*=2;
// students/=2;
// students**=2;

// student++; //increment operator
// student--; //decrement operator 
// console.log(student);

// operation precedence
// 1.parenthesis()
// 2.exponents
// 3.multiplication and deivision and modulo
// 4.addition and subtraction

// let result=1+2*3+4**16;
// console.log(result);

//how to accept user input
//1.easy way is window prompt
//2.professional way ia html textbox

// let username;
// username=window.prompt("whats your username?");
// console.log(username);


// let username;
// document.getElementById("mysubmit").onclick=function(){
//     username=document.getElementById("mytext").value;
//     document.getElementsById("myh1").textContent='hello $(username)';
// }


//TYPE CONVERSION=change te datatype of a value to amather
// let age=window.prompt("how old are you?");  //takes as string
// age=Number(age);
// age+=1
// console.log(age,typeof age);

// let x="pizza";
// let y="pizza";
// let z="pizza";
 
// let x="0";
// let y="0";
// let z="0";

// let x="";
// let y="";
// let z="";

// let x;
// let y;
// let z;

// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x,typeof x);   //NaN  'number'
// console.log(y,typeof y);   //pizza string
// console.log(z,typeof z);   //true   'boolean'

//constants=a variable that cant be changed
// const PI=3.14; //capital for only numbers
// let radius;
// let cicumference;
// radius=window.prompt("enter the radius of a circle");
// radius=Number(radius);
// cicumference=2*pi*radius;
// console.log(cicumference)

// const PI=3.14;
// let radius;
// let cicumference;

// document.getElementById("mysubmit").onclick=function(){  //all code in {} will execute after clicking the button
//     radius=document.getElementById("mytext").value;
//     radius=Number(radius);
//     cicumference=2*PI*radius;
//     document.getElementsById("myh3").textContent= circumference+"cm";
// }

//Math built in objects
// Math.PI
// concole.log(Math.E);
// concole.log(Math.PI);


// let x=3.21;
// let y=3.6;
// let u=-3.5;
// z=Math.round(x);
// w=Math.floor(y);
// e=Math.ceil(x)
// t=Math.trunc(y);
// z=Math.pow(x,y);
// a=Math.sqrt(x);
// c=Math.log(x);
// o=Math.sin(x);
// v=Math.abs(u);
// s=Math.sign(u);
// let max=Math.max(x,y,u);
// let max=Math.min(x,y,u);

// //to genartre a random number
// let randomnum=Math.floor(Math.random()*6)+1;
// console.log(randomnum);

// const min=50;
// const max=100;
// let randomnum=Math.floor(Math.random()*max)+min;


//IF STATEMENTS =if a condition is true,execute some code
//               if not ,do somrthing else
// let age=25;
// if (age >=18){
//     console.log("you are old");
// }
// else{
//     console.log("you are not old");
// }

// let time=9;
// if (time < 12){
//     console.log("good morning babs!");
// }
// else{
//     console.log("good afternoon babs!");
// }


// let isStudent=false;
// if (isStudent){
//     console.log("you are a student");
// }
// else{
//     console.log("you are not a student");
// }


//nested if
// let age=25;
// let hasLicense=false;
// if (age>=16){
//     console.log("you are old enough to drive");
//     if(hasLicense){
//         console.log("he has license");
//     }
//     else{
//         console.log("he dont have license yet");
//     }
// }
// else{
//     console.log("you are not old enough to drive");
// }


// const myText=document.getElementById("myText");
// const mySubmit=document.getElementById("mySubmit");
// const resultElement=document.getElementById("resultElement");
// mySubmit.onclick=function(){
//     if (age>=100){
//         resultElement.textContent="you are too old to enter this site";
//     }
//     else if (age==0){
//         resultElement.textContent="you are just born,go to sleep";
//     }
//     else if (age<0){
//         resultElement.textContent="your age cant be below zero,are you an aliean?";
//     }
//     else{
//         resultElement.textContent="you are not old enough to this site";
//     }
// }


//checeked property in js
//.checked=property that determines the checked state of an HTML chekbox or radio button elemnt

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");
// mySubmit . onclick = function(){
//     if(myCheckBox.checked){
//         subResult. textContent = `You are subscribed!`;
//     }
//     else{
//         subResult.textContent = `You are NOT subscribed!`;
//     }
//     if (visaBtn.checked){
//         paymentResult.textContent = `You are paying with visa!`;
//     }
//     else if (masterCardBtn.checked){
//         paymentResult.textContent = `You are paying with masterCard!`;
//     }
//     else if (payPalBtn.checked){
//         paymentResult.textContent = `You are paying with payPal!`;
//     }
//     else{
//         paymentResult.textContent = `select a payment type`;
//     }
// }

//ternary opeartion of js=a shortcut to if{} and else{} statements helps to assign based on a condition 
//condition? codeTfTrue:codeIfFalse

let age=20;
age>18?"you are adult":"you are child";