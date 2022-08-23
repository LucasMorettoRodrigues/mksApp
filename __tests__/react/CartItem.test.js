import { render, screen } from "@testing-library/react";
import CartItem from "../../components/cart/CartItem";
import "@testing-library/jest-dom";
import { fakeCartItemOne } from "../../__mocks__/FakeItems";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
}));

describe("Testing CartItem Component", () => {
  it("should render product, quantty and subtotal", () => {
    render(<CartItem item={fakeCartItemOne} />);

    const product = screen.getByText("FakeProductOne");
    const quantity = screen.getByText("2");
    const subtotal = screen.getByText("R$2000");

    expect(product).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(subtotal).toBeInTheDocument();
  });
});
