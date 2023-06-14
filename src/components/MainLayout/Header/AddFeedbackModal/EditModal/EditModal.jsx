import Modal from 'components/Modal/Modal';
import React, { useEffect, useState } from 'react';
import {
  BtnWrapper,
  CancelBtn,
  CancelBtnText,
  EditBtn,
  EditBtnText,
  Label,
  LabelRating,
  ModalContent,
  ModalForm,
  TextInput,
} from './EditModal.styled';
import { useTranslation } from 'react-i18next';

import { Rating } from 'react-simple-star-rating';
import axios from 'axios';

const EditModal = ({
  onCloseModal,
  updateItem,
  toFetch,
  isOpened,
  setAnimationModal,
  animationModal,
}) => {
  const { i18n } = useTranslation();
  const [updatedItem, setUpdatedItem] = useState('');

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
    <Modal
      onCloseModal={onCloseModal}
      isOpened={isOpened}
      animationModalOnSubmit={animationModal}
    >
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalForm>
          <LabelRating>
            {i18n.language === 'en' ? 'Rating' : 'Рейтинг'}
          </LabelRating>
          <Rating
            onClick={e => onStarClickChange(e)}
            initialValue={updatedItem.rating}
            iconsCount={5}
            transition={true}
            size={24}
          />
          <Label>
            {i18n.language === 'en' ? 'Review' : 'Відгук'}
            <TextInput
              onChange={e => changeComment(e.target.value)}
              value={updatedItem.comment}
              placeholder={
                i18n.language === 'en' ? 'Enter text' : 'Введіть текст'
              }
              name=""
              id="feedback-text"
              cols="30"
              rows="10"
              className="text-input"
            ></TextInput>
          </Label>
          <BtnWrapper>
            <EditBtn onClick={updateReview} type="submit">
              <EditBtnText>
                {i18n.language === 'en' ? 'Edit' : 'Редагувати'}
              </EditBtnText>
            </EditBtn>
            <CancelBtn type="button" onClick={onCloseModal}>
              <CancelBtnText>
                {i18n.language === 'en' ? 'Cancel' : 'Відміна'}
              </CancelBtnText>
            </CancelBtn>
          </BtnWrapper>
        </ModalForm>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
