// original function that returns an object literal
// function createBookShop(inventory) {
//     return {
//         inventory: inventory,
//         inventoryValue: function() {
//             return this.inventory.reduce((total, book) => total += book.price, 0)
//         },
//         priceForTitle: function(title) {
//             return this.inventory.find((book) => book.title).price
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
        }
    }
}



const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 }
]

const bookShop = createBookShop(inventory)

console.log(bookShop.inventoryValue()); // It returns 25
console.log(bookShop.priceForTitle('Eloquent Javascript')); // it returns 15




