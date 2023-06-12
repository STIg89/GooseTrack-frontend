import styled from 'styled-components';
import { ModalStyled as BaseModalStyled } from 'components/Modal/Modal.styled';
import { StyleButton as BaseButton} from '../RegisterForm.styled';

export const ResendEmailWrapper = styled(BaseModalStyled)`
  width: 400px; 
  height: 530px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    width: 500px; 
  }

  box-shadow: none;
  text-align: center;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
`;

export const Text = styled.p`
    font-size: 18px
`;

export const ResendButton = styled(BaseButton)`   
    width: 90%;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: var(--btn-text-color);
    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 24px;
  }

`