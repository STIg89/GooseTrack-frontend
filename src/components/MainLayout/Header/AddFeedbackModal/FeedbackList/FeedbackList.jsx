import React, { useState } from 'react';
import Icons from '../../../../../images/sprite.svg';
import {
//   Avatar,
  DelBtn,
  DelBtnIcon,
  EditBtn,
  EditBtnIcon,
  FeedBackRating,
  FeedBackText,
  FeedbackInfo,
  FeedbackItem,
  FeedbackListWrapper,
  ForBtn,
  Name,
  UserAvatar,
} from './FeedbackList.styled';
import EditModal from '../EditModal/EditModal';


const FeedbackList = ({ active, setActive }) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleToggleModal = () => setIsOpened(!isOpened);
    return (
    <>
      <FeedbackListWrapper>
        <FeedbackItem>
          <ForBtn>
            <EditBtn type="button" onClick={handleToggleModal}>
              <EditBtnIcon>
                <use href={`${Icons}#task-edit-sf`}/>
              </EditBtnIcon>
            </EditBtn>
            <DelBtn type="button">
              <DelBtnIcon>
                <use href={`${Icons}#task-trash-sf`}/>
              </DelBtnIcon>
            </DelBtn>
          </ForBtn>
          <UserAvatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg" alt="user avatar" />
          {/* <Avatar/> */}
          <FeedbackInfo>
            <Name>Olena Doe</Name>
            <FeedBackRating>★★★★★</FeedBackRating>
            <FeedBackText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              aperiam, inventore velit asperiores error ad.
            </FeedBackText>
          </FeedbackInfo>
        </FeedbackItem>
        
      </FeedbackListWrapper>
      {isOpened && <EditModal onCloseModal={handleToggleModal} />}
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