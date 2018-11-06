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

// console.log(newNames); // We get false because not every name has a length greater than 4.


const someNames = names.some((name) => {
    return name.length > 4
})

// console.log(someNames); // We get true because at least one name has a length greater than 4.


//////////////////////////////////////////////////////////////////////////////////////////////

// Validation example

function Field(value) {
    this.value = value
}

Field.prototype.validate = function() {
    return this.value.length > 0
}

const username = new Field("2cool")
const password = new Field("my_password")
const birthdate = new Field("10/10/2010")


// console.log(username.validate()); // it returns true because the username value is > 0
// console.log(password.validate()); // it returns true because the password value is > 0

// console.log(password.validate() && username.validate()); // checks both conditions

// Refactoring with 'every' helper

const fields = [username, password, birthdate]

const formIsValid = fields.every((field) => {
    return field.validate()
})

// console.log(formIsValid); // It returns true because all fields are valid, it checks the condition for 
// all of them

// if (formIsValid) {
//     // allow user to submit!
// } else {
//     // show an error message
// }




/////////   CODING EXERCISES   ////////////

// 12. Finding Submitted Users
// Given an array of users, return 'true' if every user has submitted a request form. Assign the result to 
// the variable 'hasSubmitted'

const users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
// const hasSubmitted;

// SOLUTION

const hasSubmitted = users.every((user) => {
    return user.hasSubmitted
})

// console.log(hasSubmitted); // Returns false because not every user has submitted a request form.





// 13. In Progress Network Requests
// Given an array of network objects representing network requests, assign the boolean 'true' to the
// variable 'inProgress' if any network request has a 'status' of 'pending'

const requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
// const inProgress;

// SOLUTION

// const inProgress = requests.some((request) => {
//     return request.status === 'pending'
// })

// single line-solution
const inProgress = requests.some(request => request.status === 'pending')


console.log(inProgress); // It returns true because at least one of the requests has the status on 'pending'.

