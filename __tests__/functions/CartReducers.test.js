import "@testing-library/jest-dom";
import { cartReducers } from "../../store/CartReducers";
import { fakeProductOne, fakeProductTwo } from "../../__mocks__/FakeItems";

let cartState = { cart: [] };

describe("Testing Cart Reducers", () => {
  it("should add new item to cart", () => {
    cartReducers.addToCart(cartState, { payload: { newItem: fakeProductOne } });
    expect(cartState.cart[0]).toMatchObject({ ...fakeProductOne, quantity: 1 });
  });
  it("should add the same item to cart", () => {
    cartReducers.addToCart(cartState, { payload: { newItem: fakeProductOne } });
    expect(cartState.cart[0]).toMatchObject({ ...fakeProductOne, quantity: 2 });
  });
  it("should add other item to cart", () => {
    cartReducers.addToCart(cartState, { payload: { newItem: fakeProductTwo } });
    expect(cartState.cart[1]).toMatchObject({ ...fakeProductTwo, quantity: 1 });
  });
  it("should remove item from cart", () => {
    cartReducers.removeFromCart(cartState, {
      payload: { item: fakeProductOne },
    });
    expect(cartState.cart[0]).toMatchObject({ ...fakeProductOne, quantity: 1 });
  });
  it("should not remove item from cart when quantity is 1", () => {
    cartReducers.removeFromCart(cartState, {
      payload: { item: fakeProductOne },
    });
    expect(cartState.cart[0]).toMatchObject({ ...fakeProductOne, quantity: 1 });
  });
  it("should remove item from cart", () => {
    cartReducers.removeFromCart(cartState, {
      payload: { item: fakeProductOne, removeAll: true },
    });
    expect(cartState.cart.length).toBe(1);
  });
});
