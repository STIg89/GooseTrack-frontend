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

import { Rating } from 'react-simple-star-rating';
// import StarRating from '../FeedbackForm/StarRating/StarRating';
// import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';

const EditModal = ({ onCloseModal, updateItem, toFetch }) => {
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
    <Modal onCloseModal={onCloseModal}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalForm>
          <Label>Rating</Label>
          {/* <StarRating /> */}
          {/* <StarRatingComponent
            name="rate1"
            starCount={5}
            value={updatedItem.rating}
            onStarClick={e => onStarClickChange(e)}
          /> */}
          <Rating
            onClick={e => onStarClickChange(e)}
            initialValue={updatedItem.rating}
            iconsCount={5}
            transition={true}
          />
          <Label>
            Review
            <TextInput
              onChange={e => changeComment(e.target.value)}
              value={updatedItem.comment}
              placeholder="Enter text"
              name=""
              id="feedback-text"
              cols="30"
              rows="10"
              className="text-input"
            ></TextInput>
          </Label>
          <BtnWrapper>
            <EditBtn onClick={updateReview} type="submit">
              <EditBtnText>Edit</EditBtnText>
            </EditBtn>
            <CancelBtn type="button" onClick={onCloseModal}>
              <CancelBtnText>Cancel</CancelBtnText>
            </CancelBtn>
          </BtnWrapper>
        </ModalForm>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;

// {/* <RatingWrapper>
//               <RatingItems>
//                 <RatingItem
//                   id="rating-5"
//                   type="radio"
//                   name="rating"
//                   value="5"
//                 />
//                 <RatingLabel htmlFor="rating-5"></RatingLabel>
//                 <RatingItem
//                   id="rating-4"
//                   type="radio"
//                   name="rating"
//                   value="4"
//                 />
//                 <RatingLabel htmlFor="rating-4"></RatingLabel>
//                 <RatingItem
//                   id="rating-3"
//                   type="radio"
//                   name="rating"
//                   value="3"
//                 />
//                 <RatingLabel htmlFor="rating-3"></RatingLabel>
//                 <RatingItem
//                   id="rating-2"
//                   type="radio"
//                   name="rating"
//                   value="2"
//                 />
//                 <RatingLabel htmlFor="rating-2"></RatingLabel>
//                 <RatingItem
//                   id="rating-1"
//                   type="radio"
//                   name="rating"
//                   value="1"
//                 />
//                 <RatingLabel htmlFor="rating-1"></RatingLabel>
//               </RatingItems>
//             </RatingWrapper> */}
