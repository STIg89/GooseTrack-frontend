import React from 'react';
import {
  Label,
  ModalForm,
  SaveBtn,
  SaveBtnText,
  TextInput,
} from './FeedbackForm.styled';
import StarRating from './StarRating/StarRating';

const FeedbackForm = () => {
  return (
    <>
      <ModalForm>
        <Label>Rating</Label>
          <StarRating/>
        <Label>
          Review
          <TextInput
            placeholder="Enter text"
            name=""
            id="feedback-text"
            cols="30"
            rows="10"
            className="text-input"
          ></TextInput>
        </Label>
        <SaveBtn type="submit" className="save-btn">
          <SaveBtnText>Save</SaveBtnText>
        </SaveBtn>
      </ModalForm>
    </>
  );
};

export default FeedbackForm;
