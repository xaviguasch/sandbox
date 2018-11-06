const computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
]

// My  program needs a minimum of 16 ram to run, do I have any computers that can do it? 

let allComputersCanRunProgram = true; // It tells me if all computers can do it

let atLeastOneComputerCanRunProgram = false; // It tells me if only one or more of them can run it


for (let i = 0; i < computers.length; i++) {
    const computer = computers[i]

    if (computer.ram < 16) {
        allComputersCanRunProgram = false
    } else if (computer.ram > 16) {
        atLeastOneComputerCanRunProgram = true
    }
}
// console.log(allComputersCanRunProgram); // Returns false, because not all of them can run it.
// console.log(atLeastOneComputerCanRunProgram); // Returns true, because one or more computers can run it.

//////////////////////////////////////////////////////////////////////////////////////////////

let doesEveryComputer = computers.every((computer) => {
    return computer.ram > 16
})

// console.log(doesEveryComputer); // It returns false because not every computer checks the condition.

//////////////////////////////////////////////////////////////////////////////////////////////


let doesAtLeastOneComputer = computers.some((computer) => {
    return computer.ram > 16
})

// console.log(doesAtLeastOneComputer); // It returns true because at least one computer or more checks the
// condition.

//////////////////////////////////////////////////////////////////////////////////////////////

const names = [
    "Alexandria", 
    "Matthew",
    "Joe" 
]

// Find if there are names on this array with a length greater than 4 characters

const newNames = names.every((name) => {
    return name.length > 4
})

console.log(newNames); // We get false because not every name has a length greater than 4.


const someNames = names.some((name) => {
    return name.length > 4
})

console.log(someNames); // We get true because at least one name has a length greater than 4.


//////////////////////////////////////////////////////////////////////////////////////////////










