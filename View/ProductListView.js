export default class ProductListView {
  constructor(products, container) {
    this.products = products;
    this.container = container;
    this.render();
  }

  // Termékek megjelenítése
  render() {
    this.container.empty();
    this.products.forEach(product => {
      this.container.append(`
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <button class="add-to-cart" data-id="${product.id}">Kosárba</button>
        </div>
      `);
    });
  }

  // Eseménykezelő a kosárhoz
  bindAddToCart(handler) {
    this.container.on('click', '.add-to-cart', function(event) {
      const id = $(this).data('id');
      handler(id);
    });
  }
}

