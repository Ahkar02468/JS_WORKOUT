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
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button)
    document.querySelector('.items').appendChild(li)
    console.log(li);
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function insertAfter(newEL, existingEL){
    existingEL.parentElement.insertBefore(newEL, existingEL.nextSibling);
}

const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');
console.log(firstItem);

insertAfter(li, firstItem);

    // createitem('Bananas-inefficient');
    // createNewItem('Cocunut(in performant way)')
    // createNewItem('Cheeese')
