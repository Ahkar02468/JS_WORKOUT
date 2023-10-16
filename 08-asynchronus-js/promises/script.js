//call promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async tack complete!!!");
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log("Promise consume......")
})

//next style to call promises
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 complete");
        let error = false;
        if(!error){
            resolve({name:'John', age: 30});
        }else{
            reject("Something went fucking wrong!!");
        }
        
    }, 1000);
});
getUser.then((user) => console.log(user)).catch((error) => console.log(error));

console.log("Hello form global scope!!");
