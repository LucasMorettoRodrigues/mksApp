import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { selectCartState } from "../../store/CartSlice";
import { getQuantityItemsInCart } from "../../utils/CartFunctions";
import * as C from "./HeaderComponentStyles";

type Props = {
  onClick: () => void;
};

const HeaderComponent = ({ onClick }: Props) => {
  const cart = useSelector(selectCartState);

  return (
    <C.Header>
      <C.Logo>
        <C.LogoTitle>MKS</C.LogoTitle>
        <C.LogoSubTitle>Sistemas</C.LogoSubTitle>
      </C.Logo>
      <C.Cart onClick={onClick}>
        <TiShoppingCart />
        <C.ItemsOnCart>{getQuantityItemsInCart(cart)}</C.ItemsOnCart>
      </C.Cart>
    </C.Header>
  );
};

export default HeaderComponent;
