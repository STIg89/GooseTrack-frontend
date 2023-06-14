import React from 'react';
import { nanoid } from 'nanoid';
import sprite from '../../../../images/sprite.svg';
import { CurrentTeamContainer, CurrentTeamItem, BorderOutside, SwiperImg, TeamImage, TeamName, TeamSubtitle, SocList, SocIcon, SocItem, SocLink, TextContainer, TeamText} from './CurrentTeam.styled';

const CurrentTeam =({ name, surName, position, git, linkedin, description, avatar }) => {
    const keyId = nanoid();
  
    return (
      <CurrentTeamContainer>
        <CurrentTeamItem>
          <BorderOutside>
            <SwiperImg>
              <TeamImage src={avatar} alt={surName} width={120} height={120} />
            </SwiperImg>
          </BorderOutside>
  
          <TeamName>
            {name} {surName}
          </TeamName>
          <TeamSubtitle>{position}</TeamSubtitle>
  
          <SocList>
            <SocItem key={keyId + 1}>
              <SocLink
                href={git}
                target="_blank"
                rel="noopener noreferrer"
                className="swiper__link"
              >
                <SocIcon className="swiper__icon" width={30} height={30}>
                  <use href={sprite + '#icon-github'} />
                </SocIcon>
              </SocLink>
            </SocItem>
            <SocItem key={keyId + 2}>
              <SocLink
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="swiper__link"
              >
                <SocIcon className="swiper__icon" width={30} height={30}>
                  <use href={sprite + '#icon-linkedin'} />
                </SocIcon>
              </SocLink>
            </SocItem>
          </SocList>
  
          <TextContainer>
            <TeamText>
              {description.map((element, index) => (
                <li key={keyId + index}>{element}</li>
              ))}
            </TeamText>
          </TextContainer>
        </CurrentTeamItem>
      </CurrentTeamContainer>
    );
  };
  
  export default CurrentTeam;