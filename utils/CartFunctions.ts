import { ICart } from "../types/Cart";

export const getCartTotal = (cart: ICart[]) =>
  cart.reduce((cur, item) => cur + parseInt(item.price) * item.quantity, 0);

export const getQuantityItemsInCart = (cart: ICart[]) =>
  cart.reduce((cur, item) => cur + item.quantity, 0);
