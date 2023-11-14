class Wallet{
     #balance = 0;
     #transactions = [];

     deposit(amount){
          this.#makeDeposit(amount);
          this.#balance += amount;
     }

     widraw(amount){
          if(amount > this.#balance){
               console.log('Fund is not enough!!')
               return;
          }
          this.#balance -= amount;
          this.#makeWidraw(amount);
     }

     get balance(){
          return this.#balance;
     }

     get transactions(){
          return this.#transactions;
     }

     //private method
     #makeDeposit(amount){
          console.log(`Depost: ${amount}`);
          this.#transactions.push({
               type: 'Deposit',
               amount,
          });
     }

     #makeWidraw(amount){
          console.log(`Depost: ${amount}`);
          this.#transactions.push({
               type: 'Widraw',
               amount,
          });
     }
}

const bobWallet = new Wallet();
bobWallet.deposit(100);
bobWallet.widraw(30);
bobWallet.deposit(2000);
bobWallet.widraw(2800);
console.log(bobWallet.balance);
console.log(bobWallet.transactions);