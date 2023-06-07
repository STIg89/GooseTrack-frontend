import styled from 'styled-components';

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 12px;
  background-color: #fff;
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
  background-color: #f7f7f7;
  border: none;
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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: rgba(52, 52, 52, 0.8);
`;

export const BtnWrapper = styled.div`
display: flex;
gap: 8px;
`

export const EditBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 198px;
  height: 48px;
  cursor: pointer;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
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
  height: 48px;
  cursor: pointer;
  background: #E5EDFA;
  border: none;
  border-radius: 8px;
`;

export const CancelBtnText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #343434;
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