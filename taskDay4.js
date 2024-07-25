// Activity 1: For Loop
let array= [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < array.length; i++) {
 
    console.log(i);
    
}

let tableFive= 5;
for (let i = 1; i < 10; i++) {
    let total=tableFive*i
    console.log(total);
}

// ------------- end ----------

// Ativity 2: While Loop
let sum = 0
let i =1
while (i <= 10) {
    sum = sum + i
    console.log(sum);
    i++
}

let num = 10;
let a = 0;

while (a <= num) {
    let newNum = num - a;
    console.log(newNum)
    a++
}

// ------------- end ----------

// Activity 3: Do whie loop
let value = 1;
do {
    console.log(value);    
    value++
} while (value <= 5);


let factorial = 1;
let val = 1
do {
    factorial = factorial*val
    console.log(factorial);
    val++
} while (val <= 5);

// ------------- end ----------

// Activity 4: Loop control statement

for (let i = 0; i < 6; i++) {
    let line = ""
   for (let j = 0-i; j < 0; j++) {
    line += "*"
    
   }
    console.log(line);
}

// ------------- end ----------

// Activity 5: Loop control statement
for (let i = 1; i <= 10; i++) {
    if (i == 5 ) {
        continue;
    }
    console.log(i);
}



for (let i = 0; i <= 10; i++) {

    if (i == 7 ) {
        break;
    }
    console.log(i);
    
}

