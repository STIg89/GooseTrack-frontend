import styled from 'styled-components';

export const FeedbackListWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 150px;
  background-color: var(--feedback-label-background-color);
  border-radius: 8px;
  margin-top: 32px;
  position: relative;
  overflow-y: auto;
  padding: 16px 0 16px 16px;
  ::-webkit-scrollbar {
    height: 90%;
    width: 8px;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  ::-webkit-scrollbar-track {
    position: absolute;
    background: #fff;
    left: 0px;
    top: 0px;
  }
  ::-webkit-scrollbar-thumb {
    position: absolute;
    width: 8px;
    height: 112px;
    left: 0px;
    top: 0px;
    background: rgba(52, 52, 52, 0.2);
    border-radius: 12px;
  }
`;

export const FeedbackItem = styled.div`
  display: flex;
  position: relative;
  max-height: 108px;
`;

export const Avatar = styled.div`
  background-image: url(../../../../../images/avatars/Olena.jpg);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: gray;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
  outline: 3px solid var(--accent-background-color);

  /* {
width:44px;
height:44px;
margin-left: 14px;
  }  */
`;

export const FeedbackInfo = styled.div``;
export const Name = styled.p`
  width: 100%;
  height: 18px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--calendar-digit-color);
  margin: 0;
`;

export const FeedBackRating = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const FeedBackText = styled.p`
  width: 314px;
  height: 56px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--feedback-text);
`;

export const ForBtn = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 15px;
`;

export const EditBtn = styled.button`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: none;
  background: none;
  cursor: pointer;
`;
export const EditBtnIcon = styled.svg`
  width: 13px;
  height: 13px;
  fill: transparent;
  stroke: var(--primary-text-color);

  &:hover,
  &:focus {
    stroke: var(--accent-background-color);
  }
`;

export const DelBtn = styled.button`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: none;
  background: none;
  cursor: pointer;
`;
export const DelBtnIcon = styled.svg`
  width: 13px;
  height: 13px;
  fill: transparent;
  stroke: var(--primary-text-color);

  &:hover,
  &:focus {
    stroke: var(--accent-background-color);
  }
`;
