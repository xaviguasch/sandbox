let colors = ['red', 'blue', 'green']

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

colors.forEach((color) => {
    console.log(color)    
})


// Create an array of numbers

const numbers = [23, 10, 100, 3, 40]

// Create a variable to hold the sum

let sum = 0

// Loop over the array, incrementing the sum variable

numbers.forEach((number) => {
    sum += number
})

// Print the sum
console.log(sum);


/////////   CODING EXERCISES   ////////////

// 1. Moving away from for loops
// Refactor the for loop with an array helper method


// function handlePosts() {
//     var posts = [
//       { id: 23, title: 'Daily JS News' },
//       { id: 52, title: 'Code Refactor City' },
//       { id: 105, title: 'The Brightest Ruby' }
//     ];
    
//     for (var i = 0; i < posts.length; i++) {
//       savePost(posts[i]);
//     }
// }

// SOLUTION

function handlePosts() {
    const posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ]
    
    posts.forEach((post) => {
        savePost(post)
    })
}



function savePost(post){
    console.log('saving post:' + post.title)
  }
   
handlePosts()



// 2. Processing values
// Calculate the area of each image (the object represents it) and store it in a new array called "areas". The area of an image can be calculated as 'image.height * image.width'

const images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ]

let areas = []

// SOLUTION

images.forEach((image) => {
    areas.push(image.height * image.width)
})

console.log(areas)



