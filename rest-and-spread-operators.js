function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number
    }, 0)
}

console.log(addNumbers([1, 2, 3, 4, 5])) // returns: 15



// imagine now that instead of an array of numbers, we have just the numbers.
// i.e. (1, 2, 3, 4, 5)   We'd need to alter the function and pass the numbers to an array in order for
// 'reduce' to work

function otherAddNumbers(a, b, c, d, e) {
    const numbers = [a, b, c, d, e]

    return numbers.reduce((sum, number) => {
        return sum + number
    }, 0)
}

console.log(otherAddNumbers(1, 2, 3, 4, 5)); // returns: 15

// The function is not that flexible. You need to always have the same number of arguments passed.

// With the rest operator we avoid this problem. All the numbers get grouped into a single array and 
// 'reduce' can work normally.

function restAddNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number
    }, 0)
}

console.log(restAddNumbers(1, 2, 3, 4, 5, 6)); // returns: 21


