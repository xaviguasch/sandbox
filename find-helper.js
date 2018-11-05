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

console.log(postForComment(posts, comment));
