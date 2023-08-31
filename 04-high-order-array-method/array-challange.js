const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

const youngPeople = people.filter( people => people.age < 25).map(people => {
    return{
        name: people.firstName + ' ' + people.lastName,
        email: people.email,
    }
});
// console.log(youngPeople);

const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = numbers.filter(number => number > 0).reduce((acc, numbers) => acc + numbers, 0);
// console.log(positiveSum);

const words = ['coder', 'programmer', 'developer'];
const capitalizedWord = words.map(capWord => {
    return capWord[0].toUpperCase() + capWord.slice(1, capWord.length);
});

console.log(capitalizedWord);