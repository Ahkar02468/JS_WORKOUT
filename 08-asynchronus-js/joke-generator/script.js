const joke = document.getElementById('joke');
const getJoke = () => {
    // console.log("hello");
    const getJokeFromAPI = new XMLHttpRequest();
    getJokeFromAPI.open('GET', 'https://api.chucknorris.io/jokes/random');
    getJokeFromAPI.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                const jokes = JSON.parse(this.responseText);
                joke.innerText = jokes.value;
            }
        }else{
            joke.innerText = "Something went worng!! And it's not funny"; 
        }
    }
    getJokeFromAPI.send();
}

document.getElementById('joke-btn').addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);