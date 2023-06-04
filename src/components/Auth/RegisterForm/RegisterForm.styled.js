import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dcebf7;
`;

export const StyleFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  width: 335px;
  margin-bottom: 18px;
  background-color: #fff;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 480px;
    padding: 40px;
    margin-bottom: 24px;
  }
`;

export const StyleFormTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  margin-bottom: 22px;
`;

export const StyleLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #616161;
`;

export const StyleInput = styled.input`
  background-color: #ffffff;
  outline: none;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  padding: 0.875rem;
  max-width: 400px;
  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #dce3e5;
  }
`;

export const StyleParaghraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-top: 24px;
  margin-bottom: 8px;
  color: #111111;

  @media (min-width: 768px) {
    margin-top: 18px;
  }
`;

export const StyleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 287px;
  height: 46px;
  column-gap: 0.8125rem;
  padding: 14px;
  margin-top: 30px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: none;
  cursor: pointer;

  &:hover,
  :focus {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 56px;
    padding: 16px;
    margin-top: 48px;
  }
`;

export const ButtonText = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: #ffffff;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ErrorMessage = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: red;
`;

export const RegisterGooseImage = styled.img`
  display: none;
  @media (min-width: 1440px) {
    position: absolute;
    width: 400px;
    height: 454px;
    left: 50px;
    bottom: 0;
    display: block;
  }
`;

export const LoginGooseImage = styled.img`
  display: none;
  @media (min-width: 1440px) {
    position: absolute;
    width: 368px;
    height: 521px;
    right: 60px;
    bottom: 19px;
    display: block;
  }
`;
