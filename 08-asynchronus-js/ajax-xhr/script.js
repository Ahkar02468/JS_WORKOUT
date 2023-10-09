const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/Ahkar02468/repos');
// xhr.open('GET', './movie.json');

xhr.onreadystatechange = function(){
    // console.log(this.status);
    if(this.readyState === 4 && this.status === 200){
        // console.log(JSON.parse(this.responseText))
        const data = JSON.parse(this.responseText);
        data.forEach(repo => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.owner.login}`
            document.getElementById('results').appendChild(li);
        });
    }
}

xhr.send();