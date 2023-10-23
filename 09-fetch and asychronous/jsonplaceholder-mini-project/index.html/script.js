const apiURL = 'https://jsonplaceholder.typicode.com/todos';

function fetchTodos(){
    fetch(apiURL + '?_limit=10')
    .then(response => {
        return response.json();
    })
    .then(todos => {
        todos.forEach(todo => {
            // console.log(todo);
            displayTodos(todo);
        });
    });
}

function displayTodos(todo){
    const div = document.createElement('div');
    div.classList.add('todo');
    const getTodo = document.getElementById('todo-list');
    div.setAttribute('data-id', todo.id);
    if(todo.completed){
        div.classList.add('done')
    }
    div.appendChild(document.createTextNode(todo.title));
    getTodo.appendChild(div);
}

const createTodo = (e) => {
    e.preventDefault();
    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    };

    fetch(apiURL,{
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(respond => respond.json())
    .then(data => displayTodos(data));
}

function makeToggle(e){
    if(e.target.classList.contains('todo')){
        e.target.classList.toggle('done');

        updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
    }
}

const updateTodo = (id, completed) => {
    fetch(`${apiURL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify( {completed} ),
        headers:{
            'Content-Type': 'application/json'
        }
    });
}

const deleteTodos = (e) => {
    if(e.target.classList.contains('todo')){
       const id = e.target.dataset.id;
       console.log(id);
       fetch(`${apiURL}/${id}`,{
        method: 'DELETE'
       })
       .then(response => response.json())
       .then(() => e.target.remove());
    }
}
const init = () => {
    document.addEventListener('DOMContentLoaded', fetchTodos);
    document.getElementById('todo-form').addEventListener('submit', createTodo);
    document.querySelector('#todo-list').addEventListener('click', makeToggle);
    document.querySelector('#todo-list').addEventListener('dblclick', deleteTodos);
}

init();