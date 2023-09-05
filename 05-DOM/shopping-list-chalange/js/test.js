const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-id'
div.setAttribute('title', 'my-element')
let shopping_item = 'Pineapple';
// div.innerText = 'Hello'

//not inefficient way
function createitem(item){
    const text = document.querySelector('.items')
    const li = document.createElement('li');
    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
    </button>`;
    text.appendChild(li);
}

//performant way
function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${item}`));
   

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button)

    document.querySelector('.items').appendChild(li)

    console.log(li);
}

createitem('Bananas-inefficient');
createNewItem('Cocunut(in performant way)')
