const firstName = 'John';
const lastName = 'Doe';
const age = 75;

const person = {
    firstName,
    lastName,
    age
}

//destructuring
const todo = {
    id: 1,
    title: 'Take out the trash' 
}

const {id, title} = todo;

//destructing array
const numbers = [12, 23, 456, 56];
//spreading usind three dots
const [first, second, ...rest] = numbers;


console.log(first, second, rest);