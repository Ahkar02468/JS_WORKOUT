//first challange
// const ferToCel = fer => (Math.round((fer - 32) * 5 / 9));
// console.log(`The temperature is ${ferToCel(180)} \xB0C.`);

//second challange
// const minMax = (arr) => {
//     const newObj = {};
//     newObj.min = Math.min(...arr);
//     newObj.max = Math.max(...arr);    
//     return newObj;
// }

// console.log(minMax([1, 2, 10, 3, 4, 5]));

//Challenge 3 IIFE
((width, length) => {
    console.log(`The area of a ractangle with a length of ${length} and a width of ${width} is ${width * length}.`);
})(5, 10);


