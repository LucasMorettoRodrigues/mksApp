import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { CartState } from "../types/Cart";
import { cartReducers } from "./CartReducers";

// Initial state
const initialState: CartState = {
  cart: [],
};

// Actual Slice
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: cartReducers,
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cart;

export default CartSlice.reducer;
