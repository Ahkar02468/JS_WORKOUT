class Person{
     constructor(firstName, lastName){
          this._firstName = firstName;
          this._lastName = lastName;
     }

     get firstName(){
          return this.calpitalizeFirstLetter(this._firstName);
     }

     set firstName(value){
          this._firstName = this.calpitalizeFirstLetter(value);
     }

     get lastName(){
          return this.calpitalizeFirstLetter(this._lastName);
     }

     set lastName(value){
          this._lastName = this.calpitalizeFirstLetter(value);
     }

     get fullName(){
          return this.firstName + ' ' + this.lastName;
     }

     calpitalizeFirstLetter(value){
          return value.charAt(0).toUpperCase() + value.slice(1);
     }
}

const person1 = new Person('jon', 'doe');
person1.firstName = 'joe';
person1.lastName = 'ja';
console.log(person1);
console.log(person1.fullName);
console.log(person1.firstName);
console.log(person1.lastName);