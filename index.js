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

// let age=20;
// age>18?"you are adult":"you are child";
// console.log(message);

// let time=16;
// let greeting=time<12?"good morning":"good afternoon"
// console.log(greeting);

// let isStudent=true;
// let message=isStudent?"you are a student":"you are not a student"
// console.log(message);

// let purchase=125;
// let discount=paschase>= 100 ? 10 : 0;
// console.log(`your total is $${purchase-purchase*(disocunt)}`);

// //switch=can be an efficent replacement for many else if stataements
// let day=1;
// if(day==1){
//     console.log(`it is monday`)
// }
// if(day==2){
//     console.log(`it is tuesday`)
// }
// if(day==3){
//     console.log(`it is wednesday`)
// }
// if(day==4){
//     console.log(`it is thursday`)
// }
// if(day==5){
//     console.log(`it is friday`)
// }
// if(day==6){
//     console.log(`it is saturay`)
// }
// if(day==7){
//     console.log(`it is sunday`)
// }
// else{
//     console.log(`invalid`)
// }

//using switch
// let day=1;
// switch(day){
//     case 1:
//         console.log(`it is monday`);
//         break;
//     case 2:
//         console.log(`it is tuesday`);
//         break;
//     case 3:
//         console.log(`it is wednesday`);
//         break;
//     case 4:
//         console.log(`it is thursday`);
//         break;
//     case 5:
//         console.log(`it is friday`);
//         break;
//     case 6:
//         console.log(`it is saturday`);
//         break;
//     case 7:
//         console.log(`it is aunday`);
//         break;
//     default:
//         console.log(`invalid data`);
// }

//string methods=allow you to manupulate and work with text(strings)
// let userName="sneha";
// console.log(userName.charAt(0));
// console.log(userName.indexOf("s"));
// console.log(userName.length);

// userName=userName.trim();
// console.log(userName);


// userName=userName.toUpperCase();
// console.log(userName);


// userName=userName.toLowerCase();
// console.log(userName);


// userName=userName.repeat(3);
// console.log(userName);

// let result=userName.startsWith("s");
// console.log(result);
// let results=userName.endsWith("s");
// console.log(results);

// let phoneNumber=`123-456-7890`;
// phoneNumber=phoneNumber.replaceAll("-","");
// console.log(phoneNumber);

// let phoneNumbers=`123-456-7890`;
// phoneNumbers=phoneNumbers.padStart(15,"0");
// console.log(phoneNumbers);

// let phoneNumbe=`123-456-7890`;
// phoneNumbe=phoneNumbe.padEnd(15,"0");
// console.log(phoneNumbe);


//string slciing in js=creating a substring from a portion of anather string
//string.slice(start,end)
// const fullName="bro code";
// let firstName=fullName.slice(0,3);
// let lastName=fullName.slice(4,8);
// console.log(firstName);
// console.log(lastName);

// const fullName="broseph code";
// let firstName=fullName.slice(0,fullName.indexOf(" "));
// let lastName=fullName.slice(fullName.indexOf(" "));
// console.log(firstName);
// console.log(lastName);

// const email="snehasathi100@gmail.com";
// let username=email.slice(0,email.indexOf("@"));
// let extension=email.slice(email.indexOf("@")+1);
// console.log(username);
// console.log(extension);

//method changing=calling one medthod after anather in one continuous line of code
//no method changing
// let username=window.prompt("enter your username:");

// username=username.trim();

// let letter=username.charAt(0);
// letter=letter.toUpperCase();

// let extraChars=username.slice(1);
// extraChars=extraChars.toLowerCase();

// username=letter+extraChars;

// console.log(username);


//method changing
// let username=window.prompt("enter your username:");
// username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
// console.log(username);

//logical operators=used to combine or manipulate boolean values(true ir false)
// AND=&&
// OR=||
// NOT=!

// const temp = 20;
// if (temp>0 ||temp<=30){
//     console.log("the weather is good");
// }
// else{
//     console.log("the weather is bad")
// }
// const isSunny=true;
// if (!isSunny){
//     console.log("it is not sunny")
// }
// else{
//     console.log("it is not cloudy")
// }

//= assignment operator
//== comparision operator(compares if values are equal)
// === strcit equality operator(compares if values and datatypes are equal)
// != inequality operator
// !== strictly inequality operatory

// const PI=3.14;
// if (PI=="3.14"){   //(PI==="3.14") this is not a PI
//     console.log("this is a PI");
// }
// else{
//     console.log("this is not a PI");
// }

// const PI=3.14;
// if (PI!="3.14"){   //(PI!=="3.14") this is not a PI
//     console.log("this is not a PI");
// }
// else{
//     console.log("this is a PI");
// }

//while loop=repeat some code while some condition is true
// let usernmae="";
// while(username == ""){
//     username=window.prompt(`enter your peru`);
// }
// console.log(`hello ${username}`);

// let loggedin=false;
// let username;
// let password;
// while(!loggedin){
//     username=window.prompt(`enter the username`);
//     password=window.prompt(`enter the password`);
//     if (username === "myusername"&& password ==="mypasword")
//         console.log("you are loggedin");
//     else{
//         console.log("invalid credentials,try again")
//     }
// }

//for loop =repeat some code a limited amount of times
// for (let i=0;i<=2;i++ ){
//     console.log("hellow")
// }
// for (let i=0;i<=2;i++ ){
//     console.log("i")
// }
// for (let i=1;i<=20;i++){
//     if(i==13){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }
// for (let i=1;i<=20;i++){
//     if(i==13){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

//function in js=a section of reusable code.
// declare code oncuechange,use it whenever needed.
// call the function to execute that code

function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
console.log(add(2,3));