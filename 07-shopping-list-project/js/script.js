const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;
// console.log(formBtn);

function displayItems(){
    const items = getItemFromStorage();
    items.forEach(item => {
        addItemtoDOM(item)
    });
    resetUI();
}

//add item to the list
function onAddItemSubmit(e){
    e.preventDefault();
    const newItem = itemInput.value;
    if(newItem === ''){
        alert('You need to enter something!!');
        return;
    }
    if(isEditMode){
        const itemToEdit = itemList.querySelector('.edit-text');
        console.log(itemToEdit);
        if(isItemAlreadyExist(newItem)){
            alert('Item is already Exist');
            return;
        }
        removeItemFromLocalStorage(itemToEdit.textContent);
        
        itemToEdit.classList.remove('edit-text');
        itemToEdit.remove();
        isEditMode = false;
    }else{
        if(isItemAlreadyExist(newItem)){
            alert('Item is already Exist');
            return;
        }
    }
    //Add item to Local storage
    addItemToLocalStorage(newItem);
    //add item to DOM
    addItemtoDOM(newItem);
    resetUI();
    itemInput.value = '';


    // console.log(li);
}

function isItemAlreadyExist(item){
    const itemfromLocal = getItemFromStorage();
    return itemfromLocal.includes(item); 
}

function addItemtoDOM(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button  = createButton('remove-item btn-link text-red');
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    li.appendChild(button);

    //This is where items are added to li
    itemList.appendChild(li);
}

function addItemToLocalStorage(item){
    const itemFromStorage = getItemFromStorage();
    //push item to itemFromStorage array
    itemFromStorage.push(item);

    //convert item from itemFromStorage to tring and set to localstorage
    localStorage.setItem('items', JSON.stringify(itemFromStorage));
}

function getItemFromStorage(){
    let itemFromStorage;
    if(localStorage.getItem('items') === null){
        itemFromStorage = [];
    }else{
        itemFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemFromStorage;
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

function onClickRemoveBtn(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        removeItem(e.target.parentElement.parentElement);
    }else{
        setToEditMode(e.target)
    }
}

function setToEditMode(item){
    // console.log(item);
    isEditMode = true;
    console.log(isEditMode);
    itemList.querySelectorAll('li').forEach(i => i.classList.remove('edit-text'));
    item.classList.add('edit-text'); 
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formBtn.style.backgroundColor = '#b38a1a';
    itemInput.value = item.textContent;

}

//remove item from the list
function removeItem(item){
    // console.log(e.target.parentElement)
    if(confirm('Are you sure?')){
        item.remove(); 
        removeItemFromLocalStorage(item.textContent);
        resetUI();
    };
}

function removeItemFromLocalStorage(item){
    let itemFromStorage = getItemFromStorage();
    //filter item and create an new array of item that doesn't include
    itemFromStorage = itemFromStorage.filter(i => i !== item);
    //reset ui with new array
    localStorage.setItem('items', JSON.stringify(itemFromStorage));

   
}

function clearItems(e){
    // itemList.innerHTML = '';
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    resetUI();
}
function resetUI(){
    const items = itemList.querySelectorAll('li');
    // console.log(items);
    if(items.length === 0){
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    }else{
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Item`;
    formBtn.style.backgroundColor = '#333';
    isEditMode = false;
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
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', onClickRemoveBtn);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems);

resetUI();