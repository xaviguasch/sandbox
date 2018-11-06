const users = [
    { name: 'Jill'},
    { name: 'Alex'},
    { name: 'Bill'}
]

let user 

for (let i = 0; i < users.length; i++) {  
    if (users[i].name === 'Alex') {
        user = users[i]
    }
}

// console.log(user);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: If there's too elements returning true, the find helper will stop at the first one and never get
// to the second one.

const userFound = users.find((user) => {
    return user.name === 'Alex'
})

console.log(userFound);


////////////////////////////////////////////////////////////////////////////////////////////////////////

function Car(model) {
    this.model = model
}

const cars = [
    new Car('Buick'),
    new Car('Camero'),
    new Car('Focus')
]

const carFound = cars.find((car) => {
    return car.model === 'Focus'
})

console.log(carFound);

////////////////////////////////////////////////////////////////////////////////////////////////////////

const posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
]

const comment = { postId: 1, content: 'Great Post' }

// Takes a comment and find which posts refers too
function postForComment(posts, comment) {
    return posts.find((post) => {
        return post.id === comment.postId
    })
}

console.log(postForComment(posts, comment)); // It returns the post with the id: 1




/////////   CODING EXERCISES   ////////////

// 8. Finding Admin Users
// Find the user in the user's array who is an admin. Assign this user to variable 'admin'

const theseUsers = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
let admin = [];

admin = theseUsers.find(thisUser =>  thisUser.admin === true)

console.log(admin);


// 9. What's Your Balance?
// Find the account with a balance of 12 and assign it to the variable 'account'

const accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
let account = []

account = accounts.find(account =>  account.balance === 12)

console.log(account);



// 10. Really Challenging: Custom findWhere Helper
// (CHECK OUT EXERCISE FOR DETAILS)

const ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
]

// console.log(Object.keys({ id: 1, height: 20 })); it gives you ['id', 'height']




function findWhere(array, criteria) {    
   const property = Object.keys(criteria) // it gives you ['height']
   // console.log(Object.keys(criteria)[0]) // it gives you 'height'
   
   return array.find((item) => {
        // criteria[property] gives you '25', the value of the property
       return item[property] === criteria[property] 
   }) 
}



console.log(findWhere(ladders, { height: 25 }))


