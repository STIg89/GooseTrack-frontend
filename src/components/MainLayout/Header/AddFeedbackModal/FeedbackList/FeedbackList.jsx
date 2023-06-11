import React, { useState } from 'react';
import Icons from '../../../../../images/sprite.svg';
import {
  //   Avatar,
  DelBtn,
  DelBtnIcon,
  EditBtn,
  EditBtnIcon,
  // FeedBackRating,
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
// import { fetchAllReviews } from 'redux/reviews/operations';
import axios from 'axios';

// import StarRatingComponent from 'react-star-rating-component';

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
                {/* <Avatar/> */}
                <FeedbackInfo>
                  <Name>{item.owner.name}</Name>
                  {/* <FeedBackRating>★★★★★</FeedBackRating> */}
                  {/* <StarRatingComponent
                    className="test"
                    name="rate1"
                    starCount={5}
                    value={item.rating}
                    //  onStarHover={(e)=>onStarClickClick(e)}
                  /> */}
                  <Rating
                    // onClick={e => e}
                    initialValue={item.rating}
                    iconsCount={5}
                    readonly={true}
                    size={15}
                    // transition={true}
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

// {/* <FeedbackItem>
//         <UserAvatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg" alt="user avatar" />
//           {/* <Avatar /> */}
//           <FeedbackInfo>
//             <Name>Olena Doe</Name>
//             <FeedBackRating>★★★★★</FeedBackRating>
//             <FeedBackText>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
//               aperiam, inventore velit asperiores error ad.
//             </FeedBackText>
//           </FeedbackInfo>
//         </FeedbackItem>
//         <FeedbackItem>
//         <UserAvatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg" alt="user avatar" />
//           {/* <Avatar /> */}
//           <FeedbackInfo>
//             <Name>Olena Doe</Name>
//             <FeedBackRating>★★★★★</FeedBackRating>
//             <FeedBackText>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
//               aperiam, inventore velit asperiores error ad.
//             </FeedBackText>
//           </FeedbackInfo>
//         </FeedbackItem> */}

// {/* <FeedbackItem>
//           <ForBtn>
//             <EditBtn type="button" onClick={handleToggleModal}>
//               <EditBtnIcon>
//                 <use href={`${Icons}#task-edit-sf`}/>
//               </EditBtnIcon>
//             </EditBtn>
//             <DelBtn type="button">
//               <DelBtnIcon>
//                 <use href={`${Icons}#task-trash-sf`}/>
//               </DelBtnIcon>
//             </DelBtn>
//           </ForBtn>
//           <UserAvatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg" alt="user avatar" />
//           {/* <Avatar/> */}
//           <FeedbackInfo>
//             <Name>Olena Doe</Name>
//             <FeedBackRating>★★★★★</FeedBackRating>
//             <FeedBackText >
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
//               aperiam, inventore velit asperiores error ad.
//             </FeedBackText>
//           </FeedbackInfo>
//         </FeedbackItem> */}
