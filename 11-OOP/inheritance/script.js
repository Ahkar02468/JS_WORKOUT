class Shape {
     constructor(name){
          this.name = name;
     }

     logName(){
          console.log(`Shape Name: ` + this.name);
     }
}

class Rectangle extends Shape{
     constructor(name, width, height){
          super(name);
          this.width = width;
          this.height = height;
     }
     //polymorphism
     logName(){
          console.log(`Rectangle name: ` + this.name);
         }
}

class Circle extends Shape{
     constructor(name, radius){
          super(name);
          this.radius = radius;
     }
     // logName(){
     //      console.log(`Circle name: ` + this.name);
     //     }
}

const rect1 = new Rectangle('Rect 1');
rect1.logName();

const cir1 = new Circle('Cir 1');
cir1.logName();

console.log(rect1 instanceof Rectangle);
console.log(rect1 instanceof Shape)