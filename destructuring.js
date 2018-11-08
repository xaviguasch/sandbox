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
}

// now the order doesn't need to match!

// signup(user) // it prints:        New York        myemail@example.com         1/1/1990            





//////////////

// You're getting this from the API:
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
]

// but need to transform the data to the below structure, a list of objects with x and z properties:

// [
//     { x: 4, y: 5},
//     { x: 10, y: 1},
//     { x: 0, y: 40}
// ]


// The below works
// const dataTransformed = points.map((pair) => {
//     const x = pair[0]
//     const y = pair[1]
//     const obj = {x, y}
//     return obj
// })

// console.log(dataTransformed); // It prints: [ { x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 } ]


// But we can do it better

const dataTransformed = points.map(([ x, y ]) => {  
    return { x, y }  // { x: x, y: y }
})

// console.log(dataTransformed); // It prints: [ { x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 } ]








/////////   CODING EXERCISES   ////////////

// 32. Destructuring in Practice
// The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.
// Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.
// Refactor this code to sue destructuring. Can you get the body of the 'isEngineer' function down to a
// single line?

// const profile = {
//     title: 'Engineer',
//     department: 'Engineering'
// };
  
// function isEngineer(profile) {
//    var title = profile.title;
//    var department = profile.department;
//    return title === 'Engineer' && department === 'Engineering';
// }


// SOLUTION

const profile = {
    title: 'Engineer',
    department: 'Engineering'
};
  
function isEngineer({ title, department }) {
    return title === 'Engineer' && department === 'Engineering';
}

// As one-liner
// const isEngineer = ({ title, department }) => title === 'Engineer' && department === 'Engineering'

// console.log(isEngineer(profile));  // It returns: true







// 33. Array Destructuring In Practice

// The 'classes' variables holds an array of arrays, where each array represents a single class that 
// a student is enrolled in. Convert this array of arrays into an array of objects, where each object
// has the keys 'subject', 'time' and 'teacher' and assign the result to 'classesAsObject'. Use array
// destructuring and the map helper.

// An array for a class has the form [subject, time, teacher]

// The resulting data structure should look something like the following:

// const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]


// const classes = [
//     [ 'Chemistry', '9AM', 'Mr. Darnick' ],
//     [ 'Physics', '10:15AM', 'Mrs. Lithun'],
//     [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
// ];
  
// const classesAsObject;



// SOLUTION

const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];
  
const classesAsObject = classes.map(([ subject, time, teacher ]) => ({ subject, time, teacher }))

// console.log(classesAsObject);
// It prints: 
// [ { subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick' },
//   { subject: 'Physics', time: '10:15AM', teacher: 'Mrs. Lithun' },
//   { subject: 'Math', time: '11:30AM', teacher: 'Mrs. Vitalis' } ]





// 34. Recursion With Destructuring

