const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e){
    e.preventDefault();
    const newItem = itemInput.value;
    if(newItem === ''){
        alert('You need to enter something!!');
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button  = createButton('remove-item btn-link text-red');
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    li.appendChild(button);
    itemList.appendChild(li);
    itemInput.value = '';


    console.log(li);
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;

}
//Add events
itemForm.addEventListener('submit', addItem);