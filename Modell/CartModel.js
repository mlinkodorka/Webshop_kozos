export default class CartModel {
  constructor() {
    this.cart = [];
  }

  // Termék hozzáadása a kosárhoz
  hozzadkosarhoz(product) {
    this.cart.push(product);
  }

  // Kosár tartalmának lekérdezése
  kosarellenoriz() {
    return this.cart;
  }

  // Kosár összértékének kiszámítása
  osszertek() {
    return this.cart.reduce((total, product) => total + product.ár, 0);
  }

  // Kosár ürítése
  clearCart() {
    this.cart = [];
  }
}
