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

class Car {
    constructor({ title }) {
        this.title = title
    }

    drive() {
        return 'vroom'
    }
}

// const car = new Car({ title: 'Toyota' })
// console.log(car); // Prints: Car { title: 'Toyota' }
// console.log(car.drive()) // Prints: vroom

class Toyota extends Car {
    constructor(options) {
        super(options) 
        this.color = options.color
    }
    honk() {
        return 'Beep'
    }
}

const toyota = new Toyota({ title: 'Daily Driver', color: 'red' })
console.log(toyota); // Prints: Toyota { title: 'Daily Driver', color: 'red' }

console.log(toyota.honk()); // Prints: 'Beep'
console.log(toyota.drive()); // Prints: 'vroom'





/////////   CODING EXERCISES   ////////////

// 36. Game Classes
// You are a a game developer tasked with setting up some basic classes for a new game you are working
// on. Create a class called "Monster". In the constructor, you'll need to do some basic set up for 
// Monster whenever they are created.

// Initialize the Monster's health to 100
// The constructor will be called with an 'options' object that has a 'name' property. Assign the 'name'
// to the Monster

// class Monster {
  
// }


// SOLUTION

// class Monster {
//     constructor(options) {
//         this.health = 100
//         this.name = options.name
//     }
// }

// const monster = new Monster({ name: 'Frankie' })
// console.log(monster); // Prints:   Monster { health: 100, name: 'Frankie' }



// 36. Subclassing Monsters
// Now that you have a monster created, create a subclass of the Monster called Snake.
// The snake should have a 'bite' method. The only argument to this method is another instance of a Snake.
// The instance of Snake that is passed should have their health deducted by 10
/////////////
// What this quiz is ACTUALLY asking for. 
// Create a Monster subclass called snake.
// Create a bite method that reduces health by 10.
// Create two snakes and have one bite the other.

// class Monster {
//     constructor(options) {
//       this.health = 100;
//       this.name = options.name;
//     }
// }
  
// class Snake {

// }

// SOLUTION

class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
}

class Snake extends Monster {
    bite(victimSnake) {
        victimSnake.health -= 10; // A bit from this snake to the snake "targetSnake" should take 10 points from
        // the other snake's health
    }
}

const angrySnake = new Snake({ name: 'Angry' })
const sadSnake = new Snake({ name: 'Sadsack' })
console.log(angrySnake); // It prints: Snake { health: 100, name: 'Angry' }
console.log(sadSnake); // It prints: Snake { health: 100, name: 'Sadsack' }

angrySnake.bite(sadSnake)
console.log(sadSnake); // It prints: Snake { health: 90, name: 'Sadsack' }  
// We see that the health of sadSnake is not 90 after receiving the bite

