// Error handling
function throwError() {
    throw new Error("This is an internal error");
  }
  
  function handleError() {
    try {
      throwError();
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  
  // Call the function to see the error handling in action
  handleError();


  function twoNum(params) {
    throw new Error("denominator is zero")
  }

  function divisionNum(a =2, b=6) {
   
    try {
        if (b == 0) {
            twoNum()
        }
       
        return a/b
    } catch (error) {
        console.error(error.message)
    }
    
  }
let result = divisionNum(4,0)
console.log(result);

// Activity 2

function Block(params) {
    try {
        console.log("inside try block");
        throw new Error("Error occurred")
    } catch (error) {
        console.log("error in catch");
        console.error(error.message);
    } finally{
        console.log("inside Finally block");
    }
}
Block()

// Activity 3
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError("Input must be a non-empty string");
    }
    console.log(`Input is valid: ${input}`);
}



// Activity 4

const promisesOne = new Promise(function(resolve,reject){
    let err = false
    if (!err) {
        resolve({name:"hitesh",age:24})
        
    }else{
        reject("somthing wrong")
    }
}).then((data)=>{
    console.log(data);
})    
.catch((reject)=>{
console.log(reject);
})

let promisesAsyncReject = new Promise(function (resolve,reject) {
    let err = true
    if (!err) {
        resolve({name:"hitesh",age:24})
        
    }else{
        reject("somthing wrong")
    }
})


async function promisesAsync(params) {
   
    try {
        const respond = await promisesAsyncReject;
        console.log(respond);
       } catch (error) {
        console.log(error);
       }
}

promisesAsync()



// Activity 5

fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
.then((response)=>{
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json()
})
.then((data)=>{
    console.log(data);
})    
.catch((error)=>{
    console.error('There has been a problem with your fetch operation:', error);
})


let apiUrl = "https://jsonplaceholder.typicode.com/invalid-endpoint"

async function fetchData() {
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error('problem with your fetch operation:', error);
    }
}
fetchData()


