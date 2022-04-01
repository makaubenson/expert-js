//Pridting values to console
// console.log(40+8+23-10)

//Declaring a Variable
// let firstName = "Benson"
// console.log(firstName);//printing a variable in the console
/*
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

 MULTI LINE COMMENTS
johnBMI = johnWeight / johnHeight ** 2
johnBMI2 = johnWeight / (johnHeight * johnHeight)
console.log(johnBMI)
console.log(johnBMI2)

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
//age = 31; //mutating variable

const YOB = 2001;
// YOB = 2000// prints and error. 

// var job = 'programmer';
// job= 'CEO';

//MATHS OPERATORS
const now = 2037;
const ageJonas = now-1991;
const ageSarah = now-2018;
// console.log(ageJonas, ageSarah);

//Multiply
// console.log(ageJonas*2, ageJonas/10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2*2*2

// const firstName = "Benson";
// const lastName = "Makau";
// console.log(firstName + ' '+ lastName);

//ASSIGNMENT OPERATORS
let x = 10+5;//15
x+=10;// x= x+10
x*=4;//x=x*4
x++;//x= x+1
x--;// x=x-1
//console.log(x);// 25

//Comparison Operators
//console.log(ageJonas > ageSarah);//prints either true or false
//console.log(ageJonas >= 18);//prints either true or false
/*
>,<,>=,<=

const isFullAge = ageSarah >=18;
// console.log(isFullAge);
// console.log(now-2000 > now -2018);

let w,y;
w=y=25-10-5;//w=y=10   w=10 and y =10
//console.log(w,y);

const averageAge = (ageJonas+ ageSarah)/2;
//console.log(ageJonas, ageSarah, 'The average is '+averageAge);

//Strings and Template Literals
const firstName = 'Benson';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2037;
const benson = "I'm "+ firstName +", a "+ (currentYear- birthYear) +" year old " +job;
// console.log(benson);


//Template Literals
const bensonNew = `I'm ${firstName}, a ${currentYear- birthYear} years old ${job}`;
// console.log(bensonNew);
//Using backticks
// console.log(`I love javascript`);

// Creating multiline strings without ES6
// console.log('This is a \n\ string with \n\ multiple lines');

//Creating multiline strings with backticks
// console.log(`This is a 
// string with 
// multiple lines`);

//If Else Usage
const age = 15;
const isOldEnough = age >= 18;//boolean

if(isOldEnough){
    console.log('Benson can have a driving license.🚕');
}else{
    const yearsLeft = 18-age;
    console.log(`Benson is still a kid,he will have to wait for ${yearsLeft} years to earn one.`);
}

let birthYear = 2001;
let century;
if(birthYear <= 2000){
  century = 20 +'th';
}else{
   century = 21 +'st';
}
console.log(`This person was born in the ${century} century`);


// If Else Challenge

//Mark
let markHeight = 1.69;
let johnWeight = 78;
//John
let johnHeight= 1.95;
let markWeight = 92;

//Mark BMI = mass / height ** 2
let markBMI = markWeight / markHeight ** 2;
//John BMI = mass / height ** 2
let johnBMI = johnWeight / johnHeight ** 2;

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is greater than John's BMI (${johnBMI})`);
}else{
    console.log(`John's BMI (${johnBMI}) is greater than Marks's BMI (${markBMI})`);
}


//Type Conversion
const inputYear = '1991';
console.log(inputYear + 18);
const birthYear = Number(inputYear);//converting string to integer(number)
console.log(birthYear + 18);

// Converting strings which dont contain a number into a number

console.log(Number('Benson'));//Output = NaN which means not a number

console.log(typeof NaN);//Output is Number

//Converting types to string
const num = 23;
numString = String(num);
console.log(num, numString );

//Type Coercion
console.log("I am " + 23 + " years old");// + coerces number to string
console.log('23' - '10' - 3);// - coerces string to number
console.log('23' - '10' + 3);// output = 23103
console.log('23' * '2');// output = 46, converts strings to numbers
console.log('23' / '2');// output = 11.5, converts strings to numbers

let n = '1' + 1;//11
n= n-1;// 11 =11-1
console.log(n);// output 10

let d = '1' + 1;//11
d= d+1;// 11 ='11' + '1'
console.log(d);// output 111
console.log(2+3+4+ '5');// 95 => 2+3+4 = 9 then 9 + '5 ='95'
console.log('10'-'4'-'3'-2+'5');// '10'-'4'-'3' = 3, '10'-'4'-'3' -2 = 1, '10'-'4'-'3'-2+'5' => 1 +'5' = 15


// Truthy and Falsy Values
//Falsy Values
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean("Benson"));//true
console.log(Boolean({}));//true
console.log(Boolean(''));//false

const money = 0;
if(money){
    console.log(`Don't spent it all`);
}{
    console.log(`You should get a job`);
}
let height;//height is undefined
if(height){
    console.log('Height is defined');
}else{
    console.log('Height is undefined');
}

//Logical Operators
const age = 18;
// if(age === 18) console.log('You just became an adult');
if(age === 18 ) {//type coersion is not done
    console.log('You just became an adult (strict)');
}
if(age == 18 ) {//type coersion is done
    console.log('You just became an adult (loose)');
}

//Prompt
//const favorite =prompt("What's your favorite number ?") ;
const favorite =Number(prompt("What's your favorite number ?")) ;
console.log(favorite);
console.log(typeof favorite);

if(favorite == 23){
    console.log('Cool! 23 is an amazing number!');
}else if(favorite === 7){
    console.log('7 is also a cool number!');
}else if(favorite === 9){
    console.log('9 is also a cool number!');
}else{
    console.log('Number is neither 23 nor 7');
}

//Is Not Equal To Strict Operator (!==)
if(favorite !== 23) console.log('Why not 23?');
*/

//Boolean Logic
//Uses AND, OR & NOT
const hasDriversLicense = true;//A
const hasGoodVision = false;//B

console.log(hasDriversLicense && hasGoodVision);//AND
console.log(hasDriversLicense || hasGoodVision);//OR
console.log(!hasDriversLicense);//NOT
