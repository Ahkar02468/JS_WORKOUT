function Rectangular(name, height, width){
     this.name = name;
     this.height = height;
     this.width = width;
     this.area = function () {
          return this.width * this.height;
     }
}

const rec1 = new Rectangular('Rect 1', 10, 100);
console.log(rec1.area());

const rec2 = new Rectangular('Rect 2', 30, 500);
console.log(rec2.area());

console.log(rec2 instanceof Rectangular);