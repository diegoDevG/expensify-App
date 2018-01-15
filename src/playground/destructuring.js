// // OBJETC DESTRUCTURING

// const person ={
//     name: 'Diego' ,
//     age: 26,
//     location: {
//         city: 'Bogota',
//         temp: 92
//     }
// }

// const { name: firstname = 'Anonimus', age } = person
// console.log(`${firstname} is ${age}`);

// console.log(`${person.name} is ${person.age}`);

// const { city, temp: temperature } = person.location
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);    
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

// **fIN
// **

// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

console.log(`You are in ${address[1]}, ${address[2]}`);
// is the same to...
// const [street, city, state, zip]=address
// console.log(`You are in ${city} ${state}` );
// and you can use only what you need
// const [, , state] = address
// console.log(`You are in ${state}`);


const item= ['Coffe (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} cost ${mediumPrice}`);






