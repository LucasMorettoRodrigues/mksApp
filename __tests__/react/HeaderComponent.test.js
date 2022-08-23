import { render, screen } from "@testing-library/react";
import HeaderComponent from "../../components/layout/HeaderComponent";
import "@testing-library/jest-dom";
import { selectCartState } from "../../store/CartSlice";

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
}));
jest.mock("../../store/CartSlice");

describe("Testing Header Component", () => {
  it("should render the logo", () => {
    selectCartState.mockReturnValue([]);
    render(<HeaderComponent />);

    const LogoTitle = screen.getByText("MKS");
    const LogoSubtitle = screen.getByText("Sistemas");

    expect(LogoTitle).toBeInTheDocument();
    expect(LogoSubtitle).toBeInTheDocument();
  });
  it("should render 0 if cart is empty", () => {
    selectCartState.mockReturnValue([]);
    render(<HeaderComponent />);

    const cartLength = screen.getByText("0");

    expect(cartLength).toBeInTheDocument();
  });
  it("should render the correct number of items on cart", () => {
    selectCartState.mockReturnValue([{ quantity: 2 }, { quantity: 3 }]);
    render(<HeaderComponent />);

    const cartLength = screen.getByText("5");

    expect(cartLength).toBeInTheDocument();
  });
});
