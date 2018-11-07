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


