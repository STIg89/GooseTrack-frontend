import styled from 'styled-components';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1200px)',
};

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
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
  color: var(--task-modal-label-color);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-top: 18px;
  line-height: 14px;
  color: var(--task-modal-label-color);
`;

export const TextInput = styled.textarea`
  width: 100%;
  height: 111px;
  background-color: var(--task-input-bg-color);
  border: 1px solid var(--border-label-color);
  border-radius: 8px;
  margin-top: 8px;
  resize: none;
  padding-top: 14px;
  padding-left: 18px;
  color: var(--primary-text-color);
  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--label-text);
  }
  ${media.tablet} {
    height: 127px;
  }
`;

export const SaveBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 42px;
  margin-top: 18px;
  cursor: pointer;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
  transition: background-color var(--animation);

  &:hover,
  :focus {
    cursor: pointer;
    background-color: var(--hover-btn-background-color);
  }
  ${media.tablet} {
    height: 48px;
  }
`;

export const SaveBtnText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 17px;
  color: var(--text-error-color);
  opacity: 0.8;
`;
