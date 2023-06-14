import React, { useState } from 'react';
import {
  ErrorMessage,
  Label,
  LabelRating,
  ModalForm,
  SaveBtn,
  SaveBtnText,
  TextInput,
} from './FeedbackForm.styled';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating';

import { useTranslation } from 'react-i18next';

const FeedbackForm = ({ fetchData, setAnimationModal, onCloseModal }) => {
  const [newComment, setNewComment] = useState('');
  const [newRate, setNewRate] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const { i18n } = useTranslation();

  const onStarClickClick = nextValue => {
    changeRate(nextValue);
  };
  const changeRate = val => {
    setNewRate(val);
  };
  const addReview = async e => {
    let newEntry = {
      comment: newComment || '',
      rating: newRate || 0,
    };
    await axios.post(`api/reviews`, newEntry).then(() => {
      setNewComment('');
      setNewRate(0);
      fetchData();
    });
  };

  let isValid = false;
  let isValidComm = false;
  let isValidrate = false;

  function validateComment() {
    if (newComment === '') {
      isValidComm = false;
    } else if (newComment !== '') {
      isValidComm = true;
    }
  }

  function validateRate() {
    if (newRate === 0) {
      isValidrate = false;
    } else if (newRate !== 0) {
      isValidrate = true;
    }
  }

  function validateForm() {
    if (isValidComm === true && isValidrate === true) {
      isValid = true;
    }
  }
  const totalValidateAndSend = e => {
    e.preventDefault();
    validateComment();
    validateRate();
    validateForm();
    if (isValid) {
      addReview();
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleSubmit = () => {
    setAnimationModal(false);

    setTimeout(() => {
      onCloseModal();
    }, 300);
  };

  return (
    <>
      <ModalForm onSubmit={handleSubmit}>
        <LabelRating>
          {i18n.language === 'en' ? 'Rating' : 'Рейтинг'}
        </LabelRating>
        <Rating
          onClick={e => onStarClickClick(e)}
          initialValue={newRate}
          iconsCount={5}
          transition={true}
          size={24}
        />
        {isVisible && (
          <ErrorMessage className="par">
            Rating is a required field
          </ErrorMessage>
        )}

        <Label>
          {i18n.language === 'en' ? 'Review' : 'Відгук'}
          <TextInput
            placeholder={
              i18n.language === 'en' ? 'Enter text' : 'Введіть текст'
            }
            value={newComment}
            name=""
            id="feedback-text"
            cols="30"
            rows="10"
            onChange={e => {
              setNewComment(e.target.value);
            }}
          ></TextInput>
          {isVisible && (
            <ErrorMessage className="par">
              Comment is a required field
            </ErrorMessage>
          )}
        </Label>
        <SaveBtn type="submit" onClick={totalValidateAndSend}>
          <SaveBtnText>
            {i18n.language === 'en' ? 'Save' : 'Зберегти'}
          </SaveBtnText>
        </SaveBtn>
      </ModalForm>
    </>
  );
};

export default FeedbackForm;
