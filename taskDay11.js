// Promises and Async/Await

// Acitvity 1

const promisesOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("My first promises executed");
        resolve()
    },2000)
})

promisesOne.then(function(){
    console.log("promises consumed");
});

const promisesTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let message = true
        if (!message) {
            console.log("hello friends");
        }
        else{
            reject("Error:Some thing wrong")
        }
       
        
    },2000)
})

promisesTwo.catch(function(message){
    console.log(message);
});


// Activity 2
// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then((response)=>{
//     return response.json()
// })
// .then((mydata)=>{
//     console.log(mydata);
// })
// .catch((reject)=>{
//     console.log(reject);
// })

// Activity 3

const promisesAsync = new Promise(function(resolve, reject){
    setTimeout(function(){
       let err= false;
       if (!err) {
            resolve({ name: "Hitesh", email: "hitesh@gmail.com"})
       }
       
        
    },2000)
})

 async function asyncPromises() {
    const respond = await promisesAsync;
    console.log(respond);

 }
 asyncPromises()

 const promisesAsyncReject = new Promise(function(resolve, reject){
    setTimeout(function(){
       let err= true;
       if (!err) {
            resolve({ name: "Hitesh", email: "hitesh@gmail.com"})
       }
       else{
        reject("ERROR: Data went wrong")
       }
        
    },2000)
})

 async function asyncPromisesR() {
   try {
    const respond = await promisesAsyncReject;
    console.log(respond);
   } catch (error) {
    console.log(error);
   }

 }
 asyncPromisesR()


//  Activity 4
let api = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(api)
.then((response)=>{
        return response.json()
    })
.then((data)=>{
        console.log(data);
    })    
.catch((reject)=>{
    console.log(reject);
})


async function fetchData() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();


// Activity 5

let pro1 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('first promises'),1000)
})
let pro2 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('2nd promises'),2000)
})    
let pro3 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('third promises'),3000)
})



Promise.all([pro1,pro2,pro3])
.then((allData)=>{
    console.log(allData);    
})
.catch((err)=>{
    console.log(err);    
})

Promise.race([pro1,pro2,pro3])
.then(value => {
    console.log(value); 
  })
  .catch(error => {
    console.error(error);
  });
