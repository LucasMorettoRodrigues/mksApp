import { CartState } from "../types/Cart";
import { Product } from "../types/Product";

export const cartReducers = {
  // Action to set the authentication status
  addToCart(state: CartState, action: { payload: { newItem: Product } }) {
    const newItem = action.payload.newItem;

    const index = state.cart.findIndex((product) => product.id === newItem.id);

    let newCart = [...state.cart];

    if (index < 0) {
      // Add item to cart
      newCart.push({ ...newItem, quantity: 1 });
    } else {
      // Update item quantity
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity + 1,
      };
    }

    state.cart = newCart;
  },

  removeFromCart(
    state: CartState,
    action: { payload: { item: Product; removeAll?: boolean } }
  ) {
    const item = action.payload.item;

    const index = state.cart.findIndex((product) => product.id === item.id);

    let newCart = [...state.cart];

    // Remove from cart
    if (action.payload.removeAll) {
      newCart.splice(index, 1);
      state.cart = newCart;
      return;
    }

    let newQuantity = newCart[index].quantity - 1;

    if (newQuantity === 0) {
      // Don't reduce quantity if quantity = 1
      return;
    } else {
      // Reduce quantity by 1
      newCart[index] = { ...newCart[index], quantity: newQuantity };
    }

    state.cart = newCart;
  },
};
