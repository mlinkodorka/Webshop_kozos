export default class ProductListView {
  constructor(products, container) {
    this.products = products;
    this.container = container;
    this.Termekmegjelenit();
  }

  // Termékek megjelenítése
  Termekmegjelenit() {
    this.container.empty();
    this.products.forEach(product => {
      this.container.append(`
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Ár: $${product.ár}</p>
          <button class="add-to-cart" data-id="${product.id}">Kosárba</button>
        </div>
      `);
    });
  }

  // Eseménykezelő a kosárhoz
  Kattintas(handler) {
    this.container.on('click', '.add-to-cart', function(event) {
      const id = $(this).data('id');
      handler(id);
    });
  }
}

