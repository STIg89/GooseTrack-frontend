import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from 'components/Modal/Modal.styled';
import Icons from 'images/sprite.svg';
import { ResendModalOverlay, ResendEmailWrapper, Title, Text, ResendButton } from './RegisterSuccessModal.styled';

const modalRoot = document.getElementById('modal-root');

const RegistrationModal = ({ children, onCloseModal}) => {
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
    <ResendModalOverlay
      onClick={handleOverlayClick}
    >
      <ResendEmailWrapper>
        <CloseIcon onClick={() => onCloseModal()}>
          <use href={`${Icons}#icon-close`}></use>
        </CloseIcon>
        {children}
      </ResendEmailWrapper>
    </ResendModalOverlay>,
    modalRoot
  );
};

const RegistrationSuccessModal = ({ onResendEmail, onCloseModal, email }) => {
  return (
    <RegistrationModal onCloseModal={onCloseModal}>
      <Title>Registration Successful</Title>
      <Text>You are successfully registered! Verification sent to your e-mail</Text>
      <ResendButton onClick={() => onResendEmail(email)}>Resend Email</ResendButton>
    </RegistrationModal>
  );
};

export default RegistrationSuccessModal;