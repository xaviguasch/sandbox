// GENERATORS
// intro
// basic example using Shopping as a code metaphor:
// 1. We leave our home
// 2. Go shopping
// 3. yield cash...
// 4. ...in exchange for groceries
// 5. return home with groceries

// Now follow the numbers below to see sequence of code execution


// 2. Go shopping
// this generator does not execute until '1. We leave our home' (below)
// function* shopping() {

//     // 3. yield cash...
//     // yield keyword exits this generator 
//     // and jumps to '4. ...in exchange for groceries' (below)
//     const stuffFromStore = yield 'cash'; 

//     // 5. return home with groceries
//     return stuffFromStore; // walking back home on the sidewalk
// }

// name our shopping() generator 'gen'
// const gen = shopping();

// 1. We leave our home
// begins executing code in our shopping() generator 
// gen.next(); // jump to '2. Go Shopping'
// This will return:   { value: 'cash', done: false }


// 4. ...in exchange for groceries
// jumped here from '3. yield cash...'
// gen.next('groceries'); // jump back to '5. return home with groceries' 
// This will return:   { value: 'groceries', done: true }



// Explanation:
// 1. We leave our home -- first gen.next()
// 2. Go shopping -- begin function* shopping() generator
// 3. yield cash... -- const stuffFromStore = yield 'cash'
// 4. ...in exchange for groceries -- gen.next('groceries');
// 5. return home with groceries -- return stuffFromStore;

// So the way it works is like this:
//    - the yield keyword works in conjunction with the .next() methods
//    - the first .next() begins the generator function
//    - the yield keyword yields 'cash' and exits the generator to jump to the next .next() method
//    - the .next() method provides the arguement 'groceries' and jumps back into the generator where it left off
//    - the generator returns stuffFromStore

// In other words, the yield exchanged 'cash' and the .next('groceries') gave us back the groceries for the 'cash'.
//    - initially stuffFromstore was = yield 'cash'
//    - by the end of the generator it returned stuffFromStore = 'groceries'






///// GENERATORS ON ES6 ///////



// function* colors() {
//     yield 'red',
//     yield 'blue',
//     yield 'green'
// }

// const gen = colors()

// console.log(gen.next()) // Returns: { value: 'red', done: false }
// console.log(gen.next()) // Returns: { value: 'blue', done: false }
// console.log(gen.next()) // Returns: { value: 'green', done: false }
// console.log(gen.next()) // Returns: { value: undefined, done: true } // there's no more yield statements



function* colors() {
    yield 'red',
    yield 'blue',
    yield 'green'
}

const gen = colors()
const myColors = []

// With the for of loop you don't need to use .next()    
// You can use generators to iterate through any data structure that you want, not just objects and arrays

for (let color of colors()) {
    myColors.push(color)
}

console.log(myColors); // Prints: [ 'red', 'blue', 'green' ]




/////////////////


// const engineeringTeam = {
//     size: 3,
//     department: 'Engineering',
//     lead: 'Jill',
//     manager: 'Alex',
//     engineer: 'Dave'
// }

// We want to use generators to iterate through the employees (led, manager, engineering) but not the
// rest of the properties (size and department)

// We create an iterator we're you specify what items you want

// function* TeamIterator(team) {
//     yield team.lead
//     yield team.manager
//     yield team.engineer
// }

// Then an array for storing
// const names = []

// and finally we do the for of loop

// for (let name of TeamIterator(engineeringTeam)) {
//     names.push(name)
// }

// console.log(names); // Returns: [ 'Jill', 'Alex', 'Dave' ]




//// GENERATOR DELEGATION //////
//// HOW TO COMBINE MULTIPLE GENERATORS TOGETHER ////////

// This is the new testing team
// const testingTeam = {
//     lead: 'Amanda',
//     tester: 'Bill'
// }

// const engineeringTeam = {
//     testingTeam,  // we're referencing the testing team (   testingTeam: testingTeam    )
//     size: 3,
//     department: 'Engineering',
//     lead: 'Jill',
//     manager: 'Alex',
//     engineer: 'Dave'
// }




// function* TeamIterator(team) {
//     yield team.lead
//     yield team.manager
//     yield team.engineer  
// }

// we create another iterator for the testing team

// function* TestingTeamIterator(team) {
//     yield team.lead
//     yield team.tester
// }

// const names = []

// How we can combine these 2 generators together with a for-of loop?
// With generator delegation



const testingTeam = {
        lead: 'Amanda',
        tester: 'Bill'
}
    
const engineeringTeam = {
    testingTeam, 
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
}





function* TeamIterator(team) {
    yield team.lead
    yield team.manager
    yield team.engineer  
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam)
    yield* testingTeamGenerator  
}
 // Above we're calling the TestingTeamIterator passing it the testingTeam object


function* TestingTeamIterator(team) {
    yield team.lead
    yield team.tester
}



const names = []

for(let name of TeamIterator(engineeringTeam)) {
    names.push(name)
}

console.log(names); // Returns: [ 'Jill', 'Alex', 'Dave', 'Amanda', 'Bill' ]

