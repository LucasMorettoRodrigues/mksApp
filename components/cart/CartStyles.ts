import styled from "styled-components";

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 486px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #0f52ba;
  z-index: 1;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: all 0.5s ease-in;
  opacity: 0;

  &.visible {
    opacity: 1;
  }

  &.hidden {
    opacity: 0;
    transform: translateX(500px);
  }

  @media (max-width: 425px) {
    width: 95vw;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 39px;
  right: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: black;
  color: white;
  border: none;
  font-weight: 400;
  font-size: 28px;
  height: 38px;
  width: 38px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 425px) {
    top: 26px;
    right: 15px;
    color: #0f52ba;
  }
`;
export const Title = styled.p`
  white-space: pre-line;
  font-weight: 700;
  font-size: 27px;
  color: white;
  padding: 36px 47px;

  @media (max-width: 425px) {
    padding: 25px 32px;
  }
`;
export const ItemsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5px 0;
`;
export const Button = styled.button`
  text-align: center;
  background-color: black;
  color: white;
  padding: 40px 0;
  font-weight: 700;
  font-size: 28px;
  width: 100%;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 425px) {
    padding: 26px 0;
    font-size: 20px;
  }
`;
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 42px 47px;
  font-weight: 700;
  font-size: 28px;
  color: white;
`;
export const TotalText = styled.p``;
export const Text = styled.p`
  color: white;
  text-align: center;
`;
