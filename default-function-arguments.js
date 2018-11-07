function makeAjaxRequest(url, method) {
    if (!method) {
        method = 'GET'
        return method
    }
    return method
    // logic to make the request
}

// both requests would be the same. In the function we're checking if we provided a method when calling the 
// function, and if not, we assign it the 'GET' method as a default
// console.log(makeAjaxRequest('google.com')); // returns 'GET'
// console.log(makeAjaxRequest('google.com', 'POST')); // returns 'POST'





// With default function arguments we don't have to check if method was passed or not, we can do it like
// this:

function makeAjaxRequest2(url, method = 'GET') {
    return method
    // logic to make the request
}

// It's the same as above
// console.log(makeAjaxRequest2('google')); // returns 'GET'
// console.log(makeAjaxRequest2('google', 'POST')); // returns 'POST'

// If you don't want the to provide the argument but also want to avoid the reassignment with the default, 
// you can pass 'null' in the function call.
// console.log(makeAjaxRequest2('google', null)) // returns 'null'

// Also, if we pass 'undefined' in the function call, it gets reassigned with the default.
// console.log(makeAjaxRequest2('google', undefined)) // returns 'GET'


////////////////////////////////

function User(id) {
    this.id = generateId()
}

function generateId() {
    return Math.random() * 99999
}

// const userJohn = new User()

// console.log(userJohn); // returns:    User { id: 89024.08130395022 }     // the id is a random number


// we're adding the admin property to a user 
function createAdminUser(user) {
    user.admin = true
    return user
}

// In here we're creating a new user with a random ID and then calling create admin user. It's all nested
console.log(createAdminUser(new User(generateId()))) // returns:   User { id: 98633.79302207654, admin: true }


// What if we want to do everything in one go: To have createAdminUser create a new user, generate a unique ID
// and also give the user the admin property? We can do the following:

function updatedCreateAdminUser(user = new User(generateId())) {
    user.admin = true
    return user
}
console.log(updatedCreateAdminUser()); // returns: User { id: 58061.36615019201, admin: true }
// it returns the same as before, but we avoid all the nesting when calling the function.


const userMike = new User(generateId())

// or you can just pass an existing user, then the default won't apply:
console.log(updatedCreateAdminUser(userMike)); // returns: User { id: 31072.700149799482, admin: true }






/////////   CODING EXERCISES   ////////////

// 27. Use Default Arguments
// Refactor the following code to use default function arguments. Be sure to remove any usused code after
// you refactor it.

// function sum(a, b) {
//     if (a === undefined) {
//       a = 0; 
//     }
    
//     if (b === undefined) {
//       b = 0; 
//     }
    
//     return a + b;
// }

// SOLUTION

function sum(a = 0, b = 0) { 
    return a + b;
}

// we also can us fat arrow functions:
// const sum = (a = 0, b = 0) => a + b

// console.log(sum()); // returns: 0
// console.log(sum(3)); // returns: 3
// console.log(sum(null, 4)); // returns: 4
// console.log(sum(undefined, 5)); // returns: 5
// console.log(sum(3, 4)); // returns: 7




// 28. Dumping Unused Code
// Refactor the following code to use default function arguments. Be sure to remove any unused code
// after you refactor it

// function addOffset(style) {
//     if (!style) {
//       style = {}; 
//     }
    
//     style.offset = '10px';
    
//     return style;
// }

// SOLUTION

const addOffset = (style = {} ) => {
    style.offset = '10px'
    return style
}


// console.log(addOffset()); // returns: { offset: '10px' }
// console.log(addOffset({ })); // returns: { offset: '10px' }, you are not using the default value

