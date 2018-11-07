function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number
    }, 0)
}

console.log(addNumbers([1, 2, 3, 4, 5])) // returns: 15



// imagine now that instead of an array of numbers, we have just the numbers.
// i.e. (1, 2, 3, 4, 5)   We'd need to alter the function and pass the numbers to an array in order for
// 'reduce' to work

function otherAddNumbers(a, b, c, d, e) {
    const numbers = [a, b, c, d, e]

    return numbers.reduce((sum, number) => {
        return sum + number
    }, 0)
}

console.log(otherAddNumbers(1, 2, 3, 4, 5)); // returns: 15

// The function is not that flexible. You need to always have the same number of arguments passed.

// With the REST operator we avoid this problem. All the numbers get grouped into a single array and 
// 'reduce' can work normally.

function restAddNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number
    }, 0)
}

console.log(restAddNumbers(1, 2, 3, 4, 5, 6)); // returns: 21





// SPREAD OPERATOR

const defaultColors = ['red', 'green']

const userFavoriteColors = ['orange', 'yellow']

// we want to join both arrays, we can use 'concat'

const concatedColors = defaultColors.concat(userFavoriteColors)
// console.log(concatedColors); // It prints: [ 'red', 'green', 'orange', 'yellow' ]



// but also we can use the SPREAD OPERATOR, we're flattening out the 2 original arrays

const spreadedColors = [ ...defaultColors, ...userFavoriteColors ]
// console.log(spreadedColors); // It prints: [ 'red', 'green', 'orange', 'yellow' ]


// But why use spread instead of concat? It allows us to see more what happens in the code,
// we clearly see we're creating a new array. And we can also a singular element in the array,
// like this:

const newSpread = [ 'blue', ...defaultColors, ...userFavoriteColors, 'grey']
// console.log(newSpread); // It prints: [ 'blue', 'red', 'green', 'orange', 'yellow', 'grey' ]


// Also we can add a full array directly without "spreading" its contents

const anotherColorArray = [ 'fire', 'blue steel']

const newerSpread = [ 'blue', ...defaultColors, anotherColorArray ]
console.log(newerSpread); // It prints: [ 'blue', 'red', 'green', [ 'fire', 'blue steel' ] ]


////////////
// Let's create a function that checks if we're getting milk in our shopping list, if we aren't getting
// milk, the function adds it to the array.

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) { // checks if the 'milk' is there
        return [ 'milk', ...items]
    }
    return items
}

console.log(validateShoppingList('oranges', 'bread', 'eggs')) // returns: [ 'milk', 'oranges', 'bread', 'eggs' ]

