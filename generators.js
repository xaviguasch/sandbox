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
function* shopping() {

    // 3. yield cash...
    // yield keyword exits this generator 
    // and jumps to '4. ...in exchange for groceries' (below)
    const stuffFromStore = yield 'cash'; 

    // 5. return home with groceries
    return stuffFromStore; // walking back home on the sidewalk
}

// name our shopping() generator 'gen'
const gen = shopping();

// 1. We leave our home
// begins executing code in our shopping() generator 
gen.next(); // jump to '2. Go Shopping'
// This will return:   { value: 'cash', done: false }


// 4. ...in exchange for groceries
// jumped here from '3. yield cash...'
gen.next('groceries'); // jump back to '5. return home with groceries' 
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






