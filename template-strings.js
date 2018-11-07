// TEMPLATE STRINGS A.K.A. TEMPLATE LITERALS

function getMessage() {
    const year = new Date().getFullYear()

    return "The year is " + year
}

console.log(getMessage());


function getThatMessage() {
    const year = new Date().getFullYear()

    return `The year is ${year}`
}

console.log(getThatMessage());



/////////   CODING EXERCISES   ////////////

// 19. Template Strings in Practice
// Refactor the function to use template strings

// function doubleMessage(number) {
//     return "Your number doubled is " + (2 * number);
// }

// SOLUTION

function doubleMessage(number) {
    return `Your number doubled is ${2 * number}`
}

console.log(doubleMessage(20));



// 20. Name helpers
// Refactor the function to use template strings

// function fullName(firstName, lastName) {
//     return firstName + lastName;
// }

// SOLUTION

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullName("Martha", "Bright"));

