const stringLit = 'Hello';
const objLit = new String('Hello world');

console.log(stringLit, typeof stringLit);
console.log(objLit, typeof objLit);

//Boxing take place because string is primitive and to change to uppercase, the string need to be changed to object 
console.log(stringLit.toLocaleUpperCase());

//unboxing => change back to literal
console.log(objLit.valueOf(), typeof objLit.valueOf());

//array is not literal