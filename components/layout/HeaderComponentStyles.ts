import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f52ba;
  height: 101px;
  width: 100%;
  padding: 0px 50px;

  @media (max-width: 425px) {
    height: 48px;
  }
`;
export const Logo = styled.div`
  display: flex;
  color: white;
`;
export const LogoTitle = styled.h1`
  font-weight: 600;
  font-size: 40px;

  @media (max-width: 425px) {
    font-size: 32px;
  }
`;
export const LogoSubTitle = styled.h2`
  position: relative;
  left: 10px;
  top: 20px;
  font-weight: 200;
  font-size: 20px;

  @media (max-width: 425px) {
    font-size: 16px;
    top: 14px;
  }
`;
export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    height: 26px;
    width: 56px;
  }
`;
export const ItemsOnCart = styled.p``;
