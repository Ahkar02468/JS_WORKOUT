function toggle(e){
    console.log(e.target.classList);
    e.target.classList.toggle('danger');
}

let posts = [
    {title: 'Post one', body: 'This is post one.'},
    {title: 'Post two', body: 'This is post two'}
];

function createPosts(post){
    return new Promise((resolve, reject) => {
        let errFlag = true;
        if(!errFlag){
            setTimeout(() => {
                posts.push(post);
                resolve();
            }, 2000);
        }else{
            reject("Something went wrong!!");
        }
       
    })
   
}

function getPosts(){
    setTimeout(() => {
        posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
        document.querySelector('#post').appendChild(div);
        // console.log(div);
        });
    }, 1000);
}

// getPosts();
createPosts({title:'Post three', body: 'This is post three.'}).then(getPosts)
.catch((err) => {
    const div = document.createElement('h3');
    div.innerHTML = `<strong>${err}</strong>`;
    document.querySelector('#post').appendChild(div);
});
// createPosts({title:'Post foour', body: 'This is post four.'}, getPosts);

//dont pass parnathese when call a callback function
document.querySelector('button').addEventListener('click', toggle)