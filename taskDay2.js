// Arithmetic operator
let num1 = 22;
let num2 = 11;
let add = num1 + num2;
console.log(add);
let subtract = num1 - num2;
console.log(subtract);
let multiply = num1 * num2;
console.log(multiply);
let divided = num1 / num2;
console.log(divided);

// Assignment Operator
let number = 2;
number += number ;
console.log(number);
let number1 = 2;
number1 -= number1 ;
console.log(number1);


//  Comparison operator
if ( 5 > 2) {
    console.log("5 is greater than 2");
}

if ( 5 < 9) {
    console.log("5 is less than 9");
}

if (  5 >= 2) {
    console.log("5 is greater than or equal 2");
}
if ( 5 <= 7) {
    console.log("5 is less than or equal 2");
}
if (5 == 5) {
    console.log("5 is equal to 5");
}
if (5 === "5") {
    console.log("5 is equal to 5");
}else{
    console.log("you can not compair number and string");
}

let grater = 5 > 2;
console.log(grater);
let less = 5 < 9;
console.log(less);
let graterEqual = 5 >= 2;
console.log(graterEqual);
let lessEqual = 5 <= 2;
console.log(lessEqual);
let equal = 5==5;
console.log(equal);
let absoluteEq = 5 === "5"; //equal value and equal type
console.log(absoluteEq);


//  Logical operator

if ( 8 > 7 && 5< 9) {
   console.log( "true");
}
if (15 > 3 || 17 < 12) {
    console.log( "true");
}

if (12 != 13) {
    console.log( "true");
}


let positive = (0<5) ? 'positive' : 'negative';
let negative = (0>5) ? 'positive' : 'negative';

console.log(positive);
console.log(negative);