//call promise
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({name:'John', age: 30});
        }else{
            reject("Something went fucking wrong!!");
        }
        
    }, 1000);
});
getUser
.then((user) => {
    console.log(user);
    return user.name;
})
.then(name => {
    console.log(name);
    return name.length;
})
.then(length => console.log(length))
.catch((error) => console.log(error));

console.log("Hello form global scope!!");
