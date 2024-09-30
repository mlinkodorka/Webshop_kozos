export default class ProductModel {
  constructor() {
    this.products = [
      { id: 1, name: "Termék 1", price: 1000, image: "Kepek/kuka1.png" },
      { id: 2, name: "Termék 2", price: 2000, image: "Kepek/kuka2.png" },
      { id: 3, name: "Termék 3", price: 3000, image: "Kepek/kuka3.png" },
      { id: 4, name: "Termék 4", price: 4000, image: "Kepek/kuka4.png" }
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
