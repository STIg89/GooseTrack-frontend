import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
   from {
     opacity: 1;
   }
   to {
     opacity: 0;
   }
 `;

export const Overlay = styled.div`
  opacity: ${props =>
    props.animationModal && props.animationModalOnSubmit ? 1 : 0};
  visibility: ${props =>
    props.animationModal && props.animationModalOnSubmit
      ? 'visible'
      : 'hidden'};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--ovarlay-background-color);
  z-index: 1200;
  transition: opacity 300ms ease, visibility 300ms ease;
  animation: ${props =>
      props.animationModal && props.animationModalOnSubmit ? fadeIn : fadeOut}
    300ms ease;
`;

export const ModalStyled = styled.div`
  width: 339px;
  min-height: 336px;
  max-width: 90%;
  position: relative;
  padding: 40px 16px;
  border: 1px solid var(--sidebar-background-color);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  background-color: var(--sidebar-background-color);

  @media screen and (min-width: 768px) {
    width: 396px;
    padding: 40px 28px;
    margin: 0;
  }
`;

export const CloseIcon = styled.svg`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 14px;
  right: 14px;
  transition: fill var(--animation);
  fill: var(--primary-text-color);

  &:hover,
  &:focus {
    fill: var(--accent-background-color);
  }
`;
