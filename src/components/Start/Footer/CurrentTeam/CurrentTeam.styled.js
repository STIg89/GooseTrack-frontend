import styled from 'styled-components';

export const CurrentTeamContainer = styled.div`
  width: 280px;
  height: 600px;
  padding-top: 15px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 583px;
    /* padding-left: 7px; */
  }
`;

export const CurrentTeamItem = styled.div`
  height: 80%;
  width: 250px;
  padding: 5px;
  background-color: var(--accent-background-color);
  border-radius: 50px;
  margin-top: 10px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 215px;
    padding-left: 7px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 260px;
    /* padding-left: 7px; */
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
`;

export const TeamImage = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 65px;
  box-sizing: border-box;
`;

export const TeamName = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3em;
  max-width: 165px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  text-align: center;
  color: var(--primary-background-color);
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
    fill: var(--primary-background-color);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const TeamText = styled.ul`
  font-weight: 600;
  font-size: 18px;
  line-height: 1em;
  text-align: center;
  color: var(--team-background-color);
`;