// const alerBox = document.querySelector('#clear');

// function onPress(){
//     alert('This will show on press!!');
// };

// alerBox.onclick = function onClear(){
//     alert('This is alert dfgdf');
// };

//addEventlistner
// alerBox.addEventListener('click', () => alert('Hello'))

//with fucntion callback
// alerBox.addEventListener('click', clearAll);

//remove itemList while press clear all button
// function alerteg(){
//     alert('Hello aksb...');
// }
//clear alert box after 5 sec
// setTimeout(() => alerBox.removeEventListener('click',alerteg), 5000);

//auto click after 5 sec
// setTimeout(() => {
//     alerBox.click()
// }, 10000);

// function clearAll(){
//     const getitems = document.querySelector('ul');
//     const items = getitems.querySelectorAll('li');

//     // getitems.innerHTML = '';
//     // items.forEach((item) => item.remove());
//     while(getitems.firstChild){
//         getitems.removeChild(getitems.firstChild);
//     }

//     console.log(getitems);

// }

//mouse events
const logo = document.querySelector('img');
const onClick = () => console.log('This is click event');
const onDoubleClick = () => {
    if(document.body.style.backgroundColor !== 'yellow'){
        document.body.style.backgroundColor = 'yellow';
        document.body.style.color = 'black';
    }else{
        document.body.style.backgroundColor = 'white';
        // document.body.style.color = 'white';
    }
    
};
const onMouseOver = () => console.log('mouse is over');

logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('mouseover', onMouseOver);

// setTimeout(() => {
//     logo.removeEventListener('mouseover', onDoubleClick);
// }, 5000);