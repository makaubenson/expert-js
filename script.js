//Printing values to console
// console.log(40+8+23-10)

//Declaring a Variable
// let firstName = "Benson"
// console.log(firstName);//printing a variable in the console

//Coding challenge 1
let markHeight = 1.69;
let markWeight = 78;
//ccc
let johnHeight= 1.95;
let johnWeight = 92;

//BMI = mass / height ** 2
let markBMI = markWeight / markHeight ** 2
//BMI = mass / height ** 2
let johnBMI = johnWeight / johnHeight ** 2
let markHigherBMI = markBMI > johnBMI
// console.log(markBMI, johnBMI, markHigherBMI)
// Js uses '//' for comments

/* MULTI LINE COMMENTS
johnBMI = johnWeight / johnHeight ** 2
johnBMI2 = johnWeight / (johnHeight * johnHeight)
console.log(johnBMI)
console.log(johnBMI2)*/

//Boolean Data Type
let jsIsFun = true
// console.log(jsIsFun)
// typeof function
// console.log(typeof true)
// console.log(typeof jsIsFun)
// console.log(typeof 23)
// console.log(typeof 'Benson')

//Undefined Data type
let year;
// console.log(year)
// console.log(typeof year);

//Js BUG
// console.log(typeof null);//prints object. Its regarded a bug and its however not corrected for legacy reasons

//Ways of declaring variables
let age = 30; //let is used when varible value is likely to change
age = 31; //mutating variable

const YOB = 2001;
// YOB = 2000// prints and error. 

var job = 'programmer';
job= 'CEO';