// Control Structure
// Activity 1: if else Statement

let x = 3;

if (x > 0) {
    console.log("Number is positive");
} else if(x < 0){
    console.log("Number is negtive");
    
}else {
    console.log("Number is zero");

}

let age = 21;

if (age >= 18) {
    console.log("Person is eligable for vote");
} else {
    console.log("Person is not eligable for vote");
    
}
// ------------- end ----------



// Activity 2: Switch case

let day = "Monday"

switch (day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;    
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday")
        break;   
    case "Saturday":
        console.log("Saturday")
        break; 
    case "Sunday":
        console.log("Sunday")
        break;    
    default:
        console.log("unvalid")
        break;
}

let score = 66;

switch (true) {
    case score > 80:
        console.log("Grade is 'A'");
        break;
    case score > 70:
        console.log("Grade is 'B'");
        break;    
    case score> 60:
        console.log("Grade is 'C'");
        break;
    case score > 50:
        console.log("Grade is 'D'");
        break;   
    default:
        console.log("unvalid")
        break;
}
// ------------- end ----------

// Ativity 3: Ternary Operator
let num = 9;
let result = (num%2 == 0) ? 'even' : 'odd';
console.log(result);

// ------------- end ----------

// Activity 4: Combining Conditions
let year = 2020;
if ((year % 4 == 0) &&  (year % 100 != 0 ) || (0 == year % 400  )) {
    console.log(year + " is leap year");
}
else{
    console.log(year + " is not leap year");
}
