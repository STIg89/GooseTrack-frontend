import React, { useState } from 'react';
import {
  Label,
  ModalForm,
  SaveBtn,
  SaveBtnText,
  TextInput,
} from './FeedbackForm.styled';
// import StarRating from './StarRating/StarRating';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating';
// import './FeedbackForm.css';
// import StarRatingComponent from 'react-star-rating-component';

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
        <Label>{t('Rating')}</Label>

        {/* <StarRating/> */}
        {/* <StarRatingComponent
          className="test"
          name="rate1"
          starCount={5}
          value={newRate}
          onStarClick={e => onStarClickClick(e)}
          emptyStarColor={'grey'}
          //  onStarHover={(e)=>onStarClickClick(e)}
        /> */}
        <Rating
          onClick={e => onStarClickClick(e)}
          initialValue={newRate}
          iconsCount={5}
          transition={true}
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
