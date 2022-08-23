import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Cart from "../components/cart/Cart";
import FooterComponent from "../components/layout/FooterComponent";
import HeaderComponent from "../components/layout/HeaderComponent";
import ProductCard from "../components/products/ProductCard";
import { Product } from "../types/Product";
import { fetchData } from "../utils/Http";
import * as C from "../styles/indexStyles";

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const setShowCartCallback = useCallback((newValue: boolean) => {
    setShowCart(newValue);
  }, []);

  useEffect(() => {
    (async function init() {
      const products: Product[] = await fetchData();
      setProducts(products);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Sistemas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* -------- Cart -------- */}
      <Cart onClose={() => setShowCart(false)} isVisible={showCart} />

      {/* -------- Header -------- */}
      <HeaderComponent onClick={() => setShowCart(true)} />

      {/* -------- Main -------- */}
      <C.Main>
        <C.ProductsContainer>
          {products &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setShowCart={setShowCartCallback}
              />
            ))}
        </C.ProductsContainer>
      </C.Main>

      {/* -------- Footer -------- */}
      <FooterComponent />
    </>
  );
};

export default Home;
