// ES6 Features
// Activity 1: Template literals
let name = "Maham";
let age = 25;
console.log(`Hi! ${name} you are ${age} years old `);

// multi-line strng
console.log(`Maham is a good student 
she is very intelligent`);

// ------------- end ----------

// Activity 2: Destructuring
let deArr = [1, 2, 3];

let [first, second, third] = deArr;

console.log(first);
console.log(second);
console.log(third);

let deObj = {
  title: "Prisoners of Geography",
  author: "tim",
};

let { title } = deObj;
console.log(title);
let { title: n } = deObj;
console.log(n);

// ------------- end ----------

// Activity 3: Spread and Rest operator

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = [...array, 1, 2, 3, 4, 5];
let mergeArr = [...array, ...newArray];
console.log(newArray);
console.log(mergeArr);

function sum(...number) {
  let total = 0;
  for (const iterator of number) {
    total += iterator;
  }
  return total;
}

// sum(5,8)
console.log(sum(5, 3, 7));

// ------------- end ----------
// Activity 4: Default Peremeter

function defaultPara(a, b = "Asim") {
  return `${a} and ${b} are good frineds`;
}

//Calling the function with only one parameter
let def = defaultPara("Saim");
console.log(def);
//Calling the function with two parameter
let bothParameter = defaultPara("Asad", "Hamad");
console.log(bothParameter);

// ------------- end ----------
// Activity 5:
let Name = "Asim";
let email = "asim@gmail.com";
let job = "Developer";

let person = {
  Name,
  email,
  job,
  greet(){
    console.log(`My name is ${Name} and I am a ${job}`);
  }
};
person.greet()


let names = 'maria';
let computed = {
    rollNo: 1,
    age :22,
    [`names_${names}`]: names,
}
console.log(computed.names_maria);
// ------------- end ----------
