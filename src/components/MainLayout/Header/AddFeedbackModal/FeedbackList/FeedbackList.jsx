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
  NoReview,
  UserAvatar,
  UserAvatarLater,
} from './FeedbackList.styled';
import EditModal from '../EditModal/EditModal';
import { Rating } from 'react-simple-star-rating';
import axios from 'axios';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const FeedbackList = ({
  setReviewsList,
  fetchData,
  setAnimationModal,
  animationModal,
}) => {
  const [updateReview, setUpdateReview] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  const { name, avatarURL } = useSelector(selectUser);

  const { i18n } = useTranslation();

  const firstLetter = name?.charAt(0).toUpperCase();

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
        {setReviewsList && setReviewsList.length ? (
          ''
        ) : (
          <NoReview>
            {i18n.language === 'en' ? 'No reviews' : 'Немає відгуків'}
          </NoReview>
        )}
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
                {avatarURL ? (
                  <UserAvatar src={item.owner.avatarURL} alt="user avatar" />
                ) : (
                  <UserAvatarLater>{firstLetter}</UserAvatarLater>
                )}
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
          isOpened={isOpened}
          setAnimationModal={setAnimationModal}
          animationModal={animationModal}
        />
      )}
    </>
  );
};

export default FeedbackList;
