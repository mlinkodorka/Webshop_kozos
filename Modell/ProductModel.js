export default class ProductModel {
  constructor() {
    this.products = [
      { id: 1, name: "Fortec", ár: 20000, image: "Kepek/kuka1.png" },
      { id: 2, name: "Quantec", ár: 40000, image: "Kepek/kuka2.png" },
      { id: 3, name: "Delta", ár: 10000, image: "Kepek/kuka3.png" },
      { id: 4, name: "Cybertech", ár: 35000, image: "Kepek/kuka4.png" }
    ];
  }

  // Termékek lekérdezése
  getProducts() {
    return this.products;
  }

  // Termék lekérése ID alapján
  getProductById(id) {
    return this.products.find(product => product.id === id);
  }
}
