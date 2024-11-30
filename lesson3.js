// const cars = ["Saab", "Red Bull", "Scuderia Ferrari"] // const is immutable
// let animals = ["Saab"]

// for (let i = 0; i < cars.length; i++) {
//     text += cars[i];
// };

// cars.forEach(el => console.log(el));

// const numArray = [1,2,3,4,5,6,7,8]
// const evenNumber=numArray.filter( n => n % 2 === 0);
// console.log("evenNumbers", evenNumber)

// const dog = {
//     name: "Fido",
//     breed: "pug"
// }

// dog.gender = "M"
// console.log(dog.gender)

// const {name} = dog // destructuring syntax
// console.log(name)

// passing by reference vs passing by value

const person = {
    name: "Aaron",
    age: "18"
}

const thirdPerson = {...person} // makes a copy using the spread operator

const anotherPerson = person // passing by reference
anotherPerson.name = "Johnson"
console.log(person)
console.log(thirdPerson)
// arrays and objects always pass by reference

/////////////////////////////////////////////////

const dog = {
    species: "dog",
    name: "Fido"
}

let cat = dog
cat.species = "cat"
console.log(dog)

/////////////////////////////////////////////////

const animal = "elephant"

let anotherAnimal = animal
anotherAnimal = "snake"
console.log(animal)

