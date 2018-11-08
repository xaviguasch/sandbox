const expense = {
    type: 'Business',
    amount: '$45 dollar'
}

// const type = expense.type
// console.log(type); // returns 'Business'

// const amount = expense.amount
// console.log(amount); // returns '$45 dollar' 


// Refactoring to ES&

// const { type } = expense
// console.log(type) // returns 'Business'


// const { amount } = expense
// console.log(amount); // returns '$45 dollar'


// we can combine it into a single line
const { type, amount } = expense
// console.log(type) // returns 'Business'
// console.log(amount); // returns '$45 dollar'



// NOTE: You can also reassign the names like this:

// const { type: myType, myAmount: amount } = expense
// console.log(myType); // returns 'Business'
// console.log(myAmount); // returns '$45 dollar'



////////////////

const savedFile = {
    extension: 'jpeg',
    name: 'repost',
    size: 1404
}

// function fileSummary(file) {
//     return `The file ${file.name}.${file.extension} is of size ${file.size}`
// }

// console.log(fileSummary(savedFile)); // Returns: The file repost.jpeg is of size 1404


//  we can achieve the same with DESTRUCTURING

function fileSummary({name, extension, size}) {
    return `The file ${name}.${extension} is of size ${size}`
}
 
// console.log(fileSummary(savedFile)); // Returns: The file repost.jpeg is of size 1404




//////////// DESTRUCTURING ARRAYS  ////////////

// const companies = [
//     'Google',
//     'Facebook',
//     'Uber'
// ]

// const [ name ] = companies // It'll take the first element of the array (Google)

// console.log(name); // Returns: Google


// const [ name, name2, name3, name4 ] = companies // It'll take the first 3 elements of the array and the 4th
// will be undefined. You can use whatever names you want, it's the order what's important 

// console.log(name); // Returns: Google
// console.log(name2); // Returns: Facebook
// console.log(name3); // Returns: Uber
// console.log(name4); // Returns: undefined


// const [ name, ...rest ] = companies // We're assigning 'Google' to name and the other two that rest
// ('Facebook', 'Uber') to rest

// console.log(rest); // returns: [ 'Facebook', 'Uber' ]





//////////// DESTRUCTURING ARRAYS and OBJECTS  ////////////

const companies = [
    { name: 'Google', location: 'Mountain View'},
    { name: 'Facebook', location: 'Menlo Park'},
    { name: 'Uber', location: 'San Francisco'}
]

// const location = companies[0].location
// console.log(location); // Returns: Mountain View

// Now with DESTRUCTURING:

// const [{ location }] =  companies 
// console.log(location); // Returns: Mountain View  // Of the 1st object in the array, get me the value of 
// the property location




//////////

const Google = {
    locations: ['Mountain View', 'New York', 'London']
}

// Want to access to 'Mountain Dew' using destructuring

// const { locations } = Google
// console.log(locations); // It prints: ['Mountain View', 'New York', 'London']

// const { locations: [ locationName ] } = Google
// console.log(locationName); // It prints: Mountain View

// What we're saying here is: Inside the object Google, go find the property 'locations' and inside its 
// array find me the first value


// What if we want to print 'New York'?
// const { locations: [, locationName ] } = Google
// console.log(locationName); // It prints: New York







// What if we want to get the whole array of locations?
// We do this:

// const { locations: locationsArray } = Google
// console.log(locationsArray); // It prints: [ 'Mountain View', 'New York', 'London' ]






///////

// function signup(username, password, email, dateOfBirth, city) {
//     // create a new user
// }

// signup('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York')

// If the argument list for the function is too long, then it's easy to make mistakes in the order of them
// when calling the function (i.e.: You put the email before the password)





// An alternative/solution is to create an object with all the arguments to pass

const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@example.com',
    dateOfBirth: '1/1/1990',
    city: 'New York'
}


// and then pass the object as function argument instead of using a list of strings like before.


function signup({password, email, dateOfBirth, city, username}) {  // order doesn't need to match
    console.log(city);
    console.log(email);
    console.log(dateOfBirth);
    
    
    
    // create a new user
}

// now the order doesn't need to match!

signup(user) // it prints: New York        1/1/1990            myemail@example.com