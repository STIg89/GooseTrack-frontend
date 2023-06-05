import styled from 'styled-components';

export const ModalForm = styled.div`
  position: relative;
  padding: 48px 16px 40px 16px;
  margin: 24px 18px 14px 18px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
`;

export const CloseIcon = styled.svg`
  position: absolute;
  margin-right: 14px;
  margin-top: 14px;
  width: 14px;
  height: 14px;
  top: 0;
  right: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 40px;
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
  padding: 12px 40px 12px 40px;
  background-color: #3e85f3;
  border-radius: 8px;
`;

export const AddIcon = styled.svg`
  stroke: #ffffff;
  width: 12px;
  height: 12px;
  margin-right: 8px;
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
  padding: 12px 40px 12px 40px;
  background-color: #efefef;
  border-radius: 8px;
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
  padding: 12px 40px 12px 40px;
  background-color: #3e85f3;
  border-radius: 8px;
`;

export const EditIcon = styled.svg`
  stroke: #ffffff;
  fill: transparent;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
