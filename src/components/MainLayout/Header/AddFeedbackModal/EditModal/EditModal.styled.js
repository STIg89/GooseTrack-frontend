import styled from 'styled-components';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1200px)',
};

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 12px;
  background-color: var(--sidebar-background-color);
`;

export const TextInput = styled.textarea`
  width: 100%;
  height: 127px;
  background-color: var(--primary-background-color);
  color: var(--primary-text-color);
  border: var(--border);
  border-radius: 8px;
  margin-top: 8px;
  resize: none;
  margin-bottom: 18px;
  padding-top: 14px;
  padding-left: 18px;
  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #343434;
  }
`;

export const LabelRating = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
  color: rgba(52, 52, 52, 0.8);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 24px;
  color: rgba(52, 52, 52, 0.8);
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 198px;
  height: 42px;
  cursor: pointer;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
  transition: background-color var(--animation);

  &:hover,
  &:focus {
    background-color: var(--hover-btn-background-color);
  }
  ${media.tablet} {
    height: 48px;
  }
`;

export const EditBtnText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;

export const CancelBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 198px;
  height: 42px;
  cursor: pointer;
  background: var(--cancel-button-background-color);
  border: none;
  border-radius: 8px;
  transition: background-color var(--animation);

  &:hover,
  &:focus {
    background-color: var(--border-label-color);
  }
  ${media.tablet} {
    height: 48px;
  }
`;

export const CancelBtnText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--calendar-digit-color);
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

export const CloseIcon = styled.svg`
  width: 12px;
  height: 12px;
`;
