// original function that returns an object literal
// function createBookShop(inventory) {
//     return {
//         inventory: inventory,
//         inventoryValue: function() {
//             return this.inventory.reduce((total, book) => total += book.price, 0)
//         },
//         priceForTitle: function(title) {
//             return this.inventory.find((book) => book.title).price
//             // The find function returns the book object, and then with ".price" we access the price property
//         }
//     }
// }


// Refactored function, now it returns an ENHANCED object literal

function createBookShop(inventory) {
    return {
        inventory,  // if the key and the value have the same name, we can condense it like this
        inventoryValue() {  // we can take away the 'function' word and the colon
            return this.inventory.reduce((total, book) => total += book.price, 0)
        },
        priceForTitle(title) { // we can take away the 'function' word and the colon
            return this.inventory.find((book) => book.title).price
            // The find function returns the book object, and then with ".price" we access the price property
        }
    }
}



const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 }
]

const bookShop = createBookShop(inventory)

// console.log(bookShop.inventoryValue()); // It returns 25
// console.log(bookShop.priceForTitle('Eloquent Javascript')); // it returns 15



/////////   CODING EXERCISES   ////////////

// 23. Multiple Properties With Enhanced Notation
// Refactor to use enhanced literal notation

const red = '#ff0000';
const blue = '#0000ff';

// const COLORS = { red: red, blue: blue };

// SOLUTION


const COLORS = { red, blue };
// console.log(COLORS); // it prints { red: '#ff0000', blue: '#0000ff' }




// 24. Condensed Code With Enhanced Literals
// Refactor the following to use enhance object literal syntax

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
// const props = { fields: fields };

// SOLUTION

const props = { fields }

// console.log(props); // It prints { fields: [ 'firstName', 'lastName', 'phoneNumber' ] }



// 25. Literals in Functions
// Refactor to use enhanced literal notation

// const canvasDimensions = function(width, initialHeight) {
//     const height = initialHeight * 9 /16;
//     return { 
//       width: width, 
//       height: height 
//     };
// }

// SOLUTION

const canvasDimensions = (width, initialHeight) => {
    const height = initialHeight * 9 /16;
    return { 
      width, 
      height 
    };
}

// console.log(canvasDimensions(12, 6)) // It returns: { width: 12, height: 3.375 }



// 26. Refactor to use enhanced literal notation

const color = 'red';

// const Car = {
//   color: color,
//   drive: function() {
//     return 'Vroom!';
//   },
//   getColor: function() {
//     return this.color;
//   }
// };


// SOLUTION

const Car = {
    color,
    drive() {
      return 'Vroom!';
    },
    getColor() {
      return this.color;
    }
};

// console.log(Car.drive()); // returns: 'Vroom!'
// console.log(Car.getColor()); // returns: red





  