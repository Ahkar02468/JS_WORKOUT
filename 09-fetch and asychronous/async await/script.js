const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
          resolve({name: 'John', age: 40})
     }, 2000)
});
// promise.then((res) => console.log(res));


async function getPromise(){
     const response = await promise;
     console.log(response);
}

// getPromise();

//fetch with async and await
async function getusers(){
     const user = await fetch('https://jsonplaceholder.typicode.com/users');
     const response = await user.json();
     console.log(response);
}
//arrow async
const getPosts = async () => {
     const post = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
     const response = await post.json();
     console.log(response);
}


// getusers();
getPosts();