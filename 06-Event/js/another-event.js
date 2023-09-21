const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onKeyDown(e){
    heading.innerText =  e.target.value;
}

function onChecked(e){
    isChecked = e.target.checked;
    heading.innerText = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus(){
    itemInput.style.outlineColor = 'blue';
    itemInput.style.outlineWidth = '3px';
    itemInput.style.outlineStyle = 'solid';
}

function onBlue(){
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onKeyDown);
priorityInput.addEventListener('input', onKeyDown);
checkbox.addEventListener('input', onChecked)
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlue);


// form control
const formInput = document.getElementById('item-form');
function onSubmit(e){
    e.preventDefault();
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if(item === '' || priority === '0'){
        alert('Fill out all form data');
        return;
    }

    console.log(item, priority);
}

function onSubmitNew(e){
    e.preventDefault();
    const formData = new FormData(formInput);
    // const item = formData.get('item');
    // const priority = formData.get('priority');
    const entries = formData.entries();
    for(let entry of entries){
        console.log(entry[1]);
    }
    // console.log(entries);
}

// formInput.addEventListener('submit', onSubmit)


formInput.addEventListener('submit', onSubmitNew)
