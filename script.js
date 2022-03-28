//Printing values to console
// console.log(40+8+23-10)

//Declaring a Variable
// let firstName = "Benson"
// console.log(firstName);//printing a variable in the console

//Coding challenge 1
markHeight = 1.69;
markWeight = 78;

johnHeight= 1.95;
johnWeight = 92;

//BMI = mass / height ** 2
markBMI = markWeight / markHeight ** 2
markBMI2 = markWeight / (markHeight * markHeight)
console.log(markBMI)
console.log(markBMI2)

//BMI = mass / height ** 2
johnBMI = johnWeight / johnHeight ** 2
johnBMI2 = johnWeight / (johnHeight * johnHeight)
console.log(johnBMI)
console.log(johnBMI2)
 let markHigherBMI = '';
 if(markBMI >johnBMI ) {
     markHigherBMI = true
 }else{
     markHigherBMI = false
 }
console.log(markHigherBMI)

// Js uses '//' for comments


/* MULTI LINE COMMENTS
johnBMI = johnWeight / johnHeight ** 2
johnBMI2 = johnWeight / (johnHeight * johnHeight)
console.log(johnBMI)
console.log(johnBMI2)
 let markHigherBMI = '';
 if(markBMI >johnBMI ) {
     markHigherBMI = true
 }else{
     markHigherBMI = false
 }
console.log(markHigherBMI)*/

//Boolean Data Type
let jsIsFun = true
console.log(jsIsFun)