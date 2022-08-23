import styled from "styled-components";

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 379px;
  margin-left: 47px;
  margin-right: 47px;
  background-color: white;
  height: 95px;
  border-radius: 8px;
  margin-bottom: 28px;

  @media (max-width: 425px) {
    flex-direction: row;
    margin: 0 32px;
    display: block;
    width: auto;
    height: auto;
  }
`;
export const RemoveAllButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  right: -5px;
  top: -5px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 50%;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 425px) {
    top: 10px;
    right: 10px;
    font-size: 42px;
    background-color: inherit;
    color: #000000;
  }
`;
export const ImageContainer = styled.div`
  margin: 0 10px;

  @media (max-width: 425px) {
    text-align: center;
    padding-top: 10px;
  }
`;
export const Title = styled.h1`
  width: 113px;
  margin-right: 9px;
  font-weight: 400;
  font-size: 13px;
  color: #2c2c2c;

  @media (max-width: 425px) {
    width: auto;
    text-align: center;
    font-size: 16px;
  }
`;
export const QuantityContainer = styled.div`
  font-weight: 400;
  font-size: 5px;
  margin-top: -6px;
  margin-right: 30px;

  @media (max-width: 425px) {
    margin-top: 0;
  }
`;
export const QuantityLabel = styled.div`
  font-weight: 400;
  font-size: 5px;
  margin-bottom: 2px;

  @media (max-width: 425px) {
    display: none;
  }
`;
export const QuantityActions = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 19px;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  font-weight: 400;
  font-size: 8px;
  color: #000000;

  @media (max-width: 425px) {
    text-align: center;
    width: 97px;
    height: 38px;
  }
`;
export const QuantityPriceWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px;
    padding-bottom: 18px;
  }
`;
export const Quantity = styled.div`
  flex: 1;
  border-left: 0.2px solid #bfbfbf;
  border-right: 0.2px solid #bfbfbf;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
export const QuantityButton = styled.button`
  padding: 0;
  flex: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 8px;

  @media (max-width: 425px) {
    font-size: 24px;
  }
`;
export const Price = styled.h1`
  font-weight: 700;
  font-size: 14px;
  color: #000000;

  @media (max-width: 425px) {
    text-align: center;
    color: white;
    background-color: #373737;
    width: max-content;
    padding: 9px 17px;
    border-radius: 5px;
  }
`;
