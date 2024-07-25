import { get } from 'axios'; 


get('https://api.github.com/users/debanjali081')
    .then(response => {
        console.log(response.data); 
    })
    .catch(error => {
        console.error('Error:', error); 
    });