// Functions
//Activity 1: Function Declaration

function checkNum(x) {
    return x = (x%2 == 0) ? "even" : "odd"
}
//  checkNum(6)
console.log(checkNum(6));



function sqrNum(num) {
    return num = num * num;
}

console.log(sqrNum(9));

// ------------- end ----------


//Activity 2: Function Expression
function maxNum(max1, max2) {
    return result = (max1 > max2) ? `The Maximum Value is ${max1} ` : `The Maximum Value is ${max2}`
}
console.log(maxNum(12, 9));



function concatenateStr(str) {
    return str ;
}
console.log(concatenateStr( "hello" + " world"));

// ------------- end ----------


// Activity 3: Arrow Function
 let sum = (x= 2,y=3 )=> x+y;
 
 console.log(sum());


 
 let containVal = (str)=> {
     return /[!@#\$%\^\&*\)\(+=._-]/.test(str)
    }
    console.log(containVal("+"));
    
// ------------- end ----------

// Activity 4: Function Parameter and Default Values

let defaultParameter = (val1=3, val2= 3 )=>{
    return val1+val2;
}
console.log(defaultParameter(5));



let person = (name , age = 24)=>{
    return console.log(`Hello, ${name} your are ${age} years old.`);
}

person("Fahad");


// ------------- end ----------



// Activity 5: Higher Order Function
// let number = 4
let manyTimeCall =(number)=>{
    for (let i = 0; i < number; i++) {
        console.log("call me");        
    }
}

function callTime() {
    
    manyTimeCall(5);
}
callTime();



function valFun1(valuse) {
    return valuse + valuse

}
function valFun2(params) {
   return valFun1(4)
}
console.log(valFun2());












