import Image from "next/image";
import { AiOutlineInbox } from "react-icons/ai";
import { Product } from "../../types/Product";
import { addToCart } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import * as C from "./ProductCardStyles";

type Props = {
  product: Product;
  setShowCart: (value: boolean) => void;
};

const ProductCard = ({ product, setShowCart }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ newItem: product }));
    setShowCart(true);
  };

  return (
    <C.CardContainer>
      <C.CardWrapper>
        <C.ImageContainer>
          <Image
            src={product.photo}
            alt={product.name}
            width="177.56px"
            height="138px"
            layout="fixed"
            objectFit="contain"
          />
        </C.ImageContainer>
        <C.InfoContainer>
          <C.Name>{product.name}</C.Name>
          <C.Price>R${parseInt(product.price)}</C.Price>
        </C.InfoContainer>
        <C.Description>
          Redesigned from scratch and completely revised
        </C.Description>
      </C.CardWrapper>
      <C.Button onClick={() => handleAddToCart(product)}>
        <AiOutlineInbox size="20px" />
        <C.ButtonText>COMPRAR</C.ButtonText>
      </C.Button>
    </C.CardContainer>
  );
};

export default ProductCard;
