// Array
// Activity1: Array creation and access

let ary= [1,2,3,4,5]
console.log(ary);

// console.log(ary[0] , ary[4]);

// ------------- end ----------

// Activity2: Array Method (Basic)

let array = [1,2,3,4,5]
let addVal = array.push(6)
// console.log(addVal);

let array1 = [1,2,3,4,5]
// console.log(array1.pop());

let removeFirst = [1,2,3,4,5,6]
removeFirst.shift()
// console.log(removeFirst);
let addFirst = [1,2,3,4]
addFirst.unshift(5)
// console.log(addFirst);

// ------------- end ----------
// Activity3: Array Method (Advance)
let maparray= [4,5,6,7,8,9]
let map=maparray.map(mapFun)
console.log(map);
function mapFun(e) {
    return e * e
}


// filter
let filterArray = [1,2,3,4,5,6,7,8,9,10]
let myfun= filterArray.filter(filterFun)
// console.log(myfun);
function filterFun(e) {
    return e%2 == 0
}

// reduce

let reduceArray = [2,3]
let reduced = reduceArray.reduce(reducefun)
console.log(reduced);
function reducefun(e) {
    return e += e 
}


// ------------- end ----------

// Activity4: Array Itration
let forLoop = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < forLoop.length; i++) {
    const element = forLoop[i];
    console.log(element);
}

let forEachLoop = ["apple" , "mango" , "orange" , "date"]

forEachLoop.forEach(element => {
    console.log(element); 
});



// ------------- end ----------
// Activity5: Multi-dimentional Array
let array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(array2D);

let twoD= [
    ['Q', 'W', 'R'],
    ['F', 'G', 'L'],
    ['C', 'B', 'M']
]

console.log(twoD[1][1]);




// ------------- end ----------

