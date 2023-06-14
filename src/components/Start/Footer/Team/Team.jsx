import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, FreeMode } from 'swiper';

import { teams } from './teamDB';
import ModalFooter from 'components/Modal/ModalFooter/ModalFooter';
import CurrentTeam from '../CurrentTeam/CurrentTeam';
import { FooterModalContainer, FooterModalTeam} from './Team.styled';


import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Team = ({ onCloseModal }) => {
  return (
    <ModalFooter onCloseModal={onCloseModal}>
      <FooterModalContainer>
        <FooterModalTeam>S&amp;M Coders</FooterModalTeam>
        <Swiper
          effect={'coverflow'}
          breakpoints={{
            375: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1440: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          loop={true}
          navigation={true}
          centeredSlides={false}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            depth: 0,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, FreeMode]}
          className="mySwiper"
        >
          {teams.map(
            (
              { name, surName, position, git, linkedin, description, avatar },
              index
            ) => (
              <SwiperSlide key={index}>
                    <CurrentTeam
                  name={name}
                  surName={surName}
                  position={position}
                  git={git}
                  linkedin={linkedin}
                  description={description}
                  avatar={avatar}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </FooterModalContainer>
    </ModalFooter>
  );
};

export default Team;