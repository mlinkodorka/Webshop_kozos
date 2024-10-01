import ProductModel from '../Modell/ProductModel.js';
import CartModel from '../Modell/CartModel.js';
import ProductListView from '../View/ProductListView.js';
import CartView from '../View/CartView.js';

export default class ShopController {
  constructor() {
    // Modellek
    this.productModel = new ProductModel();
    this.cartModel = new CartModel();

    // Nézetek
    this.productListView = new ProductListView(this.productModel.getProducts(), $("#product-list"));
    this.cartView = new CartView($("#cart"));

    // Események kezelése
    this.productListView.Kattintas(this.termekhozzadasa.bind(this));
  }

  // Termék hozzáadása a kosárhoz
  termekhozzadasa(Id) {
    const product = this.productModel.getProductById(Id);
    this.cartModel.hozzadkosarhoz(product);
    this.kosarfrissit();
  }

  // Kosár nézet frissítése
  kosarfrissit() {
    const cartItems = this.cartModel.kosarellenoriz();
    const totalPrice = this.cartModel.osszertek();
    this.cartView.Termekmegjelenit(cartItems, totalPrice);
    
  }
}
