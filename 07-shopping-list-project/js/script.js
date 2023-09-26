const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
// console.log(itemList);

//add item to the list
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

    //This where items are added
    itemList.appendChild(li);
    checkUI();
    itemInput.value = '';


    // console.log(li);
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
//remove item from the list
function removeItem(e){
    // console.log(e.target.parentElement)
    if(e.target.parentElement.classList.contains('remove-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
            
        };
        checkUI();
    }
}

function clearItems(e){
    // itemList.innerHTML = '';
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}
function checkUI(){
    const items = itemList.querySelectorAll('li');
    // console.log(items);
    if(items.length === 0){
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    }else{
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

function filterItems(e){
    const items = itemList.querySelectorAll('li');
    const typedText = e.target.value.toLowerCase();
    items.forEach((item) => {
        const text = item.firstChild.textContent.toLowerCase();
        if(text.indexOf(typedText) != -1){
            item.style.display = 'flex';
        }else{
            item.style.display = 'none';
        }

        // console.log(text);
    });
}
//Add events
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();