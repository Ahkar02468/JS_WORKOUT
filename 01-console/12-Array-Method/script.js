let x;
const fruits = ['apple', 'orange', 'lemon'];
const berries = ['strawberry', 'blueberry', 'reaspberry']
//add berries array to fruit array 
// fruits.push(berries);

//concatenation of berries to fruits
// x = fruits.concat(berries);

//spread operators(represent as ...)
x = [...fruits, ...berries];

//Static Array
x  = Array.isArray(fruits);

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;
x  = Array.of(a, b, c);


console.log(x);