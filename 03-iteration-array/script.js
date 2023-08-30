const newArr = ['dog', 'cat', 'apple', 'orange'];
const users = [{name: 'aksb'}, {name: 'john doe'}, {name: 'jane doe'}];

// for(const arr of newArr){
//     console.log(arr);
// }

// for(const user of users){
//     console.log(user.name);
// }

//Loop over string
// const letter = 'Hello';
// for(const lets of letter){
//     console.log(lets);
// } 

//For in loop
const colorObjects = {
    name1: 'red',
    name2: 'green',
    name3: 'blue'
}

for(const key in colorObjects){
    console.log(key, colorObjects[key]);
}

