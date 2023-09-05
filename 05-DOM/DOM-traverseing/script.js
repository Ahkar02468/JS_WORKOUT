let output;
const parent = document.querySelector('.parent');
output = parent.children[1].className; 
output = parent.children[1].nodeName;
parent.children[1].style.color = 'red'; 
parent.children[0].innerText = 'Child Two'; 

// get parent element from child
const child = document.querySelector('.child') 
output = child.parentElement;  
output.style.border = '1px solid #ccc' 
output.style.padding = '10px'



console.log(output);