import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ModalStyled, CloseIcon, Overlay } from './ModalFooter.styled';

import Icons from 'images/sprite.svg';

const modalRoot = document.getElementById('modal-root');

const ModalFooter = ({ children, onCloseModal, isOpened }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onCloseModal]);

  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget !== target) {
      return;
    }
    onCloseModal();
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick} >
      <ModalStyled>
        <CloseIcon onClick={() => onCloseModal()}>
          <use href={`${Icons}#icon-close`}></use>
        </CloseIcon>
        {children}
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};

export default ModalFooter;
