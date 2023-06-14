import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { Comment } from './Comment/Comment';
import { defaultUsers } from './usersDB';
import {
  ReviewsSliderStyled,
  SwaggerButtonStyle,
  SwaggerText,
} from './ReviewsSlider.styled';
import sprite from '../../../images/sprite.svg';
import { fetchAllReviews } from 'redux/reviews/operations';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={false}
    type="button"
  >
    <svg height="6" width="39" className="svg-arrow">
      <use href={sprite + '#arRight'}></use>
    </svg>
  </div>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={false}
    type="button"
  >
    <svg height="6" width="39" className="svg-arrow">
      <use href={sprite + '#arLeft'}></use>
    </svg>
  </div>
);

export default function ReviewsSlider() {
  const [Reviews, setReviews] = useState(null);

  useEffect(() => {
    const ReviewsSliderUsers = async () => {
      try {
        const data = await fetchAllReviews();
        setReviews(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    ReviewsSliderUsers();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SlickArrowRight></SlickArrowRight>,
    prevArrow: <SlickArrowLeft></SlickArrowLeft>,
  };

  const handleMouseEnter = event => {
    const button = event.currentTarget;
    button.style.width = '100px';
    button.style.borderRadius = '50px';
    button.querySelector('.swagger-text').style.opacity = '1';
    button.querySelector('.swagger-text::before').style.opacity = '0';
  };

  const handleMouseLeave = event => {
    const button = event.currentTarget;
    button.style.width = '40px';
    button.style.borderRadius = '50%';
    button.querySelector('.swagger-text').style.opacity = '0';
  };

  return (
    Reviews && (
      <ReviewsSliderStyled>
        <section className="content-review">
          <h2 className="content-h2">Reviews</h2>
          <Slider className="slider" {...settings}>
            {Reviews.map((item, index) => (
              <Comment
                key={index}
                className="tr"
                src={
                  item.owner
                    ? item.owner.avatarURL
                    : defaultUsers[0].owner.avatarURL
                }
                star={item.rating ? item.rating : defaultUsers[0].rating}
                name={item.owner ? item.owner.name : defaultUsers[0].owner.name}
              >
                {item.comment ? item.comment : defaultUsers[0].comment}
              </Comment>
            ))}
          </Slider>
          <div style={{ textAlign: 'center' }}>
            <SwaggerButtonStyle
              href="https://goosetrack-backend.onrender.com/api-docs/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <SwaggerText className="swagger-text">Swagger</SwaggerText>
            </SwaggerButtonStyle>
          </div>
        </section>
      </ReviewsSliderStyled>
    )
  );
}
