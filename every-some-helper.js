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
    } else {
        atLeastOneComputerCanRunProgram = true
    }
}
// console.log(allComputersCanRunProgram); // Returns false, because not all of them can run it.
// console.log(atLeastOneComputerCanRunProgram); // Returns true, because one or more computers can run it.

//////////////////////////////////////////////////////////////////////////////////////////////

let doesEveryComputer = computers.every((computer) => {
    return computer.ram > 16
})

console.log(doesEveryComputer); // It returns false because not every computer checks the condition
