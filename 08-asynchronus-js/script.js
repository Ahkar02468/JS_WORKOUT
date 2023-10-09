// setTimeout(helloFunction, 3000);
function helloFunction(){
    document.querySelector('h1').textContent = 'Hello from callback';
}

function changeToOri(){
    document.querySelector('h1').textContent = 'Text get back from clicking item.'
    setTimeout(helloFunction, 3000);
};

// const getInterval =  setInterval(myCallBack, 1000);
// console.log(getInterval);
function myCallBack(){
    console.log(Date.now());
}

function stopInterval(){
    clearInterval(makeInterval);
}
let makeInterval;
function startChange(){
    if(!makeInterval){
        makeInterval = setInterval(generateRandomColor, 1000);
    }
}

function changeColor(){
    if(document.body.style.backgroundColor !== 'black'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

function generateRandomColor() {
    const maxVal = 0xFFFFFF; // 16777215
    const randomNumber = Math.random() * maxVal;
    const randomColor = Math.floor(randomNumber).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = `#${randomColor.toUpperCase()}`;
  }

//   generateRandomColor();

document.getElementById('color').addEventListener('click', startChange);

document.getElementById('stop').addEventListener('click', stopInterval);

document.querySelector('#cancel').addEventListener('click',changeToOri);