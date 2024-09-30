export default class CartModel {
  constructor() {
    this.cart = [];
  }

  // Termék hozzáadása a kosárhoz
  addToCart(product) {
    this.cart.push(product);
  }

  // Kosár tartalmának lekérdezése
  getCartItems() {
    return this.cart;
  }

  // Kosár összértékének kiszámítása
  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  // Kosár ürítése
  clearCart() {
    this.cart = [];
  }
}
