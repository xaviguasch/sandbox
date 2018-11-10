// const promise = new Promise(() => {

// })

// console.log(promise); // Returns: Promise { <pending> }    



// const promise = new Promise((resolve, reject) => {
//     resolve('it is resolved')
// })

// console.log(promise); // Returns: Promise { it is resolved }    



// const promise = new Promise((resolve, reject) => {
//     reject('it is rejected')
// })

// console.log(promise); // Returns: Promise { <rejected> 'it is rejected' }



// const promise = new Promise((resolve, reject) => {
//     resolve()
// })

// promise
//     .then(() => console.log('finally finished'))
//     .then(() => console.log('this one is finished too'))

// Prints: finally finished
// Prints: this one is finished too

// we can chain them!
// 'then' only runs if the promise is resolved




// const promise = new Promise((resolve, reject) => {
//     reject()
// })

// promise
//     .catch(() => console.log('The operation did not went through'));
// Prints: The operation did not went through


// 'catch' only runs if the promise is rejected


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         resolve()
//     }, 3000) // Only after 3 seconds we 'resolve' the promise, we're simulating an async request
// })

// promise
//     .then(() => console.log('finally finished, it takes 3s')) 
//     .then(() => console.log('this one is finished too!!!!, 3s too'))
// It prints the logs after 3s


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {

        reject()
    }, 3000) // Only after 3 seconds we 'resolve' the promise, we're simulating an async request
})

promise
    .then(() => console.log('finally finished, it takes 3s')) 
    .then(() => console.log('this one is finished too!!!!, 3s too'))
    .catch(() => console.log('sucks to be rejected.... after 3s even'))
// It only prints the catch log! Not the 2 'then', because the promise has been rejected