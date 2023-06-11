import React from 'react';
import Modal from 'components/Modal/Modal';

const RegistrationSuccessModal = ({ onResendEmail, onCloseModal, isOpened }) => {
  console.log(onCloseModal);
  console.log(isOpened);
  return (
    <Modal onCloseModal={onCloseModal} isOpened={isOpened}>
      
      <h2>Registration Successful</h2>
      <p>You are successfully registered! Verification sent to your e-mail</p>
      <button onClick={onResendEmail}>Resend Email</button>
    </Modal>
  );
};

export default RegistrationSuccessModal;