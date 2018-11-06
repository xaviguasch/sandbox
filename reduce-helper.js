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


// console.log(result); // It returns 60


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

// console.log(ColorsArray); // it returns [ 'red', 'yellow', 'blue' ]


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
        if (char === "(") { return ++previous } 
        if (char === ")") { return --previous }  
        return previous
    }, 0)       

}

// these helpers work with arrays, so we have to transform the string to one array of individual
// characters, after applying split() to the string we get this: [ '(', '(', '(', '(' ]
// "char" represents a single character.
// We create a counter and add one every time we find a "(", and if we find a ")" we decrease the counter
// by one. If the end result isn't zero it means the the parens are NOT balanced.
// "))("  this would get us "-1".


// console.log(balancedParens("((((")); // The "previous" counter is 4, so it's not zero, so it's NOT balanced.
// The the return on line 61 transforms the number in "previous" count to a boolean. If it's a positive or a 
// negative number it gives us back "true". We want to reverse it with the "!" sign. 
// So now we got a "false" if the number is NOT zero, so the parens are NOT balanced.







/////////   CODING EXERCISES   ////////////

// 14. Distance Traveled
// Use the 'reduce' helper to find the sum of all the distances traveled. Assign the result to the varaible 
// 'totalDistance'.

// const trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }]

// const totalDistance

// SOLUTION

const trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }]

const totalDistance = trips.reduce((previous, trip) => {
    return previous + trip.distance
}, 0)

// console.log(totalDistance);  // it returns the number 47


// 15. Reducing Properties
// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.
// The object returned should have the form '{ siting: 3, standing: 2 }'. The initial value has been
// provided to you.
// HINT: Don't forget to return the accumulator object (the first argument to the iterator function)

// const desks = [
//     { type: 'sitting' },
//     { type: 'standing' },
//     { type: 'sitting' },
//     { type: 'sitting' },
//     { type: 'standing' }
//  ];
  
//   const deskTypes = desks.reduce(function() {
      
//   }, { sitting: 0, standing: 0 });

// SOLUTION

const desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];
  
const deskTypes = desks.reduce((acc, desk) => {
    if (desk.type === 'sitting') {
        acc.sitting += 1
    } else if (desk.type === 'standing') {
        acc.standing += 1
    }
    
    return acc
    
      
}, { sitting: 0, standing: 0 });

// console.log(deskTypes); // It returns { sitting: 3, standing: 2 }



// 16. Hardmode: Custom 'Unique' Helper
// Another really hard one! Write a function called 'unique' that will remove all the duplicate values from
// an array.
// For examples, given the following array:
// const numbers = [1, 1, 2, 3, 4, 4]
// Your function should return
// [1, 2, 3, 4]
// hint: Use the 'reduce' and 'find' helpers

// function unique(array) {
//    
// }

// SOLUTION

function unique(inputArray){
    return inputArray.reduce((previous, inputItem) => {
        if(previous.find((prevItem) =>  prevItem === inputItem)) 
        {
            return previous;
        }
        previous.push(inputItem);
        return previous;
    }, []);
}

console.log(unique([1, 1, 2, 3, 4, 4]));

// COMMENTS ON HOW IT'S DONE:
// 1. Pass in an array as the accumulator object.  This array will get all the unique records.

// 2. For each step through the reduce function, take the current element (the second argument to the anonymous function) and look through the accumulator array to see if the element already exists in there.  The 'find' helper is a good thing to use here.

// 3.  If the element is already in the accumulator array, then we don't need to add it again, otherwise, do toss it in.
