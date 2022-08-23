import { render, screen } from "@testing-library/react";
import ProductCard from "../../components/products/ProductCard";
import "@testing-library/jest-dom";
import { fakeProductOne } from "../../__mocks__/FakeItems";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
}));

describe("Testing ProductCart Component", () => {
  it("should render product", () => {
    render(<ProductCard product={fakeProductOne} />);

    const product = screen.getByText("FakeProductOne");

    expect(product).toBeInTheDocument();
  });
});
