function Rectangular(name, height, width){
     this.name = name;
     this.height = height;
     this.width = width;
     this.area = function () {
          return this.width * this.height;
     }
}

const rec1 = new Rectangular('Rect 1', 10, 100);
// console.log(rec1.area());

const rec2 = new Rectangular('Rect 2', 30, 500);
// console.log(rec2.area());

// console.log(rec2 instanceof Rectangular);

//add properties
rec1.color = 'red';
rec2.parameter = () => 2 * (rec2.width + rec2.height);

//remove parameter
delete rec2.parameter;

//check for properties
console.log(rec1.hasOwnProperty('color'));
console.log(rec2.hasOwnProperty('color'));

//Get Keys
console.log(Object.keys(rec1));

//Get values
console.log(Object.values(rec2))

//Get entries output key and value
console.log(Object.entries(rec1));
for(let [key, value] of Object.entries(rec1)){
     console.log(`${key} - ${value}` );
}


// console.log(rec1);
// console.log(rec2);