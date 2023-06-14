import styled from 'styled-components';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1200px)',
};

export const FeedbackListWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 225px;
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

  ${media.tablet} {
    max-height: 295px;
  }
`;

export const FeedbackItem = styled.div`
  display: flex;
  position: relative;
  max-height: 108px;
  margin-right: 12px;
  ${media.tablet} {
    max-height: 130px;
  }
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
  cursor: default;
  ${media.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const UserAvatarLater = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  border-radius: 50%;
  margin-right: 12px;
  color: var(--secondary-text-color);
  background-color: var(--avatar-background-color);
  font-size: 25px;
  outline: 3px solid var(--accent-background-color);
  cursor: default;
  ${media.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const FeedbackInfo = styled.div``;
export const Name = styled.p`
  width: 100%;
  height: 18px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: var(--calendar-digit-color);
  margin: 0;
  ${media.tablet} {
    font-size: 16px;
  }
`;

export const FeedBackRating = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const FeedBackText = styled.p`
  max-width: 249px;
  height: 60px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: var(--feedback-text);
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--primary-text-color);
  ${media.tablet} {
    font-size: 14px;
    height: 75px;
  }
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
  width: 11px;
  height: 11px;
  fill: transparent;
  stroke: var(--primary-text-color);

  &:hover,
  &:focus {
    stroke: var(--accent-background-color);
  }
  ${media.tablet} {
    width: 13px;
    height: 13px;
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
  width: 11px;
  height: 11px;
  fill: transparent;
  stroke: var(--primary-text-color);

  &:hover,
  &:focus {
    stroke: var(--accent-background-color);
  }
  ${media.tablet} {
    width: 13px;
    height: 13px;
  }
`;

export const NoReview = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  color: var(--primary-text-color);
`;
