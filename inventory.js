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
 constructor() {
    // Holds all products in the store
    this.inventory = [];
  }

  // Adds a product to the inventory
  addProduct(product) {
    this.inventory.push(product);
  }
  getInventoryValue() {
    return this.inventory.reduce((total, product) => {
      return total + product.getTotalValue();
    }, 0);
  }
 findProductByName(name) {
    return this.inventory.find(
      product => product.name.toLowerCase() === name.toLowerCase()
    ) || null;
  }
}

