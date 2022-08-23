import { Product } from "./Product";

// Product Item from Cart
export interface ICart extends Product {
  quantity: number;
}

// Cart State - Redux
export interface CartState {
  cart: ICart[];
}
