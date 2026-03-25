// Inventory Management System
class product {
 constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
 }
getTotalValue() {
    return this.price * this.quantity;
 }
 toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
 }
 static applyDiscount(products, discount) {
    products.forEach(product => {
      product.price = parseFloat((product.price * (1 - discount)).toFixed(2));
    });
  }
}

class PerishableProduct extends Product {
 constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }
 toString() {
    return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
  }
}

class Store {
}
