import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/CartSlice";
import { ICart } from "../../types/Cart";
import { Product } from "../../types/Product";
import * as C from "./CartItemStyles";

type Props = {
  item: ICart;
};

const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();

  return (
    <C.ItemContainer>
      <C.RemoveAllButton
        onClick={() => dispatch(removeFromCart({ item, removeAll: true }))}
      >
        x
      </C.RemoveAllButton>
      <C.ImageContainer>
        <Image
          src={item.photo}
          alt={item.name}
          width="80"
          height="80"
          layout="fixed"
          objectFit="contain"
        />
      </C.ImageContainer>
      <C.Title>{item.name}</C.Title>
      <C.QuantityPriceWrapper>
        <C.QuantityContainer>
          <C.QuantityLabel>Qtd:</C.QuantityLabel>
          <C.QuantityActions>
            <C.QuantityButton
              onClick={() =>
                dispatch(removeFromCart({ item: item as Product }))
              }
            >
              -
            </C.QuantityButton>
            <C.Quantity>{item.quantity}</C.Quantity>
            <C.QuantityButton
              onClick={() => dispatch(addToCart({ newItem: item as Product }))}
            >
              +
            </C.QuantityButton>
          </C.QuantityActions>
        </C.QuantityContainer>
        <C.Price>R${parseInt(item.price) * item.quantity}</C.Price>
      </C.QuantityPriceWrapper>
    </C.ItemContainer>
  );
};

export default CartItem;
