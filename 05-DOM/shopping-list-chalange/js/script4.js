function clearButton(){
    const clearBut = document.querySelector('#clear');
    clearBut.remove();
}

function firstItem(){
    const getUl = document.querySelector('ul');
    const li  = document.querySelector('li:first-child');

    getUl.removeChild(li);
}

//remove specific items
function removeSpecific(item){
    const getUl = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${item})`);

    getUl.removeChild(li);
}

removeSpecific(1);

// firstItem();

// clearButton();