import { useEffect } from 'react';
import { ModalStyled, CloseIcon, Overlay } from './Modal.styled';

import Icons from 'images/sprite.svg';

const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onCloseModal]);

  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget !== target) {
      return;
    }
    onCloseModal();
  };

  return (
    <div style={{}}>
      <Overlay onClick={handleOverlayClick}>
        <ModalStyled>
          <CloseIcon onClick={() => onCloseModal()}>
            <use href={`${Icons}#icon-close`}></use>
          </CloseIcon>
          {children}
        </ModalStyled>
      </Overlay>
    </div>
  );
};

export default Modal;
