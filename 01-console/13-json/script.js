const todo = {
    id: 1,
    title: 'Part One',
    body: 'This is body'
};

//convert js object to json string
const str = JSON.stringify(todo);

//parse json to object litral
const obj = JSON.parse(str);

console.log(str.body);