
function getData(endpoint){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', endpoint);
        // xhr.open('GET', './movie.json');

        xhr.onreadystatechange = function(){
            // console.log(this.status);
            if(this.readyState === 4){
                if(this.status === 200){
                    resolve(JSON.parse(this.responseText));
                // const data = JSON.parse(this.responseText);
                }else{
                    reject(console.log('This will be error.'));
                }
                
            }
        }

        setTimeout(() => {
            xhr.send();     
        }, 2000);
    });
}

// getData('./movie.json')
// .then(data => {
//     console.log(data);
//     // console.log(data[0])
//     return getData('./director.json');
// })
// .then(director => {
//     console.log(director);
// })
// .catch(error => console.log(error));

//async with traditional xhr
async function getInfo(){
    const movies = await getData('./movies.json');
    const directors = await getData('./directors.json');
    console.log(movies, directors);
}

//async with fetch
async function getAllDataWithFetch(){
    const moviesRespond = await fetch('./movies.json');
    const movies = await moviesRespond.json();
    const directoesrespond = await fetch('./directors.json');
    const directors = await directoesrespond.json();
    console.log(movies, directors);
}



// getInfo();

getAllDataWithFetch();
