function fetchData({title, body}){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json',
            token: 'abc123'
        }
    })
    .then((response) => response.json())
    .then(data => console.log(data));
}

fetchData({title: 'My Post', body: 'This is body.'});