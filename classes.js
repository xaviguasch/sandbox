// constructor function for a car

// function Car(options) {
//     this.title = options.title
// }

// Car.prototype.drive = function() {
//     return 'vroom'
// }


// const car = new Car({ title: 'Focus' })
// console.log(car); // Prints: Car { title: 'Focus' }
// console.log(car.drive()); // Prints: vroom




// constructor function that INHERITS from Car

// function Toyota(options) {
//     this.color = options.color
// }

// const toyota = new Toyota({ color: 'red', title: 'Daily Driver' })
// console.log(toyota); // Prints: Toyota { color: 'red' }   IT DOESN'T PRINT TITLE BECAUSE ISN'T INHERITING FROM
// CAR STILL.


// function Toyota(options) {
//     Car.call(this, options)
//     this.color = options.color
// }

// Toyota.prototype = Object.create(Car.prototype)
// Toyota.prototype.constructor = Toyota

// Toyota.prototype.honk = function() {
//     return 'beep'
// }

// const toyota = new Toyota({ color: 'red', title: 'Daily Driver' })
// console.log(toyota); // Prints: Toyota { title: 'Daily Driver', color: 'red' }
// console.log(toyota.drive()); // Prints: vroom
// console.log(toyota.honk()); // Prints: beep


//  NOW WITH CLASSES

