import CartItem from "./CartItem";
import { selectCartState } from "../../store/CartSlice";
import { useSelector } from "react-redux";
import * as C from "./CartStyles";
import { getCartTotal } from "../../utils/CartFunctions";

type Props = {
  onClose: () => void;
  isVisible: boolean;
};

const Cart = ({ onClose, isVisible }: Props) => {
  const cart = useSelector(selectCartState);

  const cartItems = () => {
    if (cart.length === 0) {
      return <C.Text>Carrinho vazio.</C.Text>;
    }
    return cart.map((item) => <CartItem key={item.id} item={item} />);
  };

  return (
    <C.CartContainer className={isVisible ? "visible" : "hidden"}>
      <C.CloseButton onClick={onClose}>X</C.CloseButton>
      <C.Title>
        Carrinho {"\n"}
        de Compras
      </C.Title>
      <C.ItemsContainer>{cartItems()}</C.ItemsContainer>
      <C.TotalContainer>
        <C.TotalText>Total</C.TotalText>
        <C.TotalText>R${getCartTotal(cart)}</C.TotalText>
      </C.TotalContainer>
      <C.Button onClick={onClose}>Finalizar Compra</C.Button>
    </C.CartContainer>
  );
};

export default Cart;
