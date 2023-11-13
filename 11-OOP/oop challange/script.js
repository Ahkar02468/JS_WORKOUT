function Player(name, lvl, points){
     this.name = name;
     this.lvl = 1;
     this.points = 0;
}

Player.prototype.gainXP = function(point){
     if(point < 0 || point > 10){
          console.log('The point range must be in 0 to 10.');
          return;
     }

     this.points += point;
     if(this.points >=  10){
          this.lvl += 1;
          this.points -= 10;
     } 
     console.log(this.describe());
}

Player.prototype.describe = function(){
     return `${this.name} is level ${this.lvl} with ${this.points} experience points.`;
}

const player1 = new Player('Ahkar');
const player2 = new Player('Bob');

player1.gainXP(9);
player1.gainXP(9);
player1.gainXP(9);
player2.gainXP(5);
player2.gainXP(8);


// console.log(player1.describe());
// console.log(player2.describe());