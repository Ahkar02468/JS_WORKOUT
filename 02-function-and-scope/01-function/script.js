//object as params
function userLogging(user){
    return `The user ${user.name} with the ID of ${user.id} is logged in.`;
}

const user = {
    id: 1,
    name: 'John Doe'
}

console.log(userLogging(user));
console.log(userLogging({
    id: 2,
    name: 'Jane Doe'
}));
