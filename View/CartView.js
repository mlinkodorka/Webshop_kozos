export default class CartView {
  constructor(container) {
    this.container = container;
  }

  // Kosár tartalmának megjelenítése
  Termekmegjelenit(cartItems, totalPrice) {
    this.container.empty();

    if (cartItems.length === 0) {
      this.container.append("<p>A kosár üres.</p>");
    } else {
      cartItems.forEach(item => {
        this.container.append(`<p>${item.name} - $${item.ár}</p>`);
      });

      this.container.append(`<p>Összesen: $${totalPrice}</p>`);
    }
  }
}
