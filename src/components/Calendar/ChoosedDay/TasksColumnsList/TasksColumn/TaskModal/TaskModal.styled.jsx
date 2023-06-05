import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 32px;
  width: 100%;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  outline: none;
  border: none;
  padding: 12px 40px;
  background-color: #3e85f3;
  border-radius: 8px;
  transition: background-color 250ms;

  &:hover,
  &:focus {
    background-color: #1f78fc;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 63px;
  }
`;

export const AddIcon = styled.svg`
  stroke: #ffffff;
  width: 12px;
  height: 12px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #111111;
  outline: none;
  border: none;
  padding: 12px 40px;
  background-color: #efefef;
  border-radius: 8px;
  transition: background-color 250ms;

  &:hover,
  &:focus {
    background-color: #e2e2e2;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 48px;
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  outline: none;
  border: none;
  padding: 12px 40px;
  background-color: #3e85f3;
  border-radius: 8px;
  transition: background-color 250ms;

  &:hover,
  &:focus {
    background-color: #1f78fc;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 40px;
  }
`;

export const EditIcon = styled.svg`
  stroke: #ffffff;
  fill: transparent;
  width: 16px;
  height: 16px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
