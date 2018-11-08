const expense = {
    type: 'Business',
    amount: '$45 dollar'
}

// const type = expense.type
// console.log(type); // returns 'Business'

// const amount = expense.amount
// console.log(amount); // returns '$45 dollar' 


// Refactoring to ES&

// const { type } = expense
// console.log(type) // returns 'Business'


// const { amount } = expense
// console.log(amount); // returns '$45 dollar'


// we can combine it into a single line
const { type, amount } = expense
// console.log(type) // returns 'Business'
// console.log(amount); // returns '$45 dollar'



// NOTE: You can also reassign the names like this:

// const { type: myType, myAmount: amount } = expense
// console.log(myType); // returns 'Business'
// console.log(myAmount); // returns '$45 dollar'



////////////////

const savedFile = {
    extension: 'jpeg',
    name: 'repost',
    size: 1404
}

// function fileSummary(file) {
//     return `The file ${file.name}.${file.extension} is of size ${file.size}`
// }

// console.log(fileSummary(savedFile)); // Returns: The file repost.jpeg is of size 1404


//  we can achieve the same with DESTRUCTURING

function fileSummary({name, extension, size}) {
    return `The file ${name}.${extension} is of size ${size}`
}
 
console.log(fileSummary(savedFile)); // Returns: The file repost.jpeg is of size 1404
