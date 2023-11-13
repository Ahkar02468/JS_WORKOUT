class MakeRectangle {
     constructor(name, height, width){
          this.name = name;
          this.height = height;
          this.width = width;
     }

     area(){
          return this.width * this.height;
     }

     perameter(){
          return 2 * (this.width + this.height)
     }

     isSquare(){
          return this.width === this.height;
     }
}

const rect1 = new MakeRectangle('Rectangle 1', 20, 20);
console.log(rect1.area());
console.log((rect1.isSquare()));
console.log((rect1.perameter()));