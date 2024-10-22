import ProductModel from '../Modell/ProductModel.js';
import AdminTermekek from '../View/admin view/adminTermekek.js';

export default class AdminController {
  constructor() {
    this.productModel = new ProductModel();
    this.adminTermekekView = new AdminTermekek(this.productModel.getProducts(), $("#admin-tablazat"));

    this.adminTermekekView.onTorles(this.termekTorlese.bind(this));
  }

  termekTorlese(id) {
    this.productModel.products = this.productModel.products.filter(termek => termek.id !== id);
    this.adminTermekekView = new AdminTermekek(this.productModel.getProducts(), $("#admin-tablazat"));
  }
}
