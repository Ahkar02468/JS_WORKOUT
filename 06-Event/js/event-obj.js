const logo = document.querySelector('img');
// const getH1 = document.querySelector('h1');
function onDrag(e){
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}
// console.log(logo)
// logo.addEventListener('drag', onDrag);

function onClick(e){
    // console.log(e.target);
    console.log(e.timeStamp);
    console.log(e.timeStamp);
    
}
// logo.addEventListener('click', onClick);

//keyboard event()
const itemInput = document.getElementById('item-input');
const onKeypress = e => console.log('keypress');
const onKeyUp = e => console.log('keyup');
const onKeyDown = e => {
    // console.log('keydown');
    // key
    document.querySelector('h1').innerText = e.key;

    //key-code
    if(e.keyCode === 13){
        alert('You presss enter');
    }
};
// itemInput.addEventListener('keypress', onKeypress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);