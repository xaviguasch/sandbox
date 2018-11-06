// example with for-loops. Let's sum all the numbers in the array.

const numbers = [ 10, 20, 30 ]

// let sum = 0

// for (let i = 0; i < numbers.length ; i++) {
//     sum += numbers[i]
// }

// console.log(sum); // It returns 60, the sum of the numbers in the array



// using REDUCE

const result = numbers.reduce(function(sum, number) {
    return sum + number
}, 0) 
// this "0" is the initial value of sum. So, "0" + "10" in the first iteration. Then sum is 
// "10". So, in the second iteration it's "10" + "20". Then sum is "30". So, in the third iteration is
// "30" plus "30".


console.log(result); // It returns 60


/////
// Let's get an array with just the color names. i.e. ['red', 'yellow', 'blue']. We can use map, but let's 
// try reduce instead

const primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
]

const ColorsArray = primaryColors.reduce((previous, primaryColor) => {
    previous.push(primaryColor.color)
    return previous
}, [])

console.log(ColorsArray); // it returns [ 'red', 'yellow', 'blue' ]


//////////////////////

// We want a function that takes a string and returns a boolean telling if these parens are balanced or
// not. i.e.: parens balanced -> "((()))", "()()()()", parens NOT balanced -> "))("   
// ")(" These parens are NOT balanced, the proportion is correct, though.

// function balancedParens(string) {

// }

// balancedParens("((((") Calling this function should return false, as the parens aren't balanced.

// SOLUTION

function balancedParens(string) {
    return !string.split("").reduce((previous, char) => {
        if (previous < 0) { return previous } // this is for the edge case of ")("
        if (char === "(") { ++previous } 
        if (char === ")") { --previous }
        return previous
    }, 0)   

}

// these helpers work with arrays, so we have to transform the string to one array of individual
// characters, after applying split() to the string we get this: [ '(', '(', '(', '(' ]
// "char" represents a single character.
// We create a counter and add one every time we find a "(", and if we find a ")" we decrease the counter
// by one. If the end result isn't zero it means the the parens are NOT balanced.
// "))("  this would get us "-1".


console.log(balancedParens("))))")); // The "previous" counter is 4, so it's not zero, so it's NOT balanced.
// The the return on line 60 transforms the number in "previous" count to a boolean. If it's a positive or a 
// negative number it gives us back "true". We want to reverse it with the "!" sign. 
// So now we got a "false" if the number is NOT zero, so the parens are NOT balanced.
