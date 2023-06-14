import { createPortal } from 'react-dom';
import { useCallback, useEffect, useState } from 'react';
import { ModalStyled, CloseIcon, Overlay } from './Modal.styled';

import Icons from 'images/sprite.svg';

const modalRoot = document.getElementById('modal-root');

const Modal = ({
  children,
  onCloseModal,
  isOpened,
  animationModalOnSubmit,
}) => {
  const [animationModal, setAnimationModal] = useState(isOpened);

  const closeModal = useCallback(() => {
    setAnimationModal(false);

    setTimeout(() => {
      onCloseModal();
    }, 300);
  }, [onCloseModal]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const onKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget !== target) {
      return;
    }

    closeModal();
  };

  return createPortal(
    <Overlay
      onClick={handleOverlayClick}
      animationModal={animationModal}
      animationModalOnSubmit={animationModalOnSubmit}
    >
      <ModalStyled>
        <CloseIcon onClick={closeModal}>
          <use href={`${Icons}#icon-close`}></use>
        </CloseIcon>
        {children}
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
