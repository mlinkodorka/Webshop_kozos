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
    this.productListView.bindAddToCart(this.handleAddToCart.bind(this));
  }

  // Termék hozzáadása a kosárhoz
  handleAddToCart(productId) {
    const product = this.productModel.getProductById(productId);
    this.cartModel.addToCart(product);
    this.updateCartView();
  }

  // Kosár nézet frissítése
  updateCartView() {
    const cartItems = this.cartModel.getCartItems();
    const totalPrice = this.cartModel.getTotalPrice();
    this.cartView.render(cartItems, totalPrice);
  }
}
