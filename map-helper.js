const numbers = [1, 2, 3]

const doubledNumbers = []

for(let i = 0; i < numbers.length; i ++) {
    doubledNumbers.push(numbers[i] * 2)
}

console.log(doubledNumbers)


// with map helper (it returns a brand new array with the changes, we are NOT mutating the original array)

const doubled = numbers.map((number) => {
    return number * 2
})

console.log(doubled)


// another example. This operation is known as "pluck", we're plucking a particular property of each object in the array.

const cars = [
    {model: 'Buick', price: 'cheap'},
    {model: 'Camaro', price: 'expensive'}
]

const prices = cars.map((car) => {
    return car.price
})

console.log(prices)



/////////   CODING EXERCISES   ////////////

// 3. Plucking values
// Using map, create a new array that contains the "height" property of each object. Assign this new array to the variable 'heights'. Don't forget to use the 'return' keyword in the function!

const images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
let heights = []

// SOLUTION

heights = images.map((image) => {
    return image.height
})

console.log(heights);


// 4. Calculating values with Map
// Using map, create a new array that contains the distance / time value from each trip. In other words, the new array should contain the (distance / time) value. Assign the result to the variable 'speeds'.

const trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];

// SOLUTION
// const speeds = trips.map((trip) => {
//     return trip.distance / trip.time
// })

// SOLUTION as a one-liner
const speeds = trips.map(trip => trip.distance / trip.time)

console.log(speeds)



// 5. Really hard, implementing 'Pluck'
//  This is a hard one!
// Implement a 'pluck' function. Pluck should accept an array and a string representing a property name and return an array containing that property from each object

// Example:

// const paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }]
// pluck(paints, 'color'); // returns ['red', 'yellow', 'blue']

// Hint:
// You can access a property on an object by using square bracket notation:

// const person = { name: 'Bill' }
// console.log(person['name']);


// SOLUTION

const seriesToWatch = [{ title: 'Homecoming'}, { title: 'The Little Drummer Girl' }, { title: 'Watership Down' }]

function pluck(array, property) {
    return array.map((item) => {        
        return item[property]
    })   
}

// ALTERNATIVE AS ONE-LINER
// const pluck = (array, property) => array.map(item => item[property])

let result = console.log(pluck(seriesToWatch, ['title']));  
// console.log(pluck(seriesToWatch, 'title')) IS THE SAME



