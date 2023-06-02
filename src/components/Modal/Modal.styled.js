import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #fff;

  pointer-events: ${({ isModalOpen }) => (isModalOpen ? 'auto' : 'none')};
  visibility: ${({ isModalOpen }) => (isModalOpen ? 'visible' : 'hidden')};
  opacity: ${({ isModalOpen }) => (isModalOpen ? '1' : '0')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: relativ;
  width: 335px;
  padding: 28px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 57px rgba(17, 17, 17, 0.05);
  background-color: #fff;

  @media;
  (min-width: 768px) {
    width: 468px;
    padding: 32px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  cursor: pointer;

  &: hover svg path {
    stroke: #616161;
    transition: stroke 0.3s ease;
  }
`;

export { ModalWrapper, ModalContainer, CloseButton };
