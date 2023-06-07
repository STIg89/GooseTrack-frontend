import Modal from "components/Modal/Modal";
import React from "react";
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
import StarRating from "../FeedbackForm/StarRating/StarRating";

const EditModal = ({ onCloseModal }) => {
    return (
        <Modal onCloseModal={onCloseModal}>
<ModalContent onClick={e => e.stopPropagation()}>
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
            <BtnWrapper>
              <EditBtn type="submit" className="save-btn">
                <EditBtnText>Edit</EditBtnText>
              </EditBtn>
              <CancelBtn type="submit" className="save-btn">
                <CancelBtnText>Cancel</CancelBtnText>
              </CancelBtn>
            </BtnWrapper>
          </ModalForm>
        </ModalContent>
        </Modal>
    )
}

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