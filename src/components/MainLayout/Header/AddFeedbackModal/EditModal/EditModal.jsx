import Modal from 'components/Modal/Modal';
import React, { useEffect, useState } from 'react';
import {
  BtnWrapper,
  CancelBtn,
  CancelBtnText,
  EditBtn,
  EditBtnText,
  Label,
  ModalContent,
  ModalForm,
  TextInput,
} from './EditModal.styled';
import { useTranslation } from 'react-i18next';

import { Rating } from 'react-simple-star-rating';
import axios from 'axios';

const EditModal = ({ onCloseModal, updateItem, toFetch }) => {
  const { t } = useTranslation();
  const [updatedItem, setUpdatedItem] = useState('');

  const [isOpened, setIsOpened] = useState(true);

  const handleToggleModal = () => setIsOpened(!isOpened);

  useEffect(() => {
    setUpdatedItem(updateItem);
  }, [updateItem]);

  const onStarClickChange = nextValue => {
    changeRate(nextValue);
  };

  const changeRate = val => {
    let newEntry = {
      _id: updatedItem._id,
      comment: updatedItem.comment,
      rating: val,
    };
    setUpdatedItem(newEntry);
  };

  const changeComment = val => {
    let newEntry = {
      _id: updatedItem._id,
      comment: val,
      rating: updatedItem.rating,
    };
    setUpdatedItem(newEntry);
  };

  const updateReview = async e => {
    e.preventDefault();
    let newEntry = {
      comment: updatedItem.comment,
      rating: updatedItem.rating,
    };
    await axios.put(`api/reviews/${updatedItem._id}`, newEntry).then(() => {
      setUpdatedItem('');
      toFetch();
      onCloseModal();
    });
  };
  return (
    <Modal onCloseModal={onCloseModal} isOpened={isOpened}>
      <ModalContent
        onClick={e => {
          e.stopPropagation();
          handleToggleModal();
        }}
      >
        <ModalForm>
          <Label>{t('Rating')}</Label>
          <Rating
            onClick={e => onStarClickChange(e)}
            initialValue={updatedItem.rating}
            iconsCount={5}
            transition={true}
          />
          <Label>
            {t('Review')}
            <TextInput
              onChange={e => changeComment(e.target.value)}
              value={updatedItem.comment}
              placeholder={t('Enter text')}
              name=""
              id="feedback-text"
              cols="30"
              rows="10"
              className="text-input"
            ></TextInput>
          </Label>
          <BtnWrapper>
            <EditBtn onClick={updateReview} type="submit">
              <EditBtnText>{t('Edit')}</EditBtnText>
            </EditBtn>
            <CancelBtn type="button" onClick={onCloseModal}>
              <CancelBtnText>{t('Cancel')}</CancelBtnText>
            </CancelBtn>
          </BtnWrapper>
        </ModalForm>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
