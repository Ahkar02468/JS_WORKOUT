class App{
     constructor(){
          this.serverName = 'localhost';

          document
          .querySelector('button')
          .addEventListener('click', this.getName.bind(this));
     }

     getName(){
          console.log(this.serverName)
     }
}

const app = new App();
// app.getName();