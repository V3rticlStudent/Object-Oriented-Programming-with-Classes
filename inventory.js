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

const apple = new Product("Apple", 2.75, 24);
const headphones = new Product("Headphones", 149.99, 8);
const notebook = new Product("Notebook", 7.50, 100);


const milk = new PerishableProduct("Milk",   2.50, 15, "2026-1-31");
const yogurt = new PerishableProduct("Yogurt", 3.00, 15, "2026-03-22");

const store = new Store();
[apple, headphones, notebook, milk, yogurt].forEach(p => store.addProduct(p));

Product.applyDiscount(store.inventory, 0.15);
