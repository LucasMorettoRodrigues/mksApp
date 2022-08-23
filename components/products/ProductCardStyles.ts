import styled from "styled-components";

export const CardContainer = styled.div`
  width: 217.56px;
  height: 285px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  margin: 10px;
`;
export const CardWrapper = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 14px;
`;
export const ImageContainer = styled.div`
  height: 138px;
  width: fit-content;
  margin: 0 auto;
`;
export const InfoContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 15px;
  height: 38px;
`;
export const Name = styled.h3`
  width: 124px;
  font-weight: 400;
  font-size: 16px;
  color: #2c2c2c;
`;
export const Price = styled.p`
  display: flex;
  align-items: center;
  padding: 0 8px;
  background-color: #373737;
  height: 26px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  color: white;
`;
export const Description = styled.p`
  margin: 10px 0;
  font-size: 10px;
  font-weight: 300;
  color: #2c2c2c;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 14px;
  font-weight: 600;
  background-color: #0f52ba;
  width: 100%;
  color: white;
  padding: 10px 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
export const ButtonText = styled.span`
  margin-left: 5px;
`;
