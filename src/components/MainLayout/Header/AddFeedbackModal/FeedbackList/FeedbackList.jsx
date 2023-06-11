import React, { useState } from 'react';
import Icons from '../../../../../images/sprite.svg';
import {
  DelBtn,
  DelBtnIcon,
  EditBtn,
  EditBtnIcon,
  FeedBackText,
  FeedbackInfo,
  FeedbackItem,
  FeedbackListWrapper,
  ForBtn,
  Name,
  UserAvatar,
} from './FeedbackList.styled';
import EditModal from '../EditModal/EditModal';
import { Rating } from 'react-simple-star-rating';
import axios from 'axios';

const FeedbackList = ({ setReviewsList, fetchData }) => {
  const [updateReview, setUpdateReview] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  const deleteReview = async item => {
    await axios.delete(`api/reviews/${item._id}`).then(() => {
      fetchData();
    });
  };

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  const forUpdateRaview = item => {
    setUpdateReview(item);
  };

  return (
    <>
      <FeedbackListWrapper>
        {setReviewsList && setReviewsList.length ? '' : 'No reviews'}
        {setReviewsList &&
          setReviewsList.map((item, index) => {
            return (
              <FeedbackItem key={index}>
                <ForBtn>
                  <EditBtn
                    type="button"
                    onClick={() => {
                      forUpdateRaview(item);
                      handleToggleModal();
                    }}
                  >
                    <EditBtnIcon>
                      <use href={`${Icons}#task-edit-sf`} />
                    </EditBtnIcon>
                  </EditBtn>
                  <DelBtn type="button" onClick={() => deleteReview(item)}>
                    <DelBtnIcon>
                      <use href={`${Icons}#task-trash-sf`} />
                    </DelBtnIcon>
                  </DelBtn>
                </ForBtn>
                <UserAvatar src={item.owner.avatarURL} alt="user avatar" />
                <FeedbackInfo>
                  <Name>{item.owner.name}</Name>

                  <Rating
                    initialValue={item.rating}
                    iconsCount={5}
                    readonly={true}
                    size={14}
                  />
                  <FeedBackText>{item.comment}</FeedBackText>
                </FeedbackInfo>
              </FeedbackItem>
            );
          })}
      </FeedbackListWrapper>
      {isOpened && (
        <EditModal
          toFetch={fetchData}
          updateItem={updateReview}
          onCloseModal={handleToggleModal}
        />
      )}
    </>
  );
};

export default FeedbackList;

