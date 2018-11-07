const double = number => 2 * number

console.log(double(8)) // returns 16


////////

const numbers = [1, 2, 3]

// I want to double the array and get [2, 4, 6]

const newArray = numbers.map(number => number * 2)

console.log(newArray) // I get [2, 4, 6]


///////

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(member => `${member} is on ${this.teamName}`)
    }
}

console.log(team.teamSummary());


/////////   CODING EXERCISES   ////////////

// 21. Refactoring Keyword Functions
// Refactor the code below to use a fat arrow function:

// const fibonacci = function(n) {
//     if (n < 3) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// SOLUTION


const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciOneLiner = n => n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)

// console.log(fibonacci());



// 22. Arrow Functions Aren't Always The Solution
// Add another key to profile called 'getName', it should be a function that returns the profile's name
// using 'this.name'. Does the solution work with a fat arrow function or will you have to use a function
// keyword instead?

// const profile = {
//     name: 'Alex'
// };

// SOLUTION

const profile = {
    name: 'Alex',
    getName: function() {
        return this.name
    }
};

// console.log(profile.getName()); // It returns Alex. If we were using an arrow function on 'getName' we'd
// not get the 'this' binded.
