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
students+=1;
students-=1;
students*=2;
students/=2;
students**=2;


student++; //increment operator
student--; //decrement operator 
// console.log(student);
/*operation precedence
1.parenthesis()
2.exponents
3.multiplication and deivision and modulo
4.addition and subtraction
*/
// let result=1+2*3+4**16;
// console.log(result);

//how to accept user input
//1.easy way is window prompt
//2.professional way =html textbox

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
