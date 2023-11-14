class Rectangle {
     constructor(name, width, height){
          this.name = name;
          this.width = width;
          this.height = height;
     }
     //polymorphism
     static logName(){
          return 'Rectangle';
         }
}

const rect1 = new Rectangle('Rect 1',10 ,30);
console.log(Rectangle.logName());

// const cir1 = new Rectangle('Cir 1');
// //direct call with class name with method name
// Rectangle.logName();