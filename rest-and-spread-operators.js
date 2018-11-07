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

function validateShoppingList(...items) { // Using 'rest' here
    if (items.indexOf('milk') < 0) { // checks if the 'milk' is there
        return [ 'milk', ...items] // Using 'spread' here
    }
    return items
}

console.log(validateShoppingList('oranges', 'bread', 'eggs')) // returns: [ 'milk', 'oranges', 'bread', 'eggs' ]

// ALTERNATIVE using 'find' instead of IndexOf
// function validateShoppingList(...items){
//     if ( !items.find(item => item === 'milk')) { 
//           return ['milk',...items]
//         }
//     return items
// }


// ALTERNATIVE using 'includes'
// function validateShoppingList(...items) {
//     if(!items.includes('milk') ) {
//       return ['milk', ...items]
//     }
    
//     return items;
// }
  



//////////////////
// Here we're passing the arguments of the function call to another function

const MathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the multiply method instead, calculateProduct will be gone soon');
        
        return this.multiply(...rest)
    },
    multiply(a, b) {
        return a * b
    }
}

console.log(MathLibrary.calculateProduct(4, 5)); // Returns: 20 and the message 





/////////   CODING EXERCISES   ////////////

// 29. Many, Many, Arguments

// Refactor the following function to use the rest operator. Remember, an argument using the rest
// operator does NOT need to be called 'rest'

// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
    
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
// }

// SOLUTION

function product(...numbers) {
    
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
}

console.log(product(3, 4, 5)); // Returns: 60
console.log(product(2, 3)); // Returns: 6   WE CAN PASS ANY NUMBER OF ARGUMENTS!!!




// 30. Spreadin' Arrays
// Refactor the following to use the spread operator

// function join(array1, array2) {
//     return array1.concat(array2);
// }

// SOLUTION

const rappers = ['Vince', 'Travis', 'Kendrick']
const singers = ['H.E.R.', 'Kehlani', 'Rico Nasty']

function join(array1, array2) {
    return [...array1, ...array2]
}


// console.log(join(rappers, singers)); // Returns: [ 'Vince', 'Travis', 'Kendrick', 'H.E.R.', 'Kehlani', 'Rico Nasty' ]


// 31. Mixing Rest and Spread
// Refactor the following to use only the rest operator

// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
// }
// it returns: [ 76, 12, 10, 400, 23, 2, 3, 5 ]



// SOLUTION

// this solution uses 'rest' only
function unshift(array, ...numbers) {
    return numbers.concat(array)
}

// this one uses 'rest' and 'spread'
// function unshift(array, ...numbers) {
//     return [...array, ...numbers]
// }


// console.log(unshift([2, 3, 5], 76, 12, 10, 400, 23));
