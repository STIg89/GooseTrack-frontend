import React, { useState } from 'react';
import {
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
const FeedbackForm = ({ fetchData }) => {
  const [newComment, setNewComment] = useState('');
  const [newRate, setNewRate] = useState(0);

  const { t } = useTranslation();

  const onStarClickClick = nextValue => {
    changeRate(nextValue);
  };
  const changeRate = val => {
    setNewRate(val);
  };
  const addReview = async e => {
    e.preventDefault();
    let newEntry = {
      comment: newComment || '',
      rating: newRate || 0,
    };
    console.log(newEntry);
    await axios.post(`api/reviews`, newEntry).then(() => {
      setNewComment('');
      setNewRate(0);
      fetchData();
    });
  };

  return (
    <>
      <ModalForm>
        <LabelRating>{t('Rating')}</LabelRating>
        <Rating
          onClick={e => onStarClickClick(e)}
          initialValue={newRate}
          iconsCount={5}
          transition={true}
          size={24}
        />

        <Label>
          {t('Review')}
          <TextInput
            placeholder={t('Enter text')}
            value={newComment}
            name=""
            id="feedback-text"
            cols="30"
            rows="10"
            className="text-input"
            onChange={e => {
              setNewComment(e.target.value);
            }}
          ></TextInput>
        </Label>
        <SaveBtn type="submit" onClick={addReview}>
          <SaveBtnText>{t('Save')}</SaveBtnText>
        </SaveBtn>
      </ModalForm>
    </>
  );
};

export default FeedbackForm;
