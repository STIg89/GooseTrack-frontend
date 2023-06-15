import styled from 'styled-components';

export const CurrentTeamContainer = styled.div`
  width: 450px;
  height: 600px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 583px;
  }
`;

export const CurrentTeamItem = styled.div`
  height: 70%;
  width: 250px;
  padding: 10px;
  background-color: var(--accent-background-color);
  border-radius: 20px;
  margin-top: 10px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 215px;
    /* padding-left: 7px; */
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 260px;
  }
`;

export const BorderOutside = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: 130px;
  margin-bottom: 10px;
`;

export const SwiperImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 115px; 
  height: 115px;
`;

export const TeamImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
`;

export const TeamName = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3em;
  max-width: 165px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #ffffff;
`;

export const TeamSubtitle = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 1em;
  text-align: center;
  color: var(--accent-background-color);
`;

export const SocList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

export const SocItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background: var(--primary-background-color);
  transition: background-color var(--animation);

  &:hover,
  &:focus {
    background-color: var(--primary-text-color);
  }
`;

export const SocLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocIcon = styled.svg`
  fill: var(--primary-text-color);
  transition: fill var(--animation);

  &:hover,
  &:focus {
    fill: var(--accent-btn-background);
    transition: fill var(--animation);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const TeamText = styled.ul`
  font-weight: 400;
  font-size: 18px;
  line-height: 1em;
  text-align: center;
  color: #ffffff;
`;
