class Wallet{
     constructor(){
          this._balance = 0;
          this._transactions = [];
     }

     deposit(amount){
          this._makeDeposit(amount);
          this._balance += amount;
     }

     widraw(amount){
          if(amount > this._balance){
               console.log('Fund is not enough!!')
               return;
          }
          this._balance -= amount;
          this._makeWidraw(amount);
     }

     get balance(){
          return this._balance;
     }

     get transactions(){
          return this._transactions;
     }

     //private method
     _makeDeposit(amount){
          console.log(`Depost: ${amount}`);
          this._transactions.push({
               type: 'Deposit',
               amount,
          });
     }

     _makeWidraw(amount){
          console.log(`Depost: ${amount}`);
          this._transactions.push({
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