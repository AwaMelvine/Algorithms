class ShoppingCart {
  constructor(){
    this.total = 0;
    this.items = {};
  }

  addItem(itemName, quantity, price){
    var cost = quantity * price;
    this.items[itemName] = quantity;
    this.total += cost;
  }

  removeItem(itemName, quantity, price){
    delete this.items[itemName];
    var cost = quantity * price;
    if(cost >= this.total){
      this.total = 0;
    } else {
      this.total -= cost;
    }
  }

  checkout(cash_paid) {
    if(this.total > cash_paid) {
      return "Cash paid not enough";
    }
    var balance = cash_paid - this.total;
    return balance;
  }

}

class Shop extends ShoppingCart{
  constructor(){
    super();
    this.quantity = 100;
  }

  removeItem(){
      this.quantity -= 1;
  }
}
