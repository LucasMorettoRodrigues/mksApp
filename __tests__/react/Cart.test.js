import { render, screen } from "@testing-library/react";
import Cart from "../../components/cart/Cart";
import "@testing-library/jest-dom";
import { selectCartState } from "../../store/CartSlice";
import { fakeCartItemOne, fakeCartItemTwo } from "../../__mocks__/FakeItems";

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

jest.mock("../../store/CartSlice");

describe("Testing Cart Component", () => {
  it("should render empty cart message", () => {
    selectCartState.mockReturnValue([]);
    render(<Cart />);

    const message = screen.getByText("Carrinho vazio.");

    expect(message).toBeInTheDocument();
  });
  it("should render items on cart, quantity, subtotal and total", () => {
    selectCartState.mockReturnValue([fakeCartItemOne, fakeCartItemTwo]);

    render(<Cart />);

    const item1 = screen.getByText("FakeProductOne");
    const subTotal1 = screen.getByText("R$2000");
    const quantity1 = screen.getByText("2");
    const item2 = screen.getByText("FakeProductTwo");
    const subTotal2 = screen.getByText("R$6");
    const quantity2 = screen.getByText("3");
    const total = screen.getByText("R$2006");

    expect(item1).toBeInTheDocument();
    expect(subTotal1).toBeInTheDocument();
    expect(quantity1).toBeInTheDocument();

    expect(item2).toBeInTheDocument();
    expect(subTotal2).toBeInTheDocument();
    expect(quantity2).toBeInTheDocument();

    expect(total).toBeInTheDocument();
  });
});
