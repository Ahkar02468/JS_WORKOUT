fetch('./movie.json')
    .then((data) => {
        return data.json();
    })
    .then(data => {
        console.log(data);
    });