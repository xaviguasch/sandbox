const products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    { name: 'banana', type: 'fruit', quantity: 10, price: 15},
    { name: 'celery', type: 'vegetable', quantity: 30, price: 9},
    { name: 'orange', type: 'fruit', quantity: 3, price: 5},
]

// using classic for-loop
// const filteredProducts = []

// for (let i = 0; i < products.length; i ++) {
//     if (products[i].type === 'fruit') {
//         filteredProducts.push(products[i])
//     }
// }

// console.log(filteredProducts);

const result = products.filter((product) => {
    return product.type === 'fruit'
})

// console.log(result)

// EXAMPLE: Get me all the vegetables available that are less than $10 each. If quantity is 0 it means it's not available

const selection = products.filter((product) => {
    return product.type === 'vegetable' 
        && product.quantity > 0 
        && product.price < 10
})

console.log(selection); // it returns a new array with the celery object


// ANOTHER EXAMPLE

const post = { id: 4, title: 'New Post' }

const comments = [
    { postId: 4, content: 'Awesome post' },
    { postId: 3, content: 'It was ok' },
    { postId: 4, content: 'neat' },
]

// Let's return the comments associated with one particular post.

function commentsForPost(items, post) {
    return items.filter((item) => {
        return item.postId === post.id
    })
}

console.log(commentsForPost(comments, post)); // it returns an array with the two comment objects with a postId of 4.





/////////   CODING EXERCISES   ////////////

// 6. Filtering values
// Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50. Assign this new array to a variable called 'filteredNumbers'. Don't forget to use the 'return' keyword in the function!

const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// const filteredNumbers

// SOLUTION

const filteredNumbers = numbers.filter((number) => {
    return number > 50
})

// ALTERNATIVE SOLUTION AS ONE-LINER
// const filteredNumbers = numbers.filter(number => number > 50)

console.log(filteredNumbers);




// 7. Handling Permissions with Filter
// Filter the array of users, only returning users who have admin level access. Assign the result to the
// variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!

const users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
// const filteredUsers;


// SOLUTION
const filteredUsers = users.filter((user) => {
    return user.admin
})

// ALTERNATIVE SOLUTION AS ONE-LINER
// const filteredUsers = users.filter(user =>  user.admin)

console.log(filteredUsers); // Returns an array with the users that have admin: true



// 8. Challenging! Implementing 'reject'
// This is a hard one! Create a function called 'reject'. Reject should work in the opposite way of
// 'filter' -if a function returns 'true', the item should *not* be included in the new array. Hint: you can
// reuse filter.
//
// For example:
//
const newNumbers = [10, 20, 30];
const lessThanFifteen = reject(newNumbers, function(number) {
    return number > 15
}) // in lessThanFifteen we're storing the future call to reject

// function reject(array, iteratorFunction) {
    
// }
// console.log(lessThanFifteen());


// SOLUTION
function reject(array, iteratorFunction) {
    return array.filter((num) => {
        return !iteratorFunction(num)
    })  
}


console.log(lessThanFifteen);

// NOTES: This is the iteratorFunction: 
//
// function(number) {
// return number > 15
// })
// It returns true is the passed number is bigger than 15