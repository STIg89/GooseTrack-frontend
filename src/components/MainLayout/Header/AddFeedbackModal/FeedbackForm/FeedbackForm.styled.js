import styled from 'styled-components';

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: var(--task-modal-label-color);
`;

export const RatingWrapper = styled.div`
  position: relative;
  font-size: 40px;
  display: inline-block;
  margin-bottom: 20px;
  width: 50%;
  ::before {
    content: '★★★★★';
    display: block;
    color: lightgray;
  }
`;

export const TextInput = styled.textarea`
  width: 100%;
  height: 127px;
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
    color: #343434;
  }
`;

export const SaveBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 18px;
  cursor: pointer;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
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
//==================================

export const RatingItems = styled.div`
  position: absolute;
  width: 41%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  /* flex-direction: row-reverse; */
`;

export const RatingLabel = styled.label`
  flex: 0 0 20%;
  height: 100%;
  cursor: pointer;
  color: lightgray;
  ::before {
    content: '★';
    display: block;
    transition: all 0.3s ease 0s;
  }
  :hover,
  :hover ~ RatingLabel,
  :checked ~ RatingLabel:hover {
    color: rgba(255, 172, 51, 0.5);
  }
`;

export const RatingItem = styled.input`
  position: absolute;
  width: 0%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  top: 0;
  left: 0;
  :checked,
  :checked ~ RatingLabel {
    color: rgba(255, 172, 51, 1);
  }
`;
