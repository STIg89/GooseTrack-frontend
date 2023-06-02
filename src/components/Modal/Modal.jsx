import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import Icons from '../../images/sprite.svg';

import { ModalWrapper, ModalContainer, CloseButton } from './Modal.styled';

const Modal = ({ children, onClose, isModalOpen }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleCloseByEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseByEsc);
    return () => window.removeEventListener('keydown', handleCloseByEsc);
  }),
    [onClose];

  const handleCloseByOverlay = e => {
    e.preventDefault();
    if (e.target === e.currrentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <ModalWrapper
      onClick={e => e.handleCloseByOverlay(e)}
      isModalOpen={isModalOpen}
    >
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <use href={`${Icons}#icon-close`}></use>
        </CloseButton>
        {children}
      </ModalContainer>
    </ModalWrapper>
  );

  return createPortal(modalContent, modalRoot);
};

export default Modal;
