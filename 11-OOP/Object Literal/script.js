const rectangle = {
     name: 'Rectangle 1',
     width: 10,
     height: 100,
     area: function () {
          console.log(this);
          return this.width * this.height;
     }
}

console.log(rectangle.area());